"""
Database layer for tracked-object data (TLEs / GP data).

Stores every ingested record with full provenance (source, sensor, fetch
time) so the uncertainty model (DPWC) has real inputs to work from, and so
we never silently overwrite/lose where a piece of data came from.

SQLite to start -- schema is deliberately simple/portable so migrating to
Postgres later is a straight pg_dump-style port, not a rewrite.
"""
import sqlite3
import json
from datetime import datetime, timezone
from pathlib import Path
from contextlib import contextmanager

DEFAULT_DB_PATH = Path(__file__).parent / "tracking.db"

SCHEMA = """
CREATE TABLE IF NOT EXISTS tracked_objects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    norad_id INTEGER NOT NULL,
    name TEXT,
    object_type TEXT,
    epoch TEXT NOT NULL,
    tle_line1 TEXT NOT NULL,
    tle_line2 TEXT NOT NULL,
    source TEXT NOT NULL,
    sensor TEXT,
    rcs_size TEXT,
    fetched_at TEXT NOT NULL,
    raw_response TEXT,
    docked INTEGER NOT NULL DEFAULT 0,
    UNIQUE(norad_id, epoch, source)
);

CREATE INDEX IF NOT EXISTS idx_norad_id ON tracked_objects(norad_id);
CREATE INDEX IF NOT EXISTS idx_fetched_at ON tracked_objects(fetched_at);
CREATE INDEX IF NOT EXISTS idx_docked ON tracked_objects(docked);

CREATE TABLE IF NOT EXISTS conjunction_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    primary_norad_id INTEGER NOT NULL,
    secondary_norad_id INTEGER NOT NULL,
    tca TEXT NOT NULL,
    miss_distance_km REAL NOT NULL,
    probability_of_collision REAL NOT NULL,
    assessed_at TEXT NOT NULL,
    maneuver_recommended INTEGER NOT NULL DEFAULT 0,
    maneuver_details TEXT
);

CREATE INDEX IF NOT EXISTS idx_conj_primary ON conjunction_events(primary_norad_id);
CREATE INDEX IF NOT EXISTS idx_conj_assessed_at ON conjunction_events(assessed_at);
"""


@contextmanager
def get_connection(db_path=DEFAULT_DB_PATH):
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
        conn.commit()
    finally:
        conn.close()


def init_db(db_path=DEFAULT_DB_PATH):
    with get_connection(db_path) as conn:
        conn.executescript(SCHEMA)
        columns = {row["name"] for row in conn.execute("PRAGMA table_info(tracked_objects)").fetchall()}
        if "docked" not in columns:
            conn.execute("ALTER TABLE tracked_objects ADD COLUMN docked INTEGER NOT NULL DEFAULT 0")
        conn.execute("CREATE INDEX IF NOT EXISTS idx_docked ON tracked_objects(docked)")


def upsert_tracked_object(record: dict, db_path=DEFAULT_DB_PATH):
    with get_connection(db_path) as conn:
        conn.execute(
            """
            INSERT INTO tracked_objects
                (norad_id, name, object_type, epoch, tle_line1, tle_line2,
                 source, sensor, rcs_size, fetched_at, raw_response, docked)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(norad_id, epoch, source) DO UPDATE SET
                name=excluded.name,
                object_type=excluded.object_type,
                tle_line1=excluded.tle_line1,
                tle_line2=excluded.tle_line2,
                sensor=excluded.sensor,
                rcs_size=excluded.rcs_size,
                fetched_at=excluded.fetched_at,
                raw_response=excluded.raw_response,
                docked=excluded.docked
            """,
            (
                record["norad_id"],
                record.get("name"),
                record.get("object_type"),
                record["epoch"],
                record["tle_line1"],
                record["tle_line2"],
                record["source"],
                record.get("sensor", "TLE_ONLY"),
                record.get("rcs_size"),
                record.get("fetched_at", datetime.now(timezone.utc).isoformat()),
                json.dumps(record.get("raw_response")) if record.get("raw_response") else None,
                int(bool(record.get("docked", False))),
            ),
        )


def set_docked_status(docked_ids, db_path=DEFAULT_DB_PATH):
    docked_ids = {int(value) for value in docked_ids}
    with get_connection(db_path) as conn:
        conn.execute("UPDATE tracked_objects SET docked = 0")
        if docked_ids:
            placeholders = ",".join("?" for _ in docked_ids)
            conn.execute(
                f"UPDATE tracked_objects SET docked = 1 WHERE norad_id IN ({placeholders})",
                tuple(docked_ids),
            )


def latest_for_norad_id(norad_id: int, db_path=DEFAULT_DB_PATH):
    with get_connection(db_path) as conn:
        row = conn.execute(
            """
            SELECT * FROM tracked_objects
            WHERE norad_id = ?
            ORDER BY epoch DESC
            LIMIT 1
            """,
            (norad_id,),
        ).fetchone()
        return dict(row) if row else None


def latest_all(object_type_filter=None, db_path=DEFAULT_DB_PATH):
    with get_connection(db_path) as conn:
        query = """
            SELECT t.* FROM tracked_objects t
            INNER JOIN (
                SELECT norad_id, MAX(epoch) AS max_epoch
                FROM tracked_objects
                GROUP BY norad_id
            ) latest
            ON t.norad_id = latest.norad_id AND t.epoch = latest.max_epoch
        """
        params = ()
        if object_type_filter:
            query += " WHERE t.object_type = ?"
            params = (object_type_filter,)
        rows = conn.execute(query, params).fetchall()
        return [dict(r) for r in rows]


def record_conjunction_event(event: dict, db_path=DEFAULT_DB_PATH):
    with get_connection(db_path) as conn:
        conn.execute(
            """
            INSERT INTO conjunction_events
                (primary_norad_id, secondary_norad_id, tca, miss_distance_km,
                 probability_of_collision, assessed_at, maneuver_recommended,
                 maneuver_details)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                event["primary_norad_id"],
                event["secondary_norad_id"],
                event["tca"],
                event["miss_distance_km"],
                event["probability_of_collision"],
                datetime.now(timezone.utc).isoformat(),
                int(event.get("maneuver_recommended", False)),
                json.dumps(event.get("maneuver_details")) if event.get("maneuver_details") else None,
            ),
        )


def stats(db_path=DEFAULT_DB_PATH):
    with get_connection(db_path) as conn:
        total = conn.execute("SELECT COUNT(*) c FROM tracked_objects").fetchone()["c"]
        by_source = conn.execute(
            "SELECT source, COUNT(*) c FROM tracked_objects GROUP BY source"
        ).fetchall()
        by_type = conn.execute(
            "SELECT object_type, COUNT(*) c FROM tracked_objects GROUP BY object_type"
        ).fetchall()
        return {
            "total_records": total,
            "by_source": {r["source"]: r["c"] for r in by_source},
            "by_object_type": {r["object_type"]: r["c"] for r in by_type},
        }
