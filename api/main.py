from datetime import datetime, timedelta, timezone
import json
import sqlite3
import uuid
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from data.db import init_db, latest_all, latest_for_norad_id, record_conjunction_event, stats
from src.conjunction import assess_conjunctions
from src.maneuver import plan_avoidance_burn
from src.propagation import load_candidates, load_primary

DB_PATH = "data/tracking.db"

app = FastAPI(
    title="SatCollivo API",
    description="Satellite collision avoidance and conjunction assessment API.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

assessment_jobs = {}


@app.on_event("startup")
def startup():
    init_db(DB_PATH)


@app.get("/")
def root():
    return {"name": "SatCollivo API", "status": "online", "version": app.version}


@app.get("/health")
def health():
    return {"status": "healthy", "database": DB_PATH}


@app.get("/satellites")
def get_satellites(search: str = "", limit: int = 100):
    objects = latest_all(db_path=DB_PATH)
    q = search.strip().lower()
    if q:
        objects = [
            obj for obj in objects
            if q in str(obj.get("norad_id", "")).lower()
            or q in str(obj.get("name", "")).lower()
        ]
    limit = max(1, min(limit, 5000))
    return {"count": len(objects), "objects": objects[:limit]}


@app.get("/satellites/{norad_id}")
def get_satellite(norad_id: int):
    satellite = latest_for_norad_id(norad_id, db_path=DB_PATH)
    if satellite is None:
        raise HTTPException(status_code=404, detail=f"No object found for NORAD ID {norad_id}")
    return satellite


@app.get("/satellites/{norad_id}/orbit")
def get_orbit(norad_id: int, duration_minutes: int = 120, step_seconds: int = 60):
    if duration_minutes <= 0 or duration_minutes > 1440:
        raise HTTPException(status_code=400, detail="Duration must be between 1 and 1440 minutes.")
    if step_seconds <= 0 or step_seconds > 3600:
        raise HTTPException(status_code=400, detail="Step must be between 1 and 3600 seconds.")

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


def serialize_event(event):
    maneuver = plan_avoidance_burn(event)
    return {
        "id": f"{event.primary.norad_id}-{event.secondary.norad_id}-{event.tca.isoformat()}",
        "primary_norad_id": event.primary.norad_id,
        "primary_name": event.primary.name,
        "secondary_norad_id": event.secondary.norad_id,
        "secondary_name": event.secondary.name,
        "tca": event.tca.isoformat(),
        "miss_distance_km": float(event.miss_distance_km),
        "probability_of_collision": float(event.pc),
        "primary": {"norad_id": event.primary.norad_id, "name": event.primary.name},
        "secondary": {"norad_id": event.secondary.norad_id, "name": event.secondary.name},
        "maneuver_recommended": bool(maneuver.get("maneuver_needed", False)),
        "maneuver_details": maneuver,
    }


def run_assessment(norad_id: int, hours: float, screening_km: float, top: int):
    if hours <= 0 or hours > 168:
        raise HTTPException(status_code=400, detail="Assessment window must be between 1 and 168 hours.")
    if screening_km <= 0 or screening_km > 1000:
        raise HTTPException(status_code=400, detail="Screening distance must be between 0 and 1000 km.")

    top = max(1, min(top, 100))
    try:
        primary = load_primary(norad_id, db_path=DB_PATH)
        candidates = load_candidates(exclude_norad_id=norad_id, db_path=DB_PATH)
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc))

    start = datetime.now(timezone.utc)
    end = start + timedelta(hours=hours)
    events, skipped = assess_conjunctions(
        primary,
        candidates,
        start,
        end,
        screening_distance_km=screening_km,
    )

    serialized = []
    for event in events[:top]:
        maneuver = plan_avoidance_burn(event)
        item = {
            "id": f"{event.primary.norad_id}-{event.secondary.norad_id}-{event.tca.isoformat()}",
            "primary_norad_id": event.primary.norad_id,
            "primary_name": event.primary.name,
            "secondary_norad_id": event.secondary.norad_id,
            "secondary_name": event.secondary.name,
            "tca": event.tca.isoformat(),
            "miss_distance_km": float(event.miss_distance_km),
            "probability_of_collision": float(event.pc),
            "primary": {"norad_id": event.primary.norad_id, "name": event.primary.name},
            "secondary": {"norad_id": event.secondary.norad_id, "name": event.secondary.name},
            "maneuver_recommended": bool(maneuver.get("maneuver_needed", False)),
            "maneuver_details": maneuver,
        }
        serialized.append(item)
        record_conjunction_event({
            "primary_norad_id": event.primary.norad_id,
            "secondary_norad_id": event.secondary.norad_id,
            "tca": event.tca.isoformat(),
            "miss_distance_km": event.miss_distance_km,
            "probability_of_collision": event.pc,
            "maneuver_recommended": maneuver.get("maneuver_needed", False),
            "maneuver_details": maneuver,
        }, db_path=DB_PATH)

    return {
        "primary": {"norad_id": primary.norad_id, "name": primary.name},
        "analysis_window_hours": hours,
        "screening_distance_km": screening_km,
        "candidate_count": len(candidates),
        "filtered_out": skipped,
        "conjunction_count": len(events),
        "events": serialized,
    }


@app.post("/assess/{norad_id}")
def assess_satellite(norad_id: int, hours: float = 24.0, screening_km: float = 25.0, top: int = 10):
    return run_assessment(norad_id, hours, screening_km, top)


@app.post("/api/assessments")
def create_assessment(payload: dict):
    norad_id = payload.get("primary_norad_id")
    if norad_id is None:
        raise HTTPException(status_code=400, detail="primary_norad_id is required")

    job_id = str(uuid.uuid4())
    try:
        result = run_assessment(
            int(norad_id),
            float(payload.get("hours", 24)),
            float(payload.get("screening_km", 25)),
            int(payload.get("top", 20)),
        )
    except HTTPException as exc:
        assessment_jobs[job_id] = {"status": "failed", "error": exc.detail}
        raise

    assessment_jobs[job_id] = {
        "status": "complete",
        "result": {
            "primary": result["primary"],
            "event_count": result["conjunction_count"],
            "candidate_count": result["candidate_count"],
            "detailed_candidates": len(result["events"]),
            "filtered_out": result["filtered_out"],
            "window_hours": result["analysis_window_hours"],
            "screening_km": result["screening_distance_km"],
            "events": result["events"],
        },
    }
    return {"job_id": job_id, "status": "complete"}


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
def api_orbit(norad_id: int, duration_minutes: int = 120, step_seconds: int = 60):
    return get_orbit(norad_id, duration_minutes, step_seconds)


@app.get("/api/events")
def api_events(limit: int = 50):
    limit = max(1, min(limit, 500))
    with sqlite3.connect(DB_PATH) as conn:
        conn.row_factory = sqlite3.Row
        rows = conn.execute(
            "SELECT id, primary_norad_id, secondary_norad_id, tca, miss_distance_km, "
            "probability_of_collision, assessed_at, maneuver_recommended, maneuver_details "
            "FROM conjunction_events ORDER BY assessed_at DESC, probability_of_collision DESC LIMIT ?",
            (limit,),
        ).fetchall()

    events = []
    for row in rows:
        maneuver = {}
        if row["maneuver_details"]:
            try:
                maneuver = json.loads(row["maneuver_details"])
            except (TypeError, ValueError):
                maneuver = {}
        primary = latest_for_norad_id(row["primary_norad_id"], db_path=DB_PATH) or {}
        secondary = latest_for_norad_id(row["secondary_norad_id"], db_path=DB_PATH) or {}
        events.append({
            "id": row["id"],
            "primary_norad_id": row["primary_norad_id"],
            "primary_name": primary.get("name"),
            "secondary_norad_id": row["secondary_norad_id"],
            "secondary_name": secondary.get("name"),
            "primary": {"norad_id": row["primary_norad_id"], "name": primary.get("name")},
            "secondary": {"norad_id": row["secondary_norad_id"], "name": secondary.get("name")},
            "tca": row["tca"],
            "miss_distance_km": row["miss_distance_km"],
            "probability_of_collision": row["probability_of_collision"],
            "assessed_at": row["assessed_at"],
            "maneuver_recommended": bool(row["maneuver_recommended"]),
            "maneuver_details": maneuver,
        })
    return events


@app.get("/api/stats")
def api_stats():
    data = stats(DB_PATH)
    with sqlite3.connect(DB_PATH) as conn:
        event_count = conn.execute("SELECT COUNT(*) FROM conjunction_events").fetchone()[0]
        maneuver_count = conn.execute(
            "SELECT COUNT(*) FROM conjunction_events WHERE maneuver_recommended = 1"
        ).fetchone()[0]
        latest_assessment = conn.execute(
            "SELECT MAX(assessed_at) FROM conjunction_events"
        ).fetchone()[0]
        latest_fetch = conn.execute(
            "SELECT MAX(fetched_at) FROM tracked_objects"
        ).fetchone()[0]

    return {
        "total_records": data["total_records"],
        "unique_objects": len(latest_all(db_path=DB_PATH)),
        "event_count": event_count,
        "maneuver_count": maneuver_count,
        "by_source": data["by_source"],
        "by_object_type": data["by_object_type"],
        "latest_fetch": latest_fetch,
        "latest_assessment": latest_assessment,
    }
