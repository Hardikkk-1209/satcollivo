import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Activity, AlertTriangle, Database, Gauge, Orbit, Radar, RefreshCw, Search, Satellite, Shield, Target, Zap, X, Play, ChevronRight, CheckCircle2, Loader2, Settings2 } from 'lucide-react';
import './styles.css';

const API = import.meta.env.VITE_API_URL || 'http://localhost:8000';
const pcText = (n) => n == null ? '—' : Number(n).toExponential(2);
const risk = (pc) => pc >= 1e-4 ? 'CRITICAL' : pc >= 1e-5 ? 'HIGH' : pc >= 1e-6 ? 'MEDIUM' : 'LOW';
const timeText = (v) => v ? new Date(v).toLocaleString([], { year:'numeric', month:'short', day:'2-digit', hour:'2-digit', minute:'2-digit' }) : '—';

async function apiGet(path) {
  const r = await fetch(`${API}${path}`);
  if (!r.ok) throw new Error((await r.json().catch(() => ({}))).detail || `Request failed (${r.status})`);
  return r.json();
}
async function apiPost(path, body) {
  const r = await fetch(`${API}${path}`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body) });
  if (!r.ok) throw new Error((await r.json().catch(() => ({}))).detail || `Request failed (${r.status})`);
  return r.json();
}

function App() {
  const [view, setView] = useState('overview');
  const [stats, setStats] = useState(null);
  const [objects, setObjects] = useState([]);
  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [orbit, setOrbit] = useState(null);
  const [assessment, setAssessment] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const refresh = async () => {
    setLoading(true);
    try {
      const [s, e] = await Promise.all([apiGet('/api/stats'), apiGet('/api/events?limit=50')]);
      setStats(s); setEvents(e); setError('');
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  };

  const searchObjects = async (term = '') => {
    try { setObjects(await apiGet(`/api/satellites?search=${encodeURIComponent(term)}&limit=100`)); }
    catch (err) { setError(err.message); }
  };

  useEffect(() => { refresh(); searchObjects(''); }, []);
  useEffect(() => {
    const t = setTimeout(() => searchObjects(query), 180);
    return () => clearTimeout(t);
  }, [query]);

  const selectObject = async (obj) => {
    setSelected(obj); setError('');
    try { setOrbit(await apiGet(`/api/satellites/${obj.norad_id}/orbit?duration_minutes=120&step_seconds=60`)); }
    catch (err) { setOrbit(null); setError(err.message); }
  };

  const runAssessment = async (hours = 24) => {
    if (!selected) return;
    setAssessment({ status:'queued' });
    try {
      const job = await apiPost('/api/assessments', { primary_norad_id:selected.norad_id, hours, screening_km:25, top:20 });
      setAssessment({ status:'running', jobId:job.job_id });
      const timer = setInterval(async () => {
        try {
          const result = await apiGet(`/api/assessments/${job.job_id}`);
          setAssessment(result);
          if (result.status === 'complete' || result.status === 'failed') { clearInterval(timer); if (result.status === 'complete') refresh(); }
        } catch (err) { clearInterval(timer); setAssessment({ status:'failed', error:err.message }); }
      }, 1000);
    } catch (err) { setAssessment({ status:'failed', error:err.message }); }
  };

  const nav = [['overview','Overview',Gauge],['objects','Objects',Satellite],['conjunctions','Conjunctions',Radar],['threats','Threats',AlertTriangle],['maneuvers','Maneuvers',Zap],['data','Data',Database]];
  return <div className="shell">
    <aside>
      <div className="brand"><Orbit/><div><b>SATCOLLIVO</b><small>ORBITAL SAFETY</small></div></div>
      <nav>{nav.map(([id,label,Icon]) => <button key={id} className={view===id?'active':''} onClick={() => setView(id)}><Icon/>{label}</button>)}</nav>
      <div className="prototype"><Shield/><div><b>DECISION SUPPORT</b><span>Prototype calculations. Validate before operational use.</span></div></div>
    </aside>
    <main>
      <header><div><p>MISSION CONTROL / {view.toUpperCase()}</p><h1>{titleFor(view)}</h1></div><div className="header-actions"><div className="online"><i/> SYSTEM ONLINE</div><button className="icon-btn" onClick={refresh}><RefreshCw size={15}/></button></div></header>
      {error && <div className="errorbar"><AlertTriangle size={14}/>{error}<button onClick={() => setError('')}><X size={13}/></button></div>}
      {view==='overview' && <Overview stats={stats} events={events} objects={objects} query={query} setQuery={setQuery} selected={selected} orbit={orbit} onSelect={selectObject} onAssess={runAssessment} setView={setView} loading={loading}/>} 
      {view==='objects' && <Objects objects={objects} query={query} setQuery={setQuery} selected={selected} onSelect={selectObject}/>} 
      {view==='conjunctions' && <Conjunctions events={events} selected={selected} onAssess={runAssessment}/>} 
      {view==='threats' && <Threats events={events.filter(e => e.probability_of_collision >= 1e-6)}/>} 
      {view==='maneuvers' && <Maneuvers events={events.filter(e => e.maneuver_recommended)}/>} 
      {view==='data' && <DataView stats={stats}/>} 
      {assessment && <AssessmentModal data={assessment} onClose={() => setAssessment(null)}/>} 
    </main>
  </div>;
}

function titleFor(v) { return ({overview:'Orbital Situation',objects:'Tracked Objects',conjunctions:'Conjunction Assessment',threats:'Threat Monitor',maneuvers:'Maneuver Analysis',data:'Data & System Health'})[v]; }

function Overview({stats,events,objects,query,setQuery,selected,orbit,onSelect,onAssess,setView,loading}) {
  return <>
    <section className="metrics">
      <Card label="TRACKED RECORDS" value={stats?.total_records ?? '—'} icon={<Satellite/>}/>
      <Card label="UNIQUE OBJECTS" value={stats?.unique_objects ?? '—'} icon={<Target/>}/>
      <Card label="TOP COLLISION Pc" value={events[0] ? pcText(events[0].probability_of_collision) : '—'} icon={<Activity/>}/>
      <Card label="MANEUVERS FLAGGED" value={stats?.maneuver_count ?? 0} icon={<Zap/>}/>
    </section>
    <section className="actionbar"><div><b>Assessment target</b><span>{selected ? `${selected.name} · NORAD ${selected.norad_id}` : 'Select a primary satellite'}</span></div><div className="action-controls"><select id="hours" defaultValue="24"><option value="1">1 hour</option><option value="6">6 hours</option><option value="24">24 hours</option><option value="48">48 hours</option></select><button className="primary" disabled={!selected} onClick={() => onAssess(Number(document.getElementById('hours').value))}><Play size={14}/> RUN ASSESSMENT</button></div></section>
    <section className="grid">
      <div className="panel orbit-panel"><PanelHead title="SGP4 ORBITAL TRACK" sub={orbit ? `${orbit.name} · 120 min propagation` : 'Select an object to propagate'} action={<span className="live-tag">LIVE PROPAGATION</span>}/><OrbitView orbit={orbit}/><div className="telemetry"><span>FRAME: TEME</span><span>STEP: 60 SEC</span><span>{orbit ? `${orbit.points.length} SAMPLES` : 'NO TRACK'}</span></div></div>
      <div className="panel search-panel"><PanelHead title="OBJECT EXPLORER" sub="Search catalog by name or NORAD"/><div className="search"><Search size={16}/><input placeholder="ISS, 25544..." value={query} onChange={e=>setQuery(e.target.value)}/></div><div className="sat-list">{objects.slice(0,8).map(o=><ObjectRow key={o.norad_id} s={o} chosen={selected?.norad_id===o.norad_id} onClick={()=>onSelect(o)}/>)}</div><button className="see-all" onClick={()=>setView('objects')}>VIEW FULL CATALOG <ChevronRight size={13}/></button></div>
    </section>
    <section className="panel events"><PanelHead title="RECENT CONJUNCTION EVENTS" sub="Stored assessment history"/><EventTable events={events.slice(0,8)} loading={loading}/></section>
  </>;
}

function Objects({objects,query,setQuery,selected,onSelect}) { return <section className="panel full"><PanelHead title="TRACKED OBJECT CATALOG" sub={`${objects.length} objects currently loaded`}/><div className="catalog-toolbar"><div className="search"><Search size={16}/><input placeholder="Search name or NORAD ID" value={query} onChange={e=>setQuery(e.target.value)}/></div><span className="hint">CelesTrak / latest epoch per NORAD</span></div><div className="catalog-grid">{objects.map(o=><ObjectCard key={o.norad_id} s={o} selected={selected?.norad_id===o.norad_id} onClick={()=>onSelect(o)}/>)}</div></section>; }

function Conjunctions({events,selected,onAssess}) { return <><section className="actionbar"><div><b>Conjunction assessment</b><span>{selected ? `${selected.name} · NORAD ${selected.norad_id}` : 'Select a satellite from Objects first'}</span></div><button className="primary" disabled={!selected} onClick={()=>onAssess(24)}><Play size={14}/> RUN 24H ASSESSMENT</button></section><section className="panel full"><PanelHead title="CONJUNCTION REGISTER" sub="Highest-risk recorded events"/><EventTable events={events}/></section></>; }

function Threats({events}) { return <section className="panel full"><PanelHead title="THREAT MONITOR" sub="Events above Pc 1×10⁻⁶"/><div className="threat-grid">{events.length ? events.map(e=><div className="threat-card" key={e.id}><div className="threat-top"><strong className={`risk ${risk(e.probability_of_collision).toLowerCase()}`}>{risk(e.probability_of_collision)}</strong><span>{timeText(e.tca)}</span></div><h3>{e.primary?.name || `NORAD ${e.primary_norad_id}`}</h3><p>vs {e.secondary?.name || `NORAD ${e.secondary_norad_id}`}</p><div className="threat-stats"><span><b>{Number(e.miss_distance_km).toFixed(3)}</b> km miss</span><span><b>{pcText(e.probability_of_collision)}</b> Pc</span></div></div>) : <Empty text="No elevated threats in stored assessment history."/>}</div></section>; }

function Maneuvers({events}) { return <section className="panel full"><PanelHead title="MANEUVER ANALYSIS" sub="Prototype decision-support recommendations"/><div className="maneuver-list">{events.length ? events.map(e=>{const m=e.maneuver_details||{};return <div className="maneuver-card" key={e.id}><div><strong>{e.primary?.name || `NORAD ${e.primary_norad_id}`}</strong><span>vs {e.secondary?.name || `NORAD ${e.secondary_norad_id}`}</span></div><div><small>ΔV</small><b>{m.delta_v_m_s != null ? `${m.delta_v_m_s} m/s` : '—'}</b></div><div><small>DIRECTION</small><b>{m.direction_ric || '—'}</b></div><div><small>BURN TIME</small><b>{m.burn_time ? timeText(m.burn_time) : '—'}</b></div><div><small>TARGET Pc</small><b>{m.target_pc ? pcText(m.target_pc) : '—'}</b></div></div>}) : <Empty text="No maneuver recommendations have been stored."/>}</div><div className="notice"><Settings2 size={15}/><span>Maneuver values are prototype linearized estimates and are not flight-ready commands. Validate with full numerical re-propagation before operational use.</span></div></section>; }

function DataView({stats}) { return <div className="data-grid"><section className="panel"><PanelHead title="DATABASE" sub="SQLite tracking store"/><div className="data-list"><DataRow label="Tracked records" value={stats?.total_records}/><DataRow label="Unique NORAD objects" value={stats?.unique_objects}/><DataRow label="CelesTrak records" value={stats?.by_source?.CELESTRAK||0}/><DataRow label="Payloads" value={stats?.by_object_type?.PAYLOAD||0}/><DataRow label="Debris" value={stats?.by_object_type?.DEBRIS||0}/><DataRow label="Latest fetch" value={timeText(stats?.latest_fetch)}/></div></section><section className="panel"><PanelHead title="SYSTEM PIPELINE" sub="Current integration status"/><div className="pipeline">{['SQLite database','CelesTrak ingestion','SGP4 propagation','Conjunction engine','Probability of collision','Maneuver planner','React mission console'].map(x=><div className="pipe" key={x}><CheckCircle2 size={16}/><span>{x}</span><b>READY</b></div>)}</div></section></div>; }

function AssessmentModal({data,onClose}) { const done=data.status==='complete', failed=data.status==='failed'; return <div className="overlay"><div className="modal"><div className="modal-head"><div><span>ASSESSMENT JOB</span><h2>{done?'Assessment complete':failed?'Assessment failed':'Running conjunction assessment'}</h2></div><button className="icon-btn" onClick={onClose}><X size={17}/></button></div>{!done&&!failed ? <div className="progress"><Loader2 className="spin" size={28}/><b>Propagating tracked objects…</b><span>Altitude pre-filter → TCA search → covariance → Pc</span></div> : failed ? <div className="failure"><AlertTriangle/><b>{data.error}</b></div> : <><div className="assessment-summary"><span><small>PRIMARY</small><b>{data.result.primary.name}</b></span><span><small>CANDIDATES</small><b>{data.result.candidate_count}</b></span><span><small>PREFILTERED</small><b>{data.result.skipped_by_altitude}</b></span><span><small>WINDOW</small><b>{data.result.window_hours}h</b></span></div><EventTable events={data.result.events}/></>}<button className="secondary wide" onClick={onClose}>{done||failed?'CLOSE':'RUNNING…'}</button></div></div>; }

function EventTable({events=[],loading}) { return <div className="table"><div className="tr th"><span>PRIMARY</span><span>SECONDARY</span><span>TCA</span><span>MISS DIST.</span><span>Pc</span><span>RISK</span></div>{events.map((e,i)=><div className="tr" key={e.id||i}><span>{e.primary?.name || `#${e.primary_norad_id}`}</span><span>{e.secondary?.name || `#${e.secondary_norad_id}`}</span><span>{timeText(e.tca)}</span><span>{Number(e.miss_distance_km).toFixed(3)} km</span><span className="mono">{pcText(e.probability_of_collision)}</span><span><strong className={`risk ${risk(e.probability_of_collision).toLowerCase()}`}>{risk(e.probability_of_collision)}</strong></span></div>)}{!events.length&&!loading&&<Empty text="No conjunction events recorded yet. Select a primary satellite and run an assessment."/>}</div>; }

function OrbitView({orbit}) { if(!orbit) return <div className="orbit-empty"><Orbit size={32}/><b>SELECT A SATELLITE</b><span>SGP4 propagation will render its actual trajectory here.</span></div>; const p=orbit.points; const minX=Math.min(...p.map(x=>x.x)),maxX=Math.max(...p.map(x=>x.x)),minY=Math.min(...p.map(x=>x.y)),maxY=Math.max(...p.map(x=>x.y)); const xy=q=>[25+(q.x-minX)/Math.max(1,maxX-minX)*50,25+(q.y-minY)/Math.max(1,maxY-minY)*50]; const d=p.map((q,i)=>{const [x,y]=xy(q);return `${i?'L':'M'} ${20+x*3.2} ${20+y*3.2}`}).join(' '); const [lx,ly]=xy(p[p.length-1]); return <svg className="orbit-svg" viewBox="0 0 240 240"><defs><radialGradient id="earth"><stop offset="0" stopColor="#2c7895"/><stop offset=".7" stopColor="#0c3044"/><stop offset="1" stopColor="#06121b"/></radialGradient></defs><circle cx="120" cy="120" r="39" fill="url(#earth)" stroke="#3e90aa"/><circle cx="120" cy="120" r="46" fill="none" stroke="#16475d" strokeDasharray="2 4"/><path d={d} fill="none" stroke="#65e3ff" strokeWidth="1.4"/><circle cx={20+lx*3.2} cy={20+ly*3.2} r="3.5" fill="#fff"/><text x="14" y="226" fill="#557180" fontSize="6">ACTUAL SGP4 PROPAGATION · {p.length} POINTS</text></svg>; }
function PanelHead({title,sub,action}) { return <div className="panel-head"><div><span>{title}</span><small>{sub}</small></div>{action}</div>; }
function Card({label,value,icon}) { return <div className="metric"><div>{icon}</div><span>{label}</span><b>{value}</b><small>LIVE DATABASE</small></div>; }
function ObjectRow({s,chosen,onClick}) { return <button onClick={onClick} className={chosen?'chosen':''}><span><b>{s.name||'UNKNOWN OBJECT'}</b><small>NORAD {s.norad_id}</small></span><em>{s.object_type||'UNKNOWN'}</em></button>; }
function ObjectCard({s,selected,onClick}) { return <button className={`object-card ${selected?'selected':''}`} onClick={onClick}><div className="object-icon"><Satellite size={18}/></div><div><b>{s.name||'UNKNOWN OBJECT'}</b><small>NORAD {s.norad_id}</small></div><span>{s.object_type||'UNKNOWN'}</span></button>; }
function DataRow({label,value}) { return <div className="data-row"><span>{label}</span><b>{value ?? '—'}</b></div>; }
function Empty({text}) { return <div className="empty">{text}</div>; }

createRoot(document.getElementById('root')).render(<App/>);
