"""
Fetches real GP/TLE data from CelesTrak.org.

Usage:
    python data/fetch_celestrak.py --catnr 25544 --out-db data/tracking.db
    python data/fetch_celestrak.py --group starlink --out-db data/tracking.db
    python data/fetch_celestrak.py --group cosmos-2251-debris --out-db data/tracking.db
"""

import argparse
import sys
from datetime import datetime, timezone

import requests

sys.path.insert(0, str(__file__).rsplit("/", 2)[0])

from data.db import init_db, upsert_tracked_object, stats


BASE_URL = "https://celestrak.org/NORAD/elements/gp.php"


USEFUL_GROUPS = {
    "active": "active",
    "stations": "stations",
    "starlink": "starlink",
    "oneweb": "oneweb",
    "cosmos-2251-debris": "cosmos-2251-debris",
    "iridium-33-debris": "iridium-33-debris",
    "fengyun-1c-debris": "1999-025",
    "last-30-days": "last-30-days",
}


def get_object_type(group=None, name=""):
    """
    Determine the type of an object based on the CelesTrak group
    or, when possible, the object name.
    """

    if group in (
        "cosmos-2251-debris",
        "iridium-33-debris",
        "1999-025",
    ):
        return "DEBRIS"

    if group in (
        "starlink",
        "oneweb",
        "stations",
        "active",
    ):
        return "PAYLOAD"

    # Additional name-based detection
    name_upper = (name or "").upper()

    if "DEB" in name_upper or "DEBRIS" in name_upper:
        return "DEBRIS"

    if "STARLINK" in name_upper:
        return "PAYLOAD"

    if "ONEWEB" in name_upper:
        return "PAYLOAD"

    if "ISS" in name_upper or "ZARYA" in name_upper:
        return "PAYLOAD"

    return "UNKNOWN"


def fetch_group_or_catnr(group=None, catnr=None):
    """
    Fetch TLE records from CelesTrak.
    """

    params = {
        "FORMAT": "TLE"
    }

    if catnr:
        params["CATNR"] = catnr
    elif group:
        params["GROUP"] = group
    else:
        raise ValueError("Must specify either --catnr or --group")

    print("Fetching data from CelesTrak...")

    response = requests.get(
        BASE_URL,
        params=params,
        timeout=60
    )

    response.raise_for_status()

    lines = [
        line.strip()
        for line in response.text.splitlines()
        if line.strip()
    ]

    if len(lines) < 3:
        raise RuntimeError(
            f"Unexpected response from CelesTrak:\n{response.text}"
        )

    records = []

    # TLE format:
    #
    # OBJECT NAME
    # TLE LINE 1
    # TLE LINE 2
    #
    # OBJECT NAME
    # TLE LINE 1
    # TLE LINE 2

    for i in range(0, len(lines) - 2, 3):

        name = lines[i]
        line1 = lines[i + 1]
        line2 = lines[i + 2]

        if not line1.startswith("1 "):
            continue

        if not line2.startswith("2 "):
            continue

        norad_id = line1[2:7].strip()

        records.append(
            {
                "OBJECT_NAME": name,
                "NORAD_CAT_ID": norad_id,
                "TLE_LINE1": line1,
                "TLE_LINE2": line2,
            }
        )

    print(f"Received {len(records)} valid TLE records.")

    return records


def normalize_record(rec: dict, object_type="UNKNOWN") -> dict:
    """
    Convert a CelesTrak TLE record into the database schema.
    """

    line1 = rec.get("TLE_LINE1")
    line2 = rec.get("TLE_LINE2")

    if not line1 or not line2:
        raise ValueError(
            f"Record missing TLE lines, got keys: {list(rec.keys())}"
        )

    # ---------------------------------------------------------
    # Extract epoch from TLE line 1
    #
    # Columns 19-20 = two-digit year
    # Columns 21-32 = day of year + fractional day
    # ---------------------------------------------------------

    epoch_year = int(line1[18:20])
    epoch_day = float(line1[20:32])

    # TLE year convention:
    #
    # 00-56 -> 2000-2056
    # 57-99 -> 1957-1999

    if epoch_year < 57:
        full_year = 2000 + epoch_year
    else:
        full_year = 1900 + epoch_year

    epoch = datetime(
        full_year,
        1,
        1,
        tzinfo=timezone.utc
    )

    epoch_seconds = epoch.timestamp() + (
        (epoch_day - 1) * 86400
    )

    epoch_dt = datetime.fromtimestamp(
        epoch_seconds,
        tz=timezone.utc
    ).isoformat()

    name = rec.get("OBJECT_NAME", "UNKNOWN")

    # If the caller didn't provide a useful type,
    # try to determine it from the name.
    if object_type == "UNKNOWN":
        object_type = get_object_type(
            name=name
        )

    return {
        "norad_id": int(rec.get("NORAD_CAT_ID")),
        "name": name,
        "object_type": object_type,
        "epoch": epoch_dt,
        "tle_line1": line1,
        "tle_line2": line2,
        "source": "CELESTRAK",
        "sensor": "TLE_ONLY",
        "rcs_size": None,
        "fetched_at": datetime.now(timezone.utc).isoformat(),
        "raw_response": rec,
    }


def ingest(group=None, catnr=None, db_path=None):
    """
    Fetch and insert CelesTrak records into SQLite.
    """

    if db_path:
        init_db(db_path)
    else:
        init_db()

    raw = fetch_group_or_catnr(
        group=group,
        catnr=catnr
    )

    count = 0
    errors = 0

    for rec in raw:

        try:

            name = rec.get("OBJECT_NAME", "")

            object_type = get_object_type(
                group=group,
                name=name
            )

            normalized = normalize_record(
                rec,
                object_type
            )

            if db_path:
                upsert_tracked_object(
                    normalized,
                    db_path
                )
            else:
                upsert_tracked_object(
                    normalized
                )

            count += 1

        except (
            ValueError,
            TypeError,
            KeyError
        ) as e:

            errors += 1

            print(
                f"  skipped one record: {e}",
                file=sys.stderr
            )

    return count, errors


def main():
    parser = argparse.ArgumentParser(
        description="Fetch satellite/debris TLE data from CelesTrak."
    )

    parser.add_argument(
        "--catnr",
        type=int,
        help="Single NORAD catalog number"
    )

    parser.add_argument(
        "--group",
        type=str,
        help=(
            "CelesTrak group name. "
            f"Known useful ones: {list(USEFUL_GROUPS.keys())}"
        )
    )

    parser.add_argument(
        "--out-db",
        type=str,
        default=None,
        help="Path to SQLite database"
    )

    args = parser.parse_args()

    if not args.catnr and not args.group:
        raise SystemExit(
            "Pass --catnr <id> or --group <name>"
        )

    group = (
        USEFUL_GROUPS.get(args.group, args.group)
        if args.group
        else None
    )

    count, errors = ingest(
        group=group,
        catnr=args.catnr,
        db_path=args.out_db
    )

    print(
        f"Ingested {count} records "
        f"({errors} skipped) into the database."
    )

    print(
        stats(args.out_db)
        if args.out_db
        else stats()
    )


if __name__ == "__main__":
    main()