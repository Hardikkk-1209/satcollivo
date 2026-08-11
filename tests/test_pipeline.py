"""
Tests for the ingestion + assessment pipeline.

IMPORTANT: these tests use `tests/fixtures_celestrak_response.json`, which is
data SHAPED like a real CelesTrak API response (correct field names, correct
JSON structure) but was written by hand for testing -- it is NOT a live pull.
This proves the pipeline's logic is correct; it does not substitute for
running the real fetch scripts against live CelesTrak/Space-Track data.
"""
import json
import os
import sys
import tempfile
import unittest
from datetime import datetime, timedelta, timezone

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from data.db import init_db, upsert_tracked_object, latest_all, latest_for_norad_id, stats
from data.fetch_celestrak import normalize_record
from src.propagation import load_primary, load_candidates
from src.conjunction import assess_conjunctions, tracking_age_hours
from src.maneuver import plan_avoidance_burn

FIXTURE_PATH = os.path.join(os.path.dirname(__file__), "fixtures_celestrak_response.json")


class TestIngestion(unittest.TestCase):
    def setUp(self):
        self.tmp_db = tempfile.NamedTemporaryFile(suffix=".db", delete=False)
        self.tmp_db.close()
        init_db(self.tmp_db.name)

    def tearDown(self):
        os.unlink(self.tmp_db.name)

    def test_normalize_and_store(self):
        with open(FIXTURE_PATH) as f:
            raw = json.load(f)

        for rec in raw:
            normalized = normalize_record(rec)
            upsert_tracked_object(normalized, self.tmp_db.name)

        s = stats(self.tmp_db.name)
        self.assertEqual(s["total_records"], 3)
        self.assertEqual(s["by_source"].get("CELESTRAK"), 3)

    def test_dedup_on_reingest(self):
        with open(FIXTURE_PATH) as f:
            raw = json.load(f)
        for rec in raw:
            upsert_tracked_object(normalize_record(rec), self.tmp_db.name)
        # ingest the same data again -- should NOT create duplicates
        for rec in raw:
            upsert_tracked_object(normalize_record(rec), self.tmp_db.name)

        s = stats(self.tmp_db.name)
        self.assertEqual(s["total_records"], 3, "re-ingesting identical data should dedupe")

    def test_latest_for_norad_id(self):
        with open(FIXTURE_PATH) as f:
            raw = json.load(f)
        for rec in raw:
            upsert_tracked_object(normalize_record(rec), self.tmp_db.name)

        iss = latest_for_norad_id(25544, self.tmp_db.name)
        self.assertIsNotNone(iss)
        self.assertEqual(iss["name"], "ISS (ZARYA)")
        self.assertEqual(iss["source"], "CELESTRAK")


class TestPipeline(unittest.TestCase):
    def setUp(self):
        self.tmp_db = tempfile.NamedTemporaryFile(suffix=".db", delete=False)
        self.tmp_db.close()
        init_db(self.tmp_db.name)
        with open(FIXTURE_PATH) as f:
            raw = json.load(f)
        for rec in raw:
            upsert_tracked_object(normalize_record(rec), self.tmp_db.name)

    def tearDown(self):
        os.unlink(self.tmp_db.name)

    def test_load_primary_and_candidates(self):
        primary = load_primary(25544, db_path=self.tmp_db.name)
        self.assertEqual(primary.norad_id, 25544)

        candidates = load_candidates(exclude_norad_id=25544, db_path=self.tmp_db.name)
        candidate_ids = {c.norad_id for c in candidates}
        self.assertIn(39084, candidate_ids)
        self.assertIn(90001, candidate_ids)
        self.assertNotIn(25544, candidate_ids)

    def test_missing_norad_id_raises(self):
        with self.assertRaises(ValueError):
            load_primary(99999999, db_path=self.tmp_db.name)

    def test_tracking_age_hours_computed_from_real_epoch(self):
        primary = load_primary(25544, db_path=self.tmp_db.name)
        # epoch in fixture is 2026-08-08T12:00:00
        at_time = datetime(2026, 8, 9, 12, 0, 0, tzinfo=timezone.utc)
        age = tracking_age_hours(primary.record, at_time)
        self.assertAlmostEqual(age, 24.0, delta=0.01)

    def test_full_assessment_detects_close_conjunction(self):
        """
        NORAD 90001 in the fixture is a synthetic object built from ISS's own
        TLE with a tiny mean-anomaly offset -- specifically designed to pass
        close to ISS, to prove the detect -> Pc -> maneuver-recommendation
        path actually fires end-to-end.
        """
        primary = load_primary(25544, db_path=self.tmp_db.name)
        candidates = load_candidates(exclude_norad_id=25544, db_path=self.tmp_db.name)

        start = datetime(2026, 8, 10, 0, 0, 0, tzinfo=timezone.utc)
        end = start + timedelta(hours=6)

        events, skipped = assess_conjunctions(
            primary, candidates, start, end, screening_distance_km=5000
        )

        self.assertGreater(len(events), 0, "should detect at least one conjunction")

        synthetic_event = next((e for e in events if e.secondary.norad_id == 90001), None)
        self.assertIsNotNone(synthetic_event, "should detect the synthetic close-approach object")
        self.assertLess(synthetic_event.miss_distance_km, 50,
                         "synthetic object should show as a genuinely close pass")

        result = plan_avoidance_burn(synthetic_event)
        self.assertIn("maneuver_needed", result)

    def test_altitude_prefilter_runs(self):
        primary = load_primary(25544, db_path=self.tmp_db.name)
        candidates = load_candidates(exclude_norad_id=25544, db_path=self.tmp_db.name)
        start = datetime(2026, 8, 10, 0, 0, 0, tzinfo=timezone.utc)
        end = start + timedelta(hours=6)
        events, skipped = assess_conjunctions(primary, candidates, start, end,
                                                screening_distance_km=5000)
        # cosmos 2251 debris (39084) is in a very different orbit (74 deg incl,
        # ~800km alt) vs ISS (~51.6 deg, ~420km) -- should be filtered or at
        # least screened without error
        self.assertIsInstance(skipped, int)


if __name__ == "__main__":
    unittest.main(verbosity=2)
