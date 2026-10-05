import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { AlertTriangle, CheckCircle2, Database, Gauge, Loader2, Orbit, Play, RefreshCw, Search, Satellite, ShieldCheck, Target, X, Zap, ArrowRight } from "lucide-react";
import Orbit3D from "./Orbit3D.jsx";
import "./styles.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:8000";
const pcText = (v) => Number(v || 0).toExponential(2);
const risk = (pc) => {
  const n = Number(pc || 0);
  if (n >= 1e-4) return "CRITICAL";
  if (n >= 1e-5) return "HIGH";
  if (n >= 1e-6) return "MEDIUM";
  return "LOW";
};
const timeText = (v) => v ? new Date(v).toLocaleString([], { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "—";

async function req(path, options) {
  const res = await fetch(`${API}${path}`, options);
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.detail || `Request failed (${res.status})`);
  return body;
}
const get = (path) => req(path);
const post = (path, body) => req(path, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });

function App() {
  const [view, setView] = useState("overview");
  const [stats, setStats] = useState(null);
  const [objects, setObjects] = useState([]);
  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState("25544");
  const [selected, setSelected] = useState(null);
  const [orbit, setOrbit] = useState(null);
  const [hours, setHours] = useState(24);
  const [assessment, setAssessment] = useState(null);
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const refresh = async () => {
    setLoading(true);
    try {
      const [s, e] = await Promise.all([get("/api/stats"), get("/api/events?limit=50")]);
      setStats(s);
      setEvents(e);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const searchObjects = async (value) => {
    try {
      const data = await get(`/api/satellites?search=${encodeURIComponent(value)}&limit=100`);
      setObjects(data.objects || []);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const choose = async (object) => {
    setSelected(object);
    setOrbit(null);
    setAssessment(null);
    try {
      setOrbit(await get(`/api/satellites/${object.norad_id}/orbit?duration_minutes=120&step_seconds=60`));
    } catch (err) {
      setError(err.message);
    }
  };

  const runAssessment = async () => {
    if (!selected || selected.docked) return;
    setAssessment({ status: "running" });
    try {
      const job = await post("/api/assessments", { primary_norad_id: selected.norad_id, hours, screening_km: 25, top: 20 });
      const result = await get(`/api/assessments/${job.job_id}`);
      setAssessment(result);
      await refresh();
    } catch (err) {
      setAssessment({ status: "failed", error: err.message });
    }
  };

  useEffect(() => { refresh(); searchObjects("25544"); }, []);
  useEffect(() => {
    const t = setTimeout(() => searchObjects(query), 250);
    return () => clearTimeout(t);
  }, [query]);
  useEffect(() => {
    if (!selected && objects.length) {
      const preferred = objects.find((x) => x.norad_id === 25544) || objects[0];
      choose(preferred);
    }
  }, [objects, selected]);

  const threats = useMemo(() => events.filter((e) => Number(e.probability_of_collision) >= 1e-6), [events]);
  const maneuvers = useMemo(() => events.filter((e) => e.maneuver_recommended), [events]);
  const selectedIsDocked = Boolean(selected?.docked);

  return (
    <div className="app">
      <header className="topbar">
        <button className="brand" onClick={() => setView("overview")}>
          <span className="brand-mark"><Orbit size={20} /></span>
          <span><strong>SatCollivo</strong><small>ORBITAL SAFETY CONSOLE</small></span>
        </button>
        <div className="status"><i /> SYSTEM ONLINE <button className="refresh" onClick={refresh} aria-label="Refresh"><RefreshCw size={15} /></button></div>
      </header>

      {error && <div className="error"><AlertTriangle size={15} /><span>{error}</span><button onClick={() => setError("")}><X size={15} /></button></div>}

      <div className="layout">
        <aside className="sidebar">
          <nav>
            {[
              ["overview", Gauge, "Overview"],
              ["objects", Satellite, "Objects"],
              ["conjunctions", Target, "Conjunctions"],
              ["threats", AlertTriangle, "Threats"],
              ["maneuvers", Zap, "Maneuvers"],
              ["data", Database, "System"]
            ].map(([id, Icon, label]) => (
              <button key={id} className={view === id ? "nav active" : "nav"} onClick={() => setView(id)}><Icon size={17} />{label}</button>
            ))}
          </nav>
          <div className="sidebar-note"><ShieldCheck size={18} /><div><b>Decision support</b><span>Prototype calculations. Validate before operational use.</span></div></div>
        </aside>

        <main className="content">
          <div className="page-heading">
            <span className="eyebrow">MISSION CONTROL</span>
            <h1>{view === "overview" ? "Orbital situation" : view}</h1>
            <p>Select a satellite, inspect its orbit, run the assessment, then review any risks.</p>
          </div>

          {view === "overview" && (
            <>
              <div className="metrics">
                <Metric label="Tracked records" value={stats?.total_records ?? "—"} />
                <Metric label="Unique objects" value={stats?.unique_objects ?? "—"} />
                <Metric label="Conjunction events" value={stats?.event_count ?? 0} />
                <Metric label="Maneuvers flagged" value={stats?.maneuver_count ?? 0} />
              </div>

              <section className="assessment-card">
                <div>
                  <span className="eyebrow">STEP 01 · CHOOSE A PRIMARY</span>
                  <h2>{selected?.name || "Select an object"} {selectedIsDocked && <span className="status-badge">DOCKED</span>}</h2>
                  <p>{selected ? `NORAD ${selected.norad_id} · ${selected.object_type || "Tracked object"}` : "Search the catalog below."}</p>
                  {selectedIsDocked && <div className="selection-warning">This object is physically docked. Select its host station or spacecraft for collision assessment.</div>}
                </div>
                <div className="assessment-actions">
                  <select value={hours} onChange={(e) => setHours(Number(e.target.value))}>
                    <option value={1}>1 hour</option><option value={6}>6 hours</option><option value={24}>24 hours</option><option value={48}>48 hours</option><option value={72}>72 hours</option>
                  </select>
                  <button className="primary" disabled={!selected || selectedIsDocked || assessment?.status === "running"} onClick={runAssessment}>
                    {assessment?.status === "running" ? <Loader2 className="spin" size={15} /> : <Play size={15} />}
                    {assessment?.status === "running" ? "Running…" : selectedIsDocked ? "Select host" : "Run assessment"}
                  </button>
                </div>
              </section>

              <section className="main-grid">
                <div className="card">
                  <CardHeader title="3D ORBIT" subtitle={orbit ? `${orbit.name} · 120 minute propagation` : "Select an object"} />
                  <Orbit3D orbit={orbit} />
                  {orbit && <div className="telemetry"><span>FRAME <b>TEME</b></span><span>STEP <b>60 SEC</b></span><span>SAMPLES <b>{orbit.points.length}</b></span></div>}
                </div>

                <div className="card explorer">
                  <CardHeader title="OBJECT EXPLORER" subtitle="Search by name or NORAD ID" />
                  <div className="search-box"><Search size={16} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ISS or 25544" /></div>
                  <div className="object-list">
                    {objects.slice(0, 8).map((object) => (
                      <button key={object.norad_id} className={selected?.norad_id === object.norad_id ? "object-row chosen" : "object-row"} onClick={() => choose(object)}>
                        <span><b>{object.name || "Unknown object"} {object.docked && <em className="docked-inline">DOCKED</em>}</b><small>NORAD {object.norad_id}</small></span>
                        <em>{object.docked ? "DOCKED" : object.object_type || "UNKNOWN"}</em>
                      </button>
                    ))}
                    {!objects.length && <div className="empty">No matching objects.</div>}
                  </div>
                  <button className="link-button" onClick={() => setView("objects")}>Browse catalog <ArrowRight size={14} /></button>
                </div>
              </section>

              <section className="card">
                <CardHeader title="RECENT CONJUNCTIONS" subtitle="Independent objects only · docked objects excluded" />
                <EventTable events={events.slice(0, 8)} onSelect={setDetail} loading={loading} />
              </section>
            </>
          )}

          {view === "objects" && <section className="card"><CardHeader title="TRACKED OBJECTS" subtitle={`${objects.length} objects matching your search`} /><div className="toolbar"><div className="search-box wide"><Search size={16} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name or NORAD ID" /></div></div><div className="catalog">{objects.map((object) => <button key={object.norad_id} className={selected?.norad_id === object.norad_id ? "catalog-item selected" : "catalog-item"} onClick={() => choose(object)}><span className="catalog-icon"><Satellite size={17} /></span><span><b>{object.name || "Unknown object"}</b><small>NORAD {object.norad_id}</small></span><em>{object.object_type || "UNKNOWN"}</em></button>)}</div></section>}

          {view === "conjunctions" && <section className="card"><CardHeader title="CONJUNCTION HISTORY" subtitle="Independent-object events only" /><EventTable events={events} onSelect={setDetail} /></section>}

          {view === "threats" && <section className="card"><CardHeader title="THREAT MONITOR" subtitle="Stored independent-object events with Pc ≥ 1×10⁻⁶" /><div className="threat-grid">{threats.map((event) => <button className="threat" key={event.id} onClick={() => setDetail(event)}><div className="threat-top"><b className={`risk ${risk(event.probability_of_collision).toLowerCase()}`}>{risk(event.probability_of_collision)}</b><span>{timeText(event.tca)}</span></div><h3>{event.primary_name || `NORAD ${event.primary_norad_id}`}</h3><p>vs {event.secondary_name || `NORAD ${event.secondary_norad_id}`}</p><div><span>Miss distance<strong>{Number(event.miss_distance_km).toFixed(3)} km</strong></span><span>Pc<strong>{pcText(event.probability_of_collision)}</strong></span></div></button>)}{!threats.length && <div className="empty">No elevated threats in stored history.</div>}</div></section>}

          {view === "maneuvers" && <section className="card"><CardHeader title="MANEUVER ANALYSIS" subtitle="Prototype decision-support recommendations" />{maneuvers.map((event) => { const m = event.maneuver_details || {}; return <button className="maneuver-row" key={event.id} onClick={() => setDetail(event)}><span><b>{event.primary_name || `NORAD ${event.primary_norad_id}`}</b><small>vs {event.secondary_name || `NORAD ${event.secondary_norad_id}`}</small></span><span><small>ΔV</small><b>{m.delta_v_m_s != null ? `${m.delta_v_m_s} m/s` : "—"}</b></span><span><small>LEAD</small><b>{m.lead_time_hours != null ? `${m.lead_time_hours} h` : "—"}</b></span><span><small>BURN</small><b>{m.burn_time ? timeText(m.burn_time) : "—"}</b></span></button>; })}{!maneuvers.length && <div className="empty">No maneuver recommendations have been stored.</div>}<div className="notice">Maneuver estimates are prototype linearized decision support, not flight commands.</div></section>}

          {view === "data" && <div className="system-grid"><section className="card"><CardHeader title="DATABASE" subtitle="Current tracking store" /><InfoRow label="Tracked records" value={stats?.total_records} /><InfoRow label="Unique objects" value={stats?.unique_objects} /><InfoRow label="Conjunction events" value={stats?.event_count} /><InfoRow label="Maneuver recommendations" value={stats?.maneuver_count} /><InfoRow label="Latest data fetch" value={timeText(stats?.latest_fetch)} /><InfoRow label="Latest assessment" value={timeText(stats?.latest_assessment)} /></section><section className="card"><CardHeader title="PIPELINE" subtitle="Application components" />{["CelesTrak ingestion","Docked-object metadata","SQLite catalog","SGP4 propagation","Altitude pre-filter","Conjunction search","DPWC covariance","Collision probability","Maneuver planner","React console","3D orbit viewer"].map((name) => <div className="pipeline-row" key={name}><CheckCircle2 size={16} /><span>{name}</span><b>READY</b></div>)}</section></div>}
        </main>
      </div>

      {assessment && <AssessmentModal data={assessment} onClose={() => setAssessment(null)} />}
      {detail && <DetailModal event={detail} onClose={() => setDetail(null)} />}
    </div>
  );
}

function Metric({ label, value }) { return <div className="metric"><span>{label}</span><strong>{value}</strong><small>LIVE DATABASE</small></div>; }
function CardHeader({ title, subtitle }) { return <div className="card-header"><div><span>{title}</span><small>{subtitle}</small></div></div>; }
function InfoRow({ label, value }) { return <div className="info-row"><span>{label}</span><b>{value ?? "—"}</b></div>; }

function EventTable({ events = [], onSelect, loading }) {
  return <div className="table-wrap"><div className="table head"><span>PRIMARY</span><span>SECONDARY</span><span>TCA</span><span>MISS</span><span>PC</span><span>RISK</span></div>{events.map((event, i) => <button className="table row" key={event.id || i} onClick={() => onSelect?.(event)}><span>{event.primary_name || `#${event.primary_norad_id}`}</span><span>{event.secondary_name || `#${event.secondary_norad_id}`}</span><span>{timeText(event.tca)}</span><span>{Number(event.miss_distance_km).toFixed(3)} km</span><span className="mono">{pcText(event.probability_of_collision)}</span><span><b className={`risk ${risk(event.probability_of_collision).toLowerCase()}`}>{risk(event.probability_of_collision)}</b></span></button>)}{!events.length && !loading && <div className="empty">No independent conjunctions stored yet. Run an assessment to create history.</div>}</div>;
}

function AssessmentModal({ data, onClose }) {
  const result = data.result;
  const running = data.status === "running";
  const failed = data.status === "failed";
  const complete = data.status === "complete";
  const heading = running ? "Assessment running…" : failed ? "Assessment failed" : result?.event_count ? "Conjunctions detected" : "No qualifying conjunctions";
  return <div className="overlay"><section className="modal"><div className="modal-top"><div><span className="eyebrow">ASSESSMENT RESULT</span><h2>{heading}</h2></div><button className="icon-button" onClick={onClose}><X size={17} /></button></div>{running && <div className="modal-state"><Loader2 className="spin" size={28} /><strong>Running conjunction assessment…</strong><span>Propagation → pre-filter → docked filtering → TCA → covariance → Pc</span></div>}{failed && <div className="modal-state"><AlertTriangle size={28} /><strong>{data.error}</strong></div>}{complete && <><div className="result-stats"><InfoRow label="Primary" value={result.primary.name} /><InfoRow label="Candidates" value={result.candidate_count} /><InfoRow label="Orbit filter" value={result.filtered_out} /><InfoRow label="Docked excluded" value={result.docked_excluded ?? 0} /><InfoRow label="Events" value={result.event_count} /><InfoRow label="Window" value={`${result.window_hours} hours`} /></div>{result.events?.length ? <EventTable events={result.events} /> : <div className="modal-empty"><CheckCircle2 size={28} /><b>NO QUALIFYING CONJUNCTIONS</b><span>No independent object passed the configured screening threshold in this window.</span></div>}</>}<button className="secondary wide" onClick={onClose}>Close</button></section></div>;
}

function DetailModal({ event, onClose }) {
  const maneuver = event.maneuver_details || {};
  return <div className="overlay"><section className="modal"><div className="modal-top"><div><span className="eyebrow">CONJUNCTION EVENT</span><h2>{event.primary_name || `NORAD ${event.primary_norad_id}`} <small>vs {event.secondary_name || `NORAD ${event.secondary_norad_id}`}</small></h2></div><button className="icon-button" onClick={onClose}><X size={17} /></button></div><div className="detail-grid">{[["TCA", timeText(event.tca)],["MISS DISTANCE", `${Number(event.miss_distance_km).toFixed(3)} km`],["PROBABILITY OF COLLISION", pcText(event.probability_of_collision)],["RISK", risk(event.probability_of_collision)]].map(([label, value]) => <InfoBox key={label} label={label} value={value} />)}</div><div className="detail-section"><span className="eyebrow">MANEUVER RECOMMENDATION</span>{event.maneuver_recommended ? <div className="detail-grid nested">{[["ΔV", maneuver.delta_v_m_s != null ? `${maneuver.delta_v_m_s} m/s` : "—"],["DIRECTION", maneuver.direction_ric || "—"],["BURN TIME", maneuver.burn_time ? timeText(maneuver.burn_time) : "—"],["TARGET PC", maneuver.target_pc ? pcText(maneuver.target_pc) : "—"]].map(([label, value]) => <InfoBox key={label} label={label} value={value} />)}</div> : <p className="muted">No maneuver was recommended for this event.</p>}</div><div className="notice">Validate any maneuver with higher-fidelity numerical re-propagation before operational use.</div><button className="secondary wide" onClick={onClose}>Close</button></section></div>;
}
function InfoBox({ label, value }) { return <div className="info-box"><small>{label}</small><b>{value}</b></div>; }

createRoot(document.getElementById("root")).render(<App />);