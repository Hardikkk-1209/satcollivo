from datetime import datetime, timedelta, timezone
import sqlite3
import uuid
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from data.db import init_db, latest_all, latest_for_norad_id
from src.propagation import load_primary, load_candidates
from src.conjunction import assess_conjunctions

DB_PATH = "data/tracking.db"

app = FastAPI(
    title="Satellite Collision Avoidance API",
    description="Backend API for orbital conjunction and collision-risk analysis.",
    version="0.2.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory assessment results for the frontend job-style API.
assessment_jobs = {}


@app.on_event("startup")
def startup():
    init_db(DB_PATH)


@app.get("/")
def root():
    return {
        "name": "Satellite Collision Avoidance API",
        "status": "online",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "database": DB_PATH,
    }


@app.get("/satellites")
def get_satellites(search: str = "", limit: int = 100):
    """Return currently tracked objects, optionally filtered by name/NORAD ID."""
    objects = latest_all(db_path=DB_PATH)

    if search.strip():
        q = search.strip().lower()
        objects = [
            o for o in objects
            if q in str(o.get("norad_id", "")).lower()
            or q in str(o.get("name", "")).lower()
        ]

    return {
        "count": len(objects),
        "objects": objects[:limit],
    }


@app.get("/satellites/{norad_id}")
def get_satellite(norad_id: int):
    satellite = latest_for_norad_id(norad_id, db_path=DB_PATH)

    if satellite is None:
        raise HTTPException(
            status_code=404,
            detail=f"No object found for NORAD ID {norad_id}",
        )

    return satellite


@app.get("/satellites/{norad_id}/orbit")
def get_orbit(
    norad_id: int,
    duration_minutes: int = 120,
    step_seconds: int = 60,
):
    """Propagate a tracked satellite using its stored TLE."""
    if duration_minutes <= 0 or step_seconds <= 0:
        raise HTTPException(status_code=400, detail="Duration and step must be positive.")

    try:
        satellite = load_primary(norad_id, db_path=DB_PATH)
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc))

    start = datetime.now(timezone.utc)
    points = []

    for elapsed in range(0, duration_minutes * 60 + 1, step_seconds):
        dt = start + timedelta(seconds=elapsed)
        position, velocity = satellite.state_at(dt)

        points.append({
            "time": dt.isoformat(),
            "position_km": {
                "x": float(position[0]),
                "y": float(position[1]),
                "z": float(position[2]),
            },
            "velocity_km_s": {
                "x": float(velocity[0]),
                "y": float(velocity[1]),
                "z": float(velocity[2]),
            },
        })

    return {
        "norad_id": satellite.norad_id,
        "name": satellite.name,
        "frame": "TEME",
        "duration_minutes": duration_minutes,
        "step_seconds": step_seconds,
        "points": points,
    }


def _run_assessment(norad_id: int, hours: float, screening_km: float, top: int):
    try:
        primary = load_primary(norad_id, db_path=DB_PATH)
        candidates = load_candidates(
            exclude_norad_id=norad_id,
            db_path=DB_PATH,
        )
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc))

    if not candidates:
        return {
            "primary": {
                "norad_id": primary.norad_id,
                "name": primary.name,
            },
            "analysis_window_hours": hours,
            "screening_distance_km": screening_km,
            "candidate_count": 0,
            "filtered_out": 0,
            "conjunction_count": 0,
            "events": [],
        }

    start = datetime.now(timezone.utc)
    end = start + timedelta(hours=hours)

    events, skipped = assess_conjunctions(
        primary,
        candidates,
        start,
        end,
        screening_distance_km=screening_km,
    )

    results = []

    for event in events[:top]:
        results.append({
            "id": f"{event.primary.norad_id}-{event.secondary.norad_id}-{event.tca.isoformat()}",
            "primary_norad_id": event.primary.norad_id,
            "primary_name": event.primary.name,
            "secondary_norad_id": event.secondary.norad_id,
            "secondary_name": event.secondary.name,
            "tca": event.tca.isoformat(),
            "miss_distance_km": event.miss_distance_km,
            "probability_of_collision": event.pc,
            "primary": {
                "norad_id": event.primary.norad_id,
                "name": event.primary.name,
            },
            "secondary": {
                "norad_id": event.secondary.norad_id,
                "name": event.secondary.name,
            },
            "maneuver_recommended": False,
        })

    return {
        "primary": {
            "norad_id": primary.norad_id,
            "name": primary.name,
        },
        "analysis_window_hours": hours,
        "screening_distance_km": screening_km,
        "candidate_count": len(candidates),
        "filtered_out": skipped,
        "conjunction_count": len(events),
        "events": results,
    }


# Keep the original API.
@app.post("/assess/{norad_id}")
def assess_satellite(
    norad_id: int,
    hours: float = 24.0,
    screening_km: float = 25.0,
    top: int = 10,
):
    return _run_assessment(norad_id, hours, screening_km, top)


# Compatibility endpoint expected by the existing React frontend.
@app.post("/api/assessments")
def create_assessment(payload: dict):
    norad_id = payload.get("primary_norad_id")
    if norad_id is None:
        raise HTTPException(status_code=400, detail="primary_norad_id is required")

    job_id = str(uuid.uuid4())
    result = _run_assessment(
        int(norad_id),
        float(payload.get("hours", 24)),
        float(payload.get("screening_km", 25)),
        int(payload.get("top", 20)),
    )

    assessment_jobs[job_id] = {
        "status": "complete",
        "result": {
            "primary": result["primary"],
            "event_count": result["conjunction_count"],
            "candidate_count": result["candidate_count"],
            "detailed_candidates": len(result["events"]),
            "window_hours": result["analysis_window_hours"],
            "screening_km": result["screening_distance_km"],
            "events": result["events"],
        },
    }

    return {"job_id": job_id}


@app.get("/api/assessments/{job_id}")
def get_assessment(job_id: str):
    job = assessment_jobs.get(job_id)
    if job is None:
        raise HTTPException(status_code=404, detail="Assessment job not found")
    return job


@app.get("/api/satellites")
def api_satellites(search: str = "", limit: int = 100):
    return get_satellites(search, limit)


@app.get("/api/satellites/{norad_id}")
def api_satellite(norad_id: int):
    return get_satellite(norad_id)


@app.get("/api/satellites/{norad_id}/orbit")
def api_orbit(
    norad_id: int,
    duration_minutes: int = 120,
    step_seconds: int = 60,
):
    return get_orbit(norad_id, duration_minutes, step_seconds)


@app.get("/api/events")
def api_events(limit: int = 50):
    """Return events from the current process' completed assessments."""
    events = []
    for job in assessment_jobs.values():
        if job.get("status") == "complete":
            events.extend(job.get("result", {}).get("events", []))
    return events[:limit]


@app.get("/api/stats")
def api_stats():
    """Basic database statistics used by the mission console."""
    objects = latest_all(db_path=DB_PATH)

    total_records = 0
    latest_fetch = None

    try:
        with sqlite3.connect(DB_PATH) as conn:
            tables = {
                row[0]
                for row in conn.execute(
                    "SELECT name FROM sqlite_master WHERE type='table'"
                )
            }

            if "tracking" in tables:
                total_records = conn.execute("SELECT COUNT(*) FROM tracking").fetchone()[0]
            elif "states" in tables:
                total_records = conn.execute("SELECT COUNT(*) FROM states").fetchone()[0]

            # Try common timestamp column names without assuming a schema.
            for table in ("tracking", "states"):
                if table not in tables:
                    continue
                columns = {
                    row[1]
                    for row in conn.execute(f"PRAGMA table_info({table})")
                }
                for col in ("fetched_at", "created_at", "epoch", "timestamp"):
                    if col in columns:
                        latest_fetch = conn.execute(
                            f"SELECT MAX({col}) FROM {table}"
                        ).fetchone()[0]
                        break
                if latest_fetch is not None:
                    break
    except Exception:
        total_records = len(objects)

    by_source = {}
    by_object_type = {}

    for obj in objects:
        source = obj.get("source")
        object_type = obj.get("object_type")
        if source:
            by_source[source] = by_source.get(source, 0) + 1
        if object_type:
            by_object_type[object_type] = by_object_type.get(object_type, 0) + 1

    event_count = sum(
        len(job.get("result", {}).get("events", []))
        for job in assessment_jobs.values()
        if job.get("status") == "complete"
    )

    return {
        "total_records": total_records or len(objects),
        "unique_objects": len(objects),
        "event_count": event_count,
        "maneuver_count": 0,
        "by_source": by_source,
        "by_object_type": by_object_type,
        "latest_fetch": latest_fetch,
        "latest_assessment": None,
    }
