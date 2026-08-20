# Satellite Collision Avoidance — Real Data System

SatCollivo is a real-data satellite collision-avoidance prototype using SGP4 propagation, provenance-weighted uncertainty (DPWC), conjunction assessment, probability of collision (Pc), and maneuver planning, backed by SQLite data from CelesTrak / Space-Track.

## Backend setup

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Pull real orbital data locally

```bash
# ISS specifically
python data/fetch_celestrak.py --catnr 25544 --out-db data/tracking.db

# A whole debris field
python data/fetch_celestrak.py --group cosmos-2251-debris --out-db data/tracking.db

# All active payloads
python data/fetch_celestrak.py --group active --out-db data/tracking.db
```

CelesTrak public data should not be polled more often than its update cadence. Space-Track requires an authenticated account.

### CLI assessment

```bash
python run.py --assess --primary-norad-id 25544 --hours 24
```

The CLI propagates the primary and candidate objects, applies the altitude pre-filter, searches for TCA, computes covariance/Pc, and stores the top conjunction events.

## Mission-control frontend

The repository includes a React/Vite frontend and FastAPI bridge around the existing scientific engine.

Start the backend from the repository root:

```bash
source venv/bin/activate
uvicorn api:app --reload
```

Start the frontend in a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

### Frontend capabilities

- Live database and system-health cards
- Searchable NORAD object catalog
- Actual SGP4-propagated orbit track for the selected object
- Primary-satellite selection and assessment controls
- Asynchronous conjunction assessment jobs so the browser does not block during the calculation
- TCA, miss distance, Pc, risk classification, and maneuver recommendation results
- Stored conjunction register and threat monitor
- Maneuver analysis view with prototype safety warning
- Data/source/system pipeline view

The frontend calls these API endpoints:

```text
GET  /api/health
GET  /api/stats
GET  /api/satellites
GET  /api/satellites/{norad_id}
GET  /api/satellites/{norad_id}/orbit
GET  /api/events
GET  /api/events/{event_id}
POST /api/assessments
GET  /api/assessments/{job_id}
```

## Architecture

```text
CelesTrak / Space-Track
        |
        v
   SQLite tracking DB
        |
        v
  Existing Python engine
   |      |       |
  SGP4   DPWC   Conjunction/Pc
                 |
                 v
            Maneuver planner
                 |
                 v
             FastAPI API
                 |
                 v
          React/Vite console
```

## Tests

```bash
python -m pytest tests/ -v
```

## Important prototype limitations

- Pc currently uses Monte Carlo integration; production accuracy should use a validated adaptive method.
- Maneuver planning is a linearized prototype estimate and is not flight-ready.
- DPWC covariance constants are illustrative and require calibration against tracking-accuracy studies.
- CelesTrak records do not expose full sensor provenance, so the uncertainty layer falls back to the TLE-only tier unless richer provenance is available.

**This project is decision-support software, not an operational flight-safety system.**
