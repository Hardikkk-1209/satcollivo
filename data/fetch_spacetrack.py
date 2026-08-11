"""
Fetches TLE data from Space-Track.org (requires a free account).

Run this LOCALLY -- Space-Track requires authentication and isn't
reachable from a sandboxed environment.

Usage:
    export SPACETRACK_USER="you@example.com"
    export SPACETRACK_PASS="yourpassword"
    python fetch_spacetrack.py --norad-ids 25544,48274 --out-db data/tracking.db
    python fetch_spacetrack.py --recent-debris --out-db data/tracking.db
"""
import os
import sys
import argparse
from datetime import datetime, timezone
import requests

sys.path.insert(0, str(__file__).rsplit("/", 2)[0])
from data.db import init_db, upsert_tracked_object, stats

BASE_URL = "https://www.space-track.org"
LOGIN_URL = f"{BASE_URL}/ajaxauth/login"


def get_session():
    user = os.environ.get("SPACETRACK_USER")
    pw = os.environ.get("SPACETRACK_PASS")
    if not user or not pw:
        raise RuntimeError("Set SPACETRACK_USER and SPACETRACK_PASS environment variables first.")
    s = requests.Session()
    resp = s.post(LOGIN_URL, data={"identity": user, "password": pw})
    resp.raise_for_status()
    return s


def fetch_by_norad_ids(session, norad_ids):
    ids_str = ",".join(str(i) for i in norad_ids)
    url = (f"{BASE_URL}/basicspacedata/query/class/gp/NORAD_CAT_ID/{ids_str}"
           "/orderby/EPOCH desc/format/json")
    resp = session.get(url)
    resp.raise_for_status()
    return resp.json()


def fetch_recent_debris(session, limit=500):
    url = (f"{BASE_URL}/basicspacedata/query/class/gp/OBJECT_TYPE/DEBRIS"
           f"/orderby/EPOCH desc/limit/{limit}/format/json")
    resp = session.get(url)
    resp.raise_for_status()
    return resp.json()


def normalize_record(rec: dict) -> dict:
    return {
        "norad_id": int(rec.get("NORAD_CAT_ID")),
        "name": rec.get("OBJECT_NAME"),
        "object_type": rec.get("OBJECT_TYPE", "UNKNOWN"),
        "epoch": rec.get("EPOCH"),
        "tle_line1": rec.get("TLE_LINE1"),
        "tle_line2": rec.get("TLE_LINE2"),
        "source": "SPACETRACK",
        "sensor": "TLE_ONLY",  # Space-Track's public GP class doesn't expose sensor origin
        "rcs_size": rec.get("RCS_SIZE"),
        "fetched_at": datetime.now(timezone.utc).isoformat(),
        "raw_response": rec,
    }


def ingest(norad_ids=None, recent_debris=False, db_path=None):
    init_db(db_path) if db_path else init_db()
    session = get_session()

    if norad_ids:
        raw = fetch_by_norad_ids(session, norad_ids)
    elif recent_debris:
        raw = fetch_recent_debris(session)
    else:
        raise ValueError("Pass norad_ids or recent_debris=True")

    count, errors = 0, 0
    for rec in raw:
        try:
            normalized = normalize_record(rec)
            upsert_tracked_object(normalized, db_path) if db_path else upsert_tracked_object(normalized)
            count += 1
        except (ValueError, TypeError, KeyError) as e:
            errors += 1
            print(f"  skipped one record: {e}", file=sys.stderr)
    return count, errors


if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("--norad-ids", type=str, help="comma separated NORAD IDs")
    p.add_argument("--recent-debris", action="store_true")
    p.add_argument("--out-db", type=str, default=None)
    args = p.parse_args()

    ids = [int(x) for x in args.norad_ids.split(",")] if args.norad_ids else None
    count, errors = ingest(norad_ids=ids, recent_debris=args.recent_debris, db_path=args.out_db)
    print(f"Ingested {count} records ({errors} skipped) into the database.")
    print(stats(args.out_db) if args.out_db else stats())
