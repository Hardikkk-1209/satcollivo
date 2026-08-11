"""
Propagates TLEs to get position/velocity at any given time using SGP4.
Loads tracked-object state from the database (data/db.py) -- real ingested
data, not hand-written fixtures.
"""
from sgp4.api import Satrec, jday
import numpy as np
from datetime import datetime, timedelta

from data.db import latest_for_norad_id, latest_all


class PropagatedObject:
    def __init__(self, record: dict):
        self.record = record
        self.norad_id = record["norad_id"]
        self.name = record["name"]
        self.satrec = Satrec.twoline2rv(record["tle_line1"], record["tle_line2"])

    def state_at(self, dt: datetime):
        """Returns (position_km, velocity_km_s) in TEME frame at datetime dt."""
        jd, fr = jday(dt.year, dt.month, dt.day, dt.hour, dt.minute,
                       dt.second + dt.microsecond * 1e-6)
        error_code, r, v = self.satrec.sgp4(jd, fr)
        if error_code != 0:
            raise RuntimeError(f"SGP4 propagation error {error_code} for {self.name}")
        return np.array(r), np.array(v)


def load_primary(norad_id: int, db_path=None) -> PropagatedObject:
    record = latest_for_norad_id(norad_id, db_path) if db_path else latest_for_norad_id(norad_id)
    if record is None:
        raise ValueError(
            f"No tracked data for NORAD ID {norad_id} in the database. "
            f"Run a data ingestion script (fetch_celestrak.py / fetch_spacetrack.py) first."
        )
    return PropagatedObject(record)


def load_candidates(object_type_filter=None, exclude_norad_id=None, db_path=None) -> list:
    records = (latest_all(object_type_filter, db_path) if db_path
               else latest_all(object_type_filter))
    objects = []
    for r in records:
        if exclude_norad_id is not None and r["norad_id"] == exclude_norad_id:
            continue
        try:
            objects.append(PropagatedObject(r))
        except Exception as e:
            print(f"  skipped {r.get('name', r.get('norad_id'))}: bad TLE ({e})")
    return objects
