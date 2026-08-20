"""FastAPI bridge for the SatCollivo orbital-safety engine."""
from datetime import datetime, timedelta, timezone
import json
import threading
import uuid

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from data.db import DEFAULT_DB_PATH, init_db, latest_all, latest_for_norad_id, stats, get_connection, record_conjunction_event
from src.propagation import load_primary, load_candidates
from src.conjunction import assess_conjunctions
from src.maneuver import plan_avoidance_burn

DB_PATH = DEFAULT_DB_PATH
app = FastAPI(title="SatCollivo API", version="0.2.0")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])
jobs = {}
jobs_lock = threading.Lock()

class AssessmentRequest(BaseModel):
    primary_norad_id: int
    hours: float = Field(default=24, ge=0.25, le=168)
    screening_km: float = Field(default=25, ge=1, le=200)
    top: int = Field(default=10, ge=1, le=50)

def serialize_object(row):
    return {k: row[k] for k in ("norad_id", "name", "object_type", "epoch", "source", "sensor", "rcs_size", "fetched_at")}

def serialize_event(row):
    item = dict(row)
    if item.get("maneuver_details"):
        try: item["maneuver_details"] = json.loads(item["maneuver_details"])
        except (TypeError, json.JSONDecodeError): pass
    p = latest_for_norad_id(item["primary_norad_id"], DB_PATH)
    s = latest_for_norad_id(item["secondary_norad_id"], DB_PATH)
    item["primary"] = {"norad_id": item["primary_norad_id"], "name": p.get("name") if p else "Unknown"}
    item["secondary"] = {"norad_id": item["secondary_norad_id"], "name": s.get("name") if s else "Unknown"}
    return item

@app.on_event("startup")
def startup(): init_db(DB_PATH)

@app.get("/api/health")
def health():
    s = stats(DB_PATH)
    return {"status":"online","timestamp":datetime.now(timezone.utc).isoformat(),"database":str(DB_PATH),"total_records":s["total_records"]}

@app.get("/api/stats")
def get_stats():
    result = stats(DB_PATH)
    with get_connection(DB_PATH) as conn:
        result.update({
            "unique_objects": conn.execute("SELECT COUNT(DISTINCT norad_id) c FROM tracked_objects").fetchone()["c"],
            "event_count": conn.execute("SELECT COUNT(*) c FROM conjunction_events").fetchone()["c"],
            "maneuver_count": conn.execute("SELECT COUNT(*) c FROM conjunction_events WHERE maneuver_recommended=1").fetchone()["c"],
            "latest_fetch": conn.execute("SELECT MAX(fetched_at) t FROM tracked_objects").fetchone()["t"],
            "latest_assessment": conn.execute("SELECT MAX(assessed_at) t FROM conjunction_events").fetchone()["t"],
        })
    return result

@app.get("/api/satellites")
def satellites(object_type: str | None = None, search: str | None = None, limit: int = Query(100, ge=1, le=500)):
    rows = latest_all(object_type, DB_PATH)
    if search:
        needle = search.lower().strip()
        rows = [r for r in rows if needle in str(r.get("name","")).lower() or needle in str(r["norad_id"])]
    rows.sort(key=lambda r: (r.get("name") or "", r["norad_id"]))
    return [serialize_object(r) for r in rows[:limit]]

@app.get("/api/satellites/{norad_id}")
def satellite(norad_id: int):
    row = latest_for_norad_id(norad_id, DB_PATH)
    if not row: raise HTTPException(404, "Satellite not found")
    return serialize_object(row)

@app.get("/api/satellites/{norad_id}/orbit")
def satellite_orbit(norad_id: int, duration_minutes: int = Query(120, ge=10, le=720), step_seconds: int = Query(60, ge=10, le=600)):
    try: obj = load_primary(norad_id, db_path=DB_PATH)
    except ValueError as exc: raise HTTPException(404, str(exc))
    start = datetime.now(timezone.utc); points=[]; t=start; end=start+timedelta(minutes=duration_minutes)
    while t <= end:
        try:
            position, velocity = obj.state_at(t)
            points.append({"time":t.isoformat(),"x":round(float(position[0]),3),"y":round(float(position[1]),3),"z":round(float(position[2]),3),"vx":round(float(velocity[0]),6),"vy":round(float(velocity[1]),6),"vz":round(float(velocity[2]),6),"radius_km":round(float(sum(v*v for v in position)**0.5),3)})
        except RuntimeError: pass
        t += timedelta(seconds=step_seconds)
    if not points: raise HTTPException(422, "SGP4 could not propagate this object")
    return {"norad_id":norad_id,"name":obj.name,"start":start.isoformat(),"points":points}

@app.get("/api/conjunctions")
def conjunctions(norad_id: int = Query(...), hours: float = 24, screening_km: float = 25):
    try: primary=load_primary(norad_id, db_path=DB_PATH); candidates=load_candidates(exclude_norad_id=norad_id, db_path=DB_PATH)
    except ValueError as exc: raise HTTPException(404, str(exc))
    start=datetime.now(timezone.utc); events,skipped=assess_conjunctions(primary,candidates,start,start+timedelta(hours=hours),screening_distance_km=screening_km)
    return {"events":[{"primary":{"norad_id":e.primary.norad_id,"name":e.primary.name},"secondary":{"norad_id":e.secondary.norad_id,"name":e.secondary.name},"tca":e.tca.isoformat(),"miss_distance_km":round(e.miss_distance_km,6),"probability_of_collision":e.pc,"maneuver":plan_avoidance_burn(e)} for e in events],"skipped_by_altitude":skipped}

def _run_assessment(job_id, request):
    with jobs_lock: jobs[job_id]["status"]="running"
    try:
        primary=load_primary(request.primary_norad_id, db_path=DB_PATH); candidates=load_candidates(exclude_norad_id=primary.norad_id, db_path=DB_PATH)
        if not candidates: raise ValueError("No candidate objects in the database. Run data ingestion first.")
        start=datetime.now(timezone.utc); events,skipped=assess_conjunctions(primary,candidates,start,start+timedelta(hours=request.hours),screening_distance_km=request.screening_km)
        results=[]
        for e in events[:request.top]:
            maneuver=plan_avoidance_burn(e)
            record_conjunction_event({"primary_norad_id":e.primary.norad_id,"secondary_norad_id":e.secondary.norad_id,"tca":e.tca.isoformat(),"miss_distance_km":e.miss_distance_km,"probability_of_collision":e.pc,"maneuver_recommended":maneuver.get("maneuver_needed",False),"maneuver_details":maneuver},db_path=DB_PATH)
            results.append({"primary":{"norad_id":e.primary.norad_id,"name":e.primary.name},"secondary":{"norad_id":e.secondary.norad_id,"name":e.secondary.name},"tca":e.tca.isoformat(),"miss_distance_km":round(e.miss_distance_km,6),"probability_of_collision":e.pc,"maneuver":maneuver})
        with jobs_lock: jobs[job_id].update({"status":"complete","result":{"primary":{"norad_id":primary.norad_id,"name":primary.name},"candidate_count":len(candidates),"skipped_by_altitude":skipped,"window_hours":request.hours,"screening_km":request.screening_km,"events":results}})
    except Exception as exc:
        with jobs_lock: jobs[job_id].update({"status":"failed","error":str(exc)})

@app.post("/api/assessments")
def start_assessment(request: AssessmentRequest):
    if not latest_for_norad_id(request.primary_norad_id, DB_PATH): raise HTTPException(404,f"No tracked data for NORAD ID {request.primary_norad_id}")
    job_id=uuid.uuid4().hex
    with jobs_lock: jobs[job_id]={"id":job_id,"status":"queued","created_at":datetime.now(timezone.utc).isoformat(),"request":request.model_dump()}
    threading.Thread(target=_run_assessment,args=(job_id,request),daemon=True).start()
    return {"job_id":job_id,"status":"queued"}

@app.get("/api/assessments/{job_id}")
def assessment_status(job_id: str):
    with jobs_lock: job=jobs.get(job_id)
    if not job: raise HTTPException(404,"Assessment job not found. The API may have restarted.")
    return job

@app.get("/api/events")
def stored_events(limit: int = Query(50, ge=1, le=200)):
    with get_connection(DB_PATH) as conn: rows=conn.execute("SELECT * FROM conjunction_events ORDER BY assessed_at DESC LIMIT ?",(limit,)).fetchall()
    return [serialize_event(r) for r in rows]

@app.get("/api/events/{event_id}")
def stored_event(event_id: int):
    with get_connection(DB_PATH) as conn: row=conn.execute("SELECT * FROM conjunction_events WHERE id=?",(event_id,)).fetchone()
    if not row: raise HTTPException(404,"Conjunction event not found")
    return serialize_event(row)
