import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { AlertTriangle, CheckCircle2, Database, Gauge, Loader2, Orbit, Play, RefreshCw, Search, Satellite, ShieldCheck, Target, X, Zap, ArrowRight, Sun, Moon } from "lucide-react";
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
  const [theme, setTheme] = useState(() => localStorage.getItem("satcollivo-theme") || "dark");
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

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("satcollivo-theme", theme);
  }, [theme]);

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

  const alt = useMemo(() => {
    if (!orbit?.points?.length) return null;
    const r = orbit.points.map((q) => Math.hypot(q.position_km?.x || 0, q.position_km?.y || 0, q.position_km?.z || 0) - 6371);
    return { lo: Math.round(Math.min(...r)), hi: Math.round(Math.max(...r)) };
  }, [orbit]);
  const nav = [["overview", Gauge, "Overview"], ["objects", Satellite, "Objects"], ["conjunctions", Target, "Conjunctions"], ["threats", AlertTriangle, "Threats"], ["maneuvers", Zap, "Maneuvers"], ["data", Database, "System"]];
  const flip = () => setTheme((c) => (c === "dark" ? "light" : "dark"));

  return (
    <div className="app">
      <div className="shell">
        <nav className="rail" aria-label="Primary">
          <button className="logo" onClick={() => setView("overview")} aria-label="SatCollivo home"><Orbit size={20} /></button>
          <div className="rail-nav">
            {nav.map(([id, Icon, label]) => (
              <button key={id} className={view === id ? "nav active" : "nav"} onClick={() => setView(id)} aria-label={label}>
                <Icon size={19} /><span className="tip">{label}</span>
                {id === "threats" && threats.length > 0 && <i className="dot crit" />}
                {id === "maneuvers" && maneuvers.length > 0 && <i className="dot" />}
              </button>
            ))}
          </div>
          <div className="rail-foot">
            <button className="nav" onClick={refresh} aria-label="Refresh"><RefreshCw size={17} className={loading ? "spin" : ""} /><span className="tip">Refresh data</span></button>
            <button className="nav" onClick={flip} aria-label="Toggle theme">{theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}<span className="tip">{theme === "dark" ? "Light theme" : "Dark theme"}</span></button>
          </div>
        </nav>

        <main className={view === "overview" ? "main is-overview" : "main"}>
          {error && <div className="error"><AlertTriangle size={15} /><span>{error}</span><button onClick={() => setError("")}><X size={15} /></button></div>}

          {view === "overview" ? (
            <>
              <section className="stage scope-dark">
                <Orbit3D orbit={orbit} offset={190} />
                <div className="hud">
                  <div className="hero">
                    <span className="live"><i /> LIVE · ORBITAL SAFETY CONSOLE</span>
                    <h1>{selected?.name || "Select an object"}</h1>
                    <p>{selected ? `NORAD ${selected.norad_id} · ${selected.object_type || "Tracked object"}` : "Search the catalog to begin."}</p>
                    <div className="chips">
                      {alt && <><span>PERIGEE <b>{alt.lo} km</b></span><span>APOGEE <b>{alt.hi} km</b></span></>}
                      {orbit && <span>FRAME <b>TEME</b></span>}
                      {selectedIsDocked && <span className="warn">DOCKED · SELECT HOST</span>}
                    </div>
                  </div>
                  <div className="kpis">
                    <Kpi label="Tracked" value={stats?.unique_objects ?? "—"} />
                    <Kpi label="Conjunctions" value={stats?.event_count ?? 0} />
                    <Kpi label="Threats" value={threats.length} tone={threats.length ? "crit" : ""} />
                    <Kpi label="Maneuvers" value={stats?.maneuver_count ?? 0} tone={stats?.maneuver_count ? "warn" : ""} />
                  </div>
                </div>

                <aside className="finder glass">
                  <div className="search-box"><Search size={15} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name or NORAD ID" /></div>
                  <div className="object-list">
                    {objects.slice(0, 7).map((o) => (
                      <button key={o.norad_id} className={selected?.norad_id === o.norad_id ? "object-row chosen" : "object-row"} onClick={() => choose(o)}>
                        <span><b>{o.name || "Unknown object"}</b><small>NORAD {o.norad_id}</small></span>
                        <em className={o.docked ? "tag warn" : "tag"}>{o.docked ? "DOCKED" : o.object_type || "UNKNOWN"}</em>
                      </button>
                    ))}
                    {!objects.length && <div className="empty">No matching objects.</div>}
                  </div>
                  <button className="link-button" onClick={() => setView("objects")}>Browse full catalog <ArrowRight size={14} /></button>
                </aside>

                <div className="dock glass">
                  <div className="seg" role="group" aria-label="Assessment window">
                    {[1, 6, 24, 48, 72].map((h) => <button key={h} className={hours === h ? "on" : ""} onClick={() => setHours(h)}>{h}h</button>)}
                  </div>
                  <button className="primary" disabled={!selected || selectedIsDocked || assessment?.status === "running"} onClick={runAssessment}>
                    {assessment?.status === "running" ? <Loader2 className="spin" size={16} /> : <Play size={16} />}
                    {assessment?.status === "running" ? "Running…" : selectedIsDocked ? "Select host" : "Run conjunction assessment"}
                  </button>
                </div>
                <span className="drag-hint">DRAG TO ROTATE · ⌘/CTRL + SCROLL TO ZOOM · ORBIT NOT TO SCALE</span>
              </section>

              <section className="feed">
                <div className="feed-head"><div><span className="eyebrow">RECENT CONJUNCTIONS</span><h2>Independent objects only</h2></div><button className="link-inline" onClick={() => setView("conjunctions")}>View all <ArrowRight size={14} /></button></div>
                <div className="card"><EventTable events={events.slice(0, 8)} onSelect={setDetail} loading={loading} /></div>
              </section>
            </>
          ) : (
            <div className="page-heading"><span className="eyebrow">SATCOLLIVO</span><h1>{view === "data" ? "System" : view}</h1></div>
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

function Kpi({ label, value, tone = "" }) { return <div className={`kpi ${tone}`}><strong>{value}</strong><span>{label}</span></div>; }
function CardHeader({ title, subtitle }) { return <div className="card-header"><div><span>{title}</span><small>{subtitle}</small></div></div>; }
function InfoRow({ label, value }) { return <div className="info-row"><span>{label}</span><b>{value ?? "—"}</b></div>; }

function EventTable({ events = [], onSelect, loading }) {
  return <div className="table-wrap"><div className="table head"><span>PRIMARY</span><span>SECONDARY</span><span>TCA</span><span>MISS</span><span>PC</span><span>RISK</span></div>{events.map((event, i) => <button className="table row" data-risk={risk(event.probability_of_collision).toLowerCase()} key={event.id || i} onClick={() => onSelect?.(event)}><span>{event.primary_name || `#${event.primary_norad_id}`}</span><span>{event.secondary_name || `#${event.secondary_norad_id}`}</span><span>{timeText(event.tca)}</span><span>{Number(event.miss_distance_km).toFixed(3)} km</span><span className="mono">{pcText(event.probability_of_collision)}</span><span><b className={`risk ${risk(event.probability_of_collision).toLowerCase()}`}>{risk(event.probability_of_collision)}</b></span></button>)}{!events.length && !loading && <div className="empty">No independent conjunctions stored yet. Run an assessment to create history.</div>}</div>;
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