# Satellite Collision Avoidance — Real Data System

This is the real-data version: SGP4 propagation, provenance-weighted
uncertainty (DPWC), conjunction assessment, and maneuver planning, all
backed by a SQLite database populated from **actual CelesTrak / Space-Track
data** — not hand-written fixtures.

## Why you have to run the data step yourself

CelesTrak blocks automated fetching from sandboxed environments (its
robots.txt disallows it), and Space-Track requires an authenticated login.
Neither is reachable from where this was built. **You need to run the
ingestion scripts on your own machine.** Everything else (the actual
algorithm) is complete and tested.

## Setup

```bash
pip install sgp4 numpy scipy requests
```

## Step 1: Pull real data (run locally)

**CelesTrak (no account needed — start here):**
```bash
# ISS specifically
python data/fetch_celestrak.py --catnr 25544 --out-db data/tracking.db

# A whole debris field (2009 Iridium-Cosmos collision debris)
python data/fetch_celestrak.py --group cosmos-2251-debris --out-db data/tracking.db

# All active payloads (thousands of objects -- good stress test)
python data/fetch_celestrak.py --group active --out-db data/tracking.db
```
CelesTrak doesn't update more than once every 2 hours — don't poll faster than that.

**Space-Track (optional, needs a free account):**
```bash
export SPACETRACK_USER="you@example.com"
export SPACETRACK_PASS="yourpassword"
python data/fetch_spacetrack.py --norad-ids 25544 --out-db data/tracking.db
python data/fetch_spacetrack.py --recent-debris --out-db data/tracking.db
```

## Step 2: Run an assessment against real data

```bash
python run.py --assess --primary-norad-id 25544 --hours 24
```

This propagates every tracked object currently in your database forward
24 hours, screens for close approaches to the ISS, computes DPWC-weighted
collision probability for anything within range, and recommends maneuvers
where warranted. Results are also written to the `conjunction_events` table
for later review.

## Everything else, via the CLI

```bash
python run.py --help
```

## What's tested vs. what needs your real run

`tests/test_pipeline.py` verifies the *logic* is correct — ingestion parsing,
deduplication, staleness calculation from real epochs, altitude
pre-filtering, and the full detect → Pc → maneuver path — using data shaped
exactly like a real CelesTrak response (`tests/fixtures_celestrak_response.json`).
That file is clearly a **test fixture**, not a live pull — run the Step 1
commands above to get actual current orbital data.

```bash
python -m pytest tests/ -v
```

## Project layout

```
collision_avoidance_v2/
├── data/
│   ├── db.py                  # SQLite schema + storage layer
│   ├── fetch_celestrak.py     # real, no-login data source (run locally)
│   └── fetch_spacetrack.py    # real, login-required source (run locally)
├── src/
│   ├── propagation.py         # SGP4, now reads from the database
│   ├── uncertainty.py         # DPWC — provenance-weighted covariance
│   ├── conjunction.py         # TCA search, Pc calc, altitude pre-filter
│   └── maneuver.py            # avoidance delta-v planner
├── tests/
│   ├── fixtures_celestrak_response.json   # realistic test data (NOT live)
│   └── test_pipeline.py
└── run.py                     # CLI: ingest data, run assessments
```

## Known limitations (be aware before relying on this operationally)

- Pc calculation uses Monte Carlo integration — fine for prototyping,
  should move to adaptive quadrature for production accuracy.
- Maneuver planning uses a linearized heuristic, not a real Clohessy-Wiltshire
  or numerical optimizer — treat delta-v recommendations as ballpark, not
  flight-ready.
- DPWC's covariance constants (sensor/RCS/staleness weights) are illustrative
  starting points, not calibrated against real tracking-accuracy studies.
- CelesTrak's public data doesn't include per-record sensor provenance, so
  DPWC currently falls back to a conservative `TLE_ONLY` sensor tier for all
  ingested objects regardless of source, until you have access to richer
  provenance data (e.g. your own tracking, or Space-Track's expanded CDM access).
