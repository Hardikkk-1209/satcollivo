import React, {useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Activity, AlertTriangle, Database, Gauge, Orbit, Radar, RefreshCw, Search, Shield, Satellite, Zap} from 'lucide-react';
import './styles.css';

const API=import.meta.env.VITE_API_URL||'http://localhost:8000';
const fmtPc=(n)=>n==null?'—':Number(n).toExponential(2);
const risk=(pc)=>pc>=1e-4?'CRITICAL':pc>=1e-5?'HIGH':pc>=1e-6?'MEDIUM':'LOW';

function App(){
 const [stats,setStats]=useState(null),[sats,setSats]=useState([]),[events,setEvents]=useState([]),[query,setQuery]=useState(''),[selected,setSelected]=useState(null),[loading,setLoading]=useState(true);
 useEffect(()=>{Promise.all([fetch(`${API}/api/stats`).then(r=>r.json()),fetch(`${API}/api/satellites`).then(r=>r.json()),fetch(`${API}/api/events`).then(r=>r.json())]).then(([a,b,c])=>{setStats(a);setSats(b);setEvents(c);setLoading(false)}).catch(()=>setLoading(false))},[]);
 const filtered=sats.filter(s=>`${s.name} ${s.norad_id}`.toLowerCase().includes(query.toLowerCase())).slice(0,7);
 const top=events[0];
 return <div className="shell">
  <aside><div className="brand"><Orbit/><div><b>SATCOLLIVO</b><small>ORBITAL SAFETY</small></div></div><nav><a className="active"><Gauge/>Overview</a><a><Satellite/>Objects</a><a><Radar/>Conjunctions</a><a><AlertTriangle/>Threats</a><a><Zap/>Maneuvers</a><a><Database/>Data</a></nav><div className="prototype"><Shield/><div><b>DECISION SUPPORT</b><span>Prototype calculations. Validate before operational use.</span></div></div></aside>
  <main><header><div><p>MISSION CONTROL / OVERVIEW</p><h1>Orbital Situation</h1></div><div className="online"><i/> SYSTEM ONLINE</div></header>
  <section className="metrics"><Card label="TRACKED RECORDS" value={stats?.total_records??'—'} icon={<Satellite/>}/><Card label="RECORDED EVENTS" value={events.length} icon={<Radar/>}/><Card label="TOP COLLISION Pc" value={top?fmtPc(top.probability_of_collision):'—'} icon={<Activity/>}/><Card label="MANEUVERS FLAGGED" value={events.filter(e=>e.maneuver_recommended).length} icon={<Zap/>}/></section>
  <section className="grid"><div className="panel orbit-panel"><div className="panel-head"><div><span>LIVE ORBITAL VIEW</span><small>Tracking database visualization</small></div><button><RefreshCw size={14}/> SYNC</button></div><div className="space"><div className="orbit o1"/><div className="orbit o2"/><div className="earth"><div className="glow"/></div><div className="sat s1">●<label>PRIMARY</label></div><div className="sat s2">●</div><div className="sat s3">●</div></div><div className="telemetry"><span>SGP4 PROPAGATION</span><span>DPWC UNCERTAINTY</span><span>25 KM SCREEN</span></div></div>
  <div className="panel search-panel"><div className="panel-head"><div><span>OBJECT EXPLORER</span><small>Search catalog by name or NORAD</small></div></div><div className="search"><Search size={16}/><input placeholder="ISS, 25544..." value={query} onChange={e=>setQuery(e.target.value)}/></div><div className="sat-list">{filtered.map(s=><button key={s.norad_id} onClick={()=>setSelected(s)} className={selected?.norad_id===s.norad_id?'chosen':''}><span><b>{s.name||'UNKNOWN OBJECT'}</b><small>NORAD {s.norad_id}</small></span><em>{s.object_type||'UNKNOWN'}</em></button>)}</div></div></section>
  <section className="panel events"><div className="panel-head"><div><span>RECENT CONJUNCTION EVENTS</span><small>Stored assessment history</small></div></div><div className="table"><div className="tr th"><span>PRIMARY</span><span>SECONDARY</span><span>TCA</span><span>MISS DIST.</span><span>Pc</span><span>RISK</span></div>{events.slice(0,6).map((e,i)=><div className="tr" key={i}><span>#{e.primary_norad_id}</span><span>#{e.secondary_norad_id}</span><span>{new Date(e.tca).toLocaleString()}</span><span>{Number(e.miss_distance_km).toFixed(3)} km</span><span className="mono">{fmtPc(e.probability_of_collision)}</span><span><strong className={`risk ${risk(e.probability_of_collision).toLowerCase()}`}>{risk(e.probability_of_collision)}</strong></span></div>)}{!events.length&&!loading&&<div className="empty">No assessments recorded yet. Ingest orbital data and run an assessment to populate this console.</div>}</div></section>
  </main></div>
}
function Card({label,value,icon}){return <div className="metric"><div>{icon}</div><span>{label}</span><b>{value}</b><small>LIVE DATABASE</small></div>}
createRoot(document.getElementById('root')).render(<App/>);
