# SatCollivo

SatCollivo is a prototype satellite collision-avoidance and conjunction-assessment system using real TLE/GP data.

## What it does

- Ingests orbital data from CelesTrak or Space-Track
- Tracks CelesTrak docked/co-located object metadata so attached spacecraft are not treated as independent collision threats
- Stores tracked-object history and provenance in SQLite
- Propagates satellite states with SGP4
- Filters candidates using orbital altitude overlap
- Finds time of closest approach (TCA)
- Builds provenance-weighted DPWC covariance
- Estimates probability of collision (Pc)
- Produces prototype maneuver recommendations
- Provides a simple React/Vite mission console with interactive 3D orbit visualization
- Persists web-generated conjunction assessments to SQLite

## Run locally

### Backend

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn api.main:app --reload --port 8000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

The frontend uses `http://localhost:8000` by default. Set `VITE_API_URL` when the API runs elsewhere.

## Load real data

CelesTrak:

```bash
python data/fetch_celestrak.py --catnr 25544 --out-db data/tracking.db
python data/fetch_celestrak.py --group stations --out-db data/tracking.db
python data/fetch_celestrak.py --group cosmos-2251-debris --out-db data/tracking.db
python data/fetch_celestrak.py --group active --out-db data/tracking.db

# Refresh docked/co-located object metadata without reloading the catalog
python data/refresh_docked.py --db data/tracking.db
```

Space-Track:

```bash
export SPACETRACK_USER="you@example.com"
export SPACETRACK_PASS="yourpassword"
python data/fetch_spacetrack.py --norad-ids 25544 --out-db data/tracking.db
```

## Use the console

1. Select a primary satellite.
2. Inspect its propagated 3D orbit.
3. Choose a 1–72 hour assessment window.
4. Run the conjunction assessment.
5. Review persisted conjunctions, elevated threats, and maneuver estimates.
6. Docked ISS/CSS components are excluded from independent-object screening. If you already have an older database, run `python data/refresh_docked.py --db data/tracking.db` once before assessing.
6. Open System to inspect database and pipeline status.

## CLI

```bash
python run.py --assess --primary-norad-id 25544 --hours 24
```

## Tests

```bash
python -m pytest tests/ -v
```

The suite covers ingestion normalization, deduplication, object loading, real-epoch staleness, conjunction detection, altitude pre-filtering, and maneuver planning.

## Architecture

```
CelesTrak / Space-Track
        |
        v
  SQLite tracked_objects
        |
        v
    SGP4 propagation
        |
        v
  Altitude pre-filter
        |
        v
       TCA
        |
        v
 DPWC covariance + Pc
        |
        v
 Maneuver estimate
        |
        v
SQLite conjunction_events
        |
        v
 React mission console
```

## Limitations

This is research/decision-support software, not a flight-certified operational collision-avoidance system.

The Pc calculation currently uses Monte Carlo integration. The maneuver planner is a linearized prototype estimate and must be validated with high-fidelity numerical re-propagation. DPWC constants are illustrative and should be calibrated against tracking-accuracy data. Public CelesTrak data does not expose full observation-level sensor provenance, so the uncertainty layer uses the conservative TLE-only tier unless richer provenance is available.
