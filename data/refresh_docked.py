import argparse

from data.db import init_db, set_docked_status
from data.fetch_celestrak import fetch_docked_ids


def main():
    parser = argparse.ArgumentParser(
        description="Refresh CelesTrak docked-object metadata in the SatCollivo database."
    )
    parser.add_argument(
        "--db",
        default="data/tracking.db",
        help="Path to the SatCollivo SQLite database",
    )
    args = parser.parse_args()

    init_db(args.db)
    docked_ids = fetch_docked_ids()
    set_docked_status(docked_ids, args.db)
    print(f"Marked {len(docked_ids)} current CelesTrak docked objects in {args.db}.")


if __name__ == "__main__":
    main()
