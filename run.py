"""
Main CLI for the collision avoidance system.

Usage:
    # Refresh data (run these locally where celestrak.org / space-track.org
    # are reachable -- see data/fetch_celestrak.py and data/fetch_spacetrack.py)
    python run.py --refresh-celestrak --group stations
    python run.py --refresh-celestrak --group cosmos-2251-debris
    python run.py --refresh-spacetrack --norad-ids 25544

    # Run an assessment against whatever is currently in the database
    python run.py --assess --primary-norad-id 25544 --hours 24
"""
import argparse
import json
import sys
from datetime import datetime, timedelta, timezone

from data.db import init_db, stats, record_conjunction_event
from src.propagation import load_primary, load_candidates
from src.conjunction import assess_conjunctions
from src.maneuver import plan_avoidance_burn


def cmd_refresh_celestrak(args):
    from data.fetch_celestrak import ingest, USEFUL_GROUPS
    group = USEFUL_GROUPS.get(args.group, args.group) if args.group else None
    count, errors = ingest(group=group, catnr=args.catnr, db_path=args.db)
    print(f"Ingested {count} records ({errors} skipped).")
    print(json.dumps(stats(args.db), indent=2))


def cmd_refresh_spacetrack(args):
    from data.fetch_spacetrack import ingest
    ids = [int(x) for x in args.norad_ids.split(",")] if args.norad_ids else None
    count, errors = ingest(norad_ids=ids, recent_debris=args.recent_debris, db_path=args.db)
    print(f"Ingested {count} records ({errors} skipped).")
    print(json.dumps(stats(args.db), indent=2))


def cmd_assess(args):
    init_db(args.db)
    primary = load_primary(args.primary_norad_id, db_path=args.db)
    candidates = load_candidates(exclude_norad_id=primary.norad_id, db_path=args.db)

    if not candidates:
        print("No candidate objects in the database. Run a --refresh-* command first.")
        return

    start = datetime.now(timezone.utc)
    end = start + timedelta(hours=args.hours)

    print(f"Assessing {primary.name} (NORAD {primary.norad_id}) against "
          f"{len(candidates)} tracked objects, {args.hours}h window...")

    events, skipped = assess_conjunctions(
        primary, candidates, start, end,
        screening_distance_km=args.screening_km,
    )

    print(f"Altitude pre-filter skipped {skipped} objects with no orbital overlap.")

    if not events:
        print("No conjunctions found within the screening distance.")
        return

    for e in events[:args.top]:
        print(e)
        result = plan_avoidance_burn(e)
        print(json.dumps(result, indent=2))

        record_conjunction_event({
            "primary_norad_id": primary.norad_id,
            "secondary_norad_id": e.secondary.norad_id,
            "tca": e.tca.isoformat(),
            "miss_distance_km": e.miss_distance_km,
            "probability_of_collision": e.pc,
            "maneuver_recommended": result.get("maneuver_needed", False),
            "maneuver_details": result,
        }, db_path=args.db)
        print("-" * 60)

    print(f"Recorded {min(len(events), args.top)} events to the database "
          f"(conjunction_events table).")


if __name__ == "__main__":
    p = argparse.ArgumentParser(description=__doc__,
                                  formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--db", type=str, default=None, help="Path to SQLite db (default: data/tracking.db)")

    p.add_argument("--refresh-celestrak", action="store_true")
    p.add_argument("--group", type=str, help="CelesTrak group name")
    p.add_argument("--catnr", type=int, help="Single NORAD catalog number (CelesTrak)")

    p.add_argument("--refresh-spacetrack", action="store_true")
    p.add_argument("--norad-ids", type=str, help="Comma-separated NORAD IDs (Space-Track)")
    p.add_argument("--recent-debris", action="store_true")

    p.add_argument("--assess", action="store_true")
    p.add_argument("--primary-norad-id", type=int)
    p.add_argument("--hours", type=float, default=24.0)
    p.add_argument("--screening-km", type=float, default=25.0)
    p.add_argument("--top", type=int, default=10, help="Max conjunctions to report/store")

    args = p.parse_args()

    if args.refresh_celestrak:
        cmd_refresh_celestrak(args)
    elif args.refresh_spacetrack:
        cmd_refresh_spacetrack(args)
    elif args.assess:
        if not args.primary_norad_id:
            sys.exit("--assess requires --primary-norad-id")
        cmd_assess(args)
    else:
        p.print_help()
