from datetime import datetime, timezone
from pathlib import Path
import json

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

from data.db import DEFAULT_DB_PATH, init_db, latest_all, latest_for_norad_id, stats, get_connection
from src.propagation import load_primary, load_candidates
from src.conjunction import assess_conjunctions
from src.maneuver import plan_avoidance_burn

app = FastAPI(title="SatCollivo API", version="0.1.0")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])


def serialize_object(row):
    return {k: row[k] for k in ("norad_id", "name", "object_type", "epoch", "source", "sensor", "rcs_size", "fetched_at")}


@app.on_event("startup")
def startup():
    init_db()


@app.get("/api/health")
def health():
    return {"status": "online", "timestamp": datetime.now(timezone.utc).isoformat()}


@app.get("/api/stats")
def get_stats():
    return stats()


@app.get("/api/satellites")
def satellites(object_type: str | None = None, search: str | None = None):
    rows = latest_all(object_type)
    if search:
        needle = search.lower()
        rows = [r for r in rows if needle in str(r.get("name", "")).lower() or needle in str(r["norad_id"])]
    return [serialize_object(r) for r in rows]


@app.get("/api/satellites/{norad_id}")
def satellite(norad_id: int):
    row = latest_for_norad_id(norad_id)
    if not row:
        raise HTTPException(404, "Satellite not found")
    return serialize_object(row)


@app.get("/api/conjunctions")
def conjunctions(norad_id: int = Query(...), hours: float = 24, screening_km: float = 25):
    try:
        primary = load_primary(norad_id)
        candidates = load_candidates(exclude_norad_id=norad_id)
    except ValueError as exc:
        raise HTTPException(404, str(exc))
    start = datetime.now(timezone.utc)
    end = start.timestamp() + hours * 3600
    from datetime import timedelta
    events, skipped = assess_conjunctions(primary, candidates, start, datetime.fromtimestamp(end, timezone.utc), screening_distance_km=screening_km)
    result = []
    for event in events:
        maneuver = plan_avoidance_burn(event)
        result.append({
            "primary": {"norad_id": event.primary.norad_id, "name": event.primary.name},
            "secondary": {"norad_id": event.secondary.norad_id, "name": event.secondary.name},
            "tca": event.tca.isoformat(),
            "miss_distance_km": round(event.miss_distance_km, 4),
            "probability_of_collision": event.pc,
            "maneuver": maneuver,
        })
    return {"events": result, "skipped_by_altitude": skipped}


@app.get("/api/events")
def stored_events(limit: int = 50):
    with get_connection() as conn:
        rows = conn.execute("SELECT * FROM conjunction_events ORDER BY assessed_at DESC LIMIT ?", (limit,)).fetchall()
    output = []
    for row in rows:
        item = dict(row)
        if item.get("maneuver_details"):
            try: item["maneuver_details"] = json.loads(item["maneuver_details"])
            except json.JSONDecodeError: pass
        output.append(item)
    return output
