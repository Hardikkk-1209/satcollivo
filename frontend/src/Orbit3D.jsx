import { useEffect, useRef } from "react";
import * as THREE from "three";

const R = 1.28, D2R = Math.PI / 180;
const gmst = (ms) => { const d = ms / 86400000 + 2440587.5 - 2451545; return ((280.46061837 + 360.98564736629 * d) % 360) * D2R; };
const sunDir = (ms) => { // low-precision solar position -> TEME-like unit vector (three axes: x, z, -y)
  const d = ms / 86400000 + 2440587.5 - 2451545, L = (280.46 + 0.9856474 * d) * D2R, g = (357.528 + 0.9856003 * d) * D2R;
  const lam = L + (1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g)) * D2R, e = 23.439 * D2R;
  const x = Math.cos(lam), y = Math.cos(e) * Math.sin(lam), z = Math.sin(e) * Math.sin(lam);
  return new THREE.Vector3(x, z, -y).normalize();
};

export default function Orbit3D({ orbit, offset = 0 }) {
  const mountRef = useRef(null), api = useRef(null), offsetRef = useRef(offset);
  offsetRef.current = offset;

  useEffect(() => {
    const mount = mountRef.current;
    let disposed = false, frame = 0, drag = false, lx = 0, ly = 0, idle = 0, zoom = 7.4, cur = null;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 300);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2)); renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const sp = new Float32Array(2400 * 3);
    for (let i = 0; i < 2400; i++) new THREE.Vector3().randomDirection().multiplyScalar(60 + Math.random() * 60).toArray(sp, i * 3);
    const sg = new THREE.BufferGeometry(); sg.setAttribute("position", new THREE.BufferAttribute(sp, 3));
    scene.add(new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xdfeaff, size: 0.14, transparent: true, opacity: 0.7 })));

    const root = new THREE.Group(); root.rotation.set(0.42, -0.6, 0); scene.add(root);
    const loader = new THREE.TextureLoader(), tex = (u) => { const t = loader.load(u); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t; };
    const sun = sunDir(Date.now());
    const earthMat = new THREE.ShaderMaterial({
      uniforms: { uDay: { value: tex("/textures/earth_atmos_2048.jpg") }, uNight: { value: tex("/textures/earth_lights_2048.png") }, uSun: { value: sun }, uRot: { value: new THREE.Matrix3() } },
      vertexShader: "varying vec2 vUv;varying vec3 vN,vWN;uniform mat3 uRot;void main(){vUv=uv;vN=normalize(normalMatrix*normal);vWN=uRot*normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
      fragmentShader: `varying vec2 vUv;varying vec3 vN,vWN;uniform sampler2D uDay,uNight;uniform vec3 uSun;
        void main(){float d=dot(normalize(vWN),uSun),k=smoothstep(-.28,.32,d);
          vec3 day=texture2D(uDay,vUv).rgb*(.34+1.05*max(d,0.)),night=texture2D(uNight,vUv).rgb*vec3(1.5,1.1,.65)+texture2D(uDay,vUv).rgb*.035;
          vec3 c=mix(night,day,k);c+=vec3(1.,.5,.25)*smoothstep(-.02,.12,d)*(1.-smoothstep(.12,.35,d))*.07;
          float f=pow(1.-max(dot(normalize(vN),vec3(0.,0.,1.)),0.),3.);c+=vec3(.25,.5,1.)*f*.3*(.25+.75*k);
          gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`
    });
    const earth = new THREE.Mesh(new THREE.SphereGeometry(R, 96, 96), earthMat); root.add(earth);
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.4); sunLight.position.copy(sun).multiplyScalar(10); root.add(sunLight);
    const clouds = new THREE.Mesh(new THREE.SphereGeometry(R * 1.012, 64, 64), new THREE.MeshLambertMaterial({ alphaMap: tex("/textures/earth_clouds_1024.png"), color: 0xffffff, transparent: true, opacity: 0.55, depthWrite: false }));
    root.add(clouds);
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(R * 1.16, 64, 64), new THREE.ShaderMaterial({
      transparent: true, side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false,
      vertexShader: "varying vec3 n;void main(){n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
      fragmentShader: "varying vec3 n;void main(){float i=pow(max(.72-dot(n,vec3(0.,0.,1.)),0.),5.);gl_FragColor=vec4(.35,.6,1.,1.)*i*0.55;}"
    })));

    const orbitGroup = new THREE.Group(); root.add(orbitGroup);
    const glowT = (() => { const c = document.createElement("canvas"); c.width = c.height = 64; const x = c.getContext("2d"), g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
      g.addColorStop(0, "rgba(255,190,90,1)"); g.addColorStop(.3, "rgba(255,170,70,.35)"); g.addColorStop(1, "rgba(255,170,70,0)"); x.fillStyle = g; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();

    api.current = { setOrbit(o) {
      orbitGroup.children.slice().forEach((c) => { c.geometry?.dispose(); c.material?.dispose(); orbitGroup.remove(c); });
      cur = null; if (!o?.points?.length) return;
      const raw = o.points.map((p) => [Number(p.position_km?.x) || 0, Number(p.position_km?.y) || 0, Number(p.position_km?.z) || 0]);
      const m = Math.max(...raw.map((v) => Math.hypot(...v)), 1), k = 2.05 / m;
      const pts = raw.map(([x, y, z]) => new THREE.Vector3(x * k, z * k, -y * k));
      const geo = new THREE.BufferGeometry().setFromPoints(pts); geo.setAttribute("color", new THREE.BufferAttribute(new Float32Array(pts.length * 3), 3));
      const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true })); orbitGroup.add(line);
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.045, 20, 20), new THREE.MeshBasicMaterial({ color: 0xfff1d6 })); orbitGroup.add(dot);
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowT, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); glow.scale.setScalar(0.6); dot.add(glow);
      cur = { pts, geo, dot, glow, t0: new Date(o.points[0].time).getTime(), step: (new Date(o.points[1]?.time || o.points[0].time) - new Date(o.points[0].time)) || 60000 };
    } };
    api.current.setOrbit(orbit);

    const resize = () => { const w = Math.max(mount.clientWidth, 1), h = Math.max(mount.clientHeight, 1);
      renderer.setSize(w, h, false); camera.aspect = w / h; const o = w > 1000 ? offsetRef.current : 0;
      camera.setViewOffset(w, h, o, 0, w, h); zoom = Math.min(22, Math.max(7.4, 1.95 / (0.364 * (w / h)))); };
    resize(); const ro = new ResizeObserver(resize); ro.observe(mount); window.addEventListener("resize", resize);
    const el = renderer.domElement;
    const down = (e) => { drag = true; lx = e.clientX; ly = e.clientY; el.setPointerCapture?.(e.pointerId); };
    const move = (e) => { if (!drag) return; root.rotation.y += (e.clientX - lx) * 0.006; root.rotation.x = THREE.MathUtils.clamp(root.rotation.x + (e.clientY - ly) * 0.006, -1.3, 1.3); lx = e.clientX; ly = e.clientY; };
    const up = () => { drag = false; idle = performance.now(); };
    const wheel = (e) => { if (!e.ctrlKey && !e.metaKey) return; e.preventDefault(); zoom = THREE.MathUtils.clamp(zoom + e.deltaY * 0.01, 4.5, 12); };
    el.addEventListener("pointerdown", down); el.addEventListener("pointermove", move); el.addEventListener("pointerup", up); el.addEventListener("pointerleave", up); el.addEventListener("wheel", wheel, { passive: false });

    const clock = new THREE.Clock(), base = new THREE.Color(0xffc46b), dim = new THREE.Color(0x1d2a3d), tmp = new THREE.Color();
    camera.position.set(0, 0.5, zoom);
    const tick = () => {
      if (disposed) return; frame = requestAnimationFrame(tick);
      const t = clock.getElapsedTime(); if (!drag && performance.now() - idle > 1500) root.rotation.y += 0.0012;
      let now = Date.now();
      if (cur) {
        const n = cur.pts.length, f = (t * 6) % n, i = Math.floor(f);
        cur.dot.position.lerpVectors(cur.pts[i], cur.pts[(i + 1) % n], f - i); cur.glow.material.opacity = 0.8 + Math.sin(t * 4) * 0.2;
        const col = cur.geo.attributes.color; for (let j = 0; j < n; j++) { tmp.copy(dim).lerp(base, Math.pow(1 - ((i - j + n) % n) / n, 3)); col.setXYZ(j, tmp.r, tmp.g, tmp.b); } col.needsUpdate = true;
        now = cur.t0 + (f * cur.step);
      }
      earth.rotation.y = gmst(now); clouds.rotation.y = earth.rotation.y * 1.0 + t * 0.004; earth.updateMatrix(); earthMat.uniforms.uRot.value.setFromMatrix4(earth.matrix);
      camera.position.z += (zoom - camera.position.z) * 0.08; camera.position.y = 0.5; camera.lookAt(0, 0, 0); camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };
    tick();
    return () => { disposed = true; cancelAnimationFrame(frame); ro.disconnect(); window.removeEventListener("resize", resize); ["pointerdown","pointermove","pointerup","pointerleave","wheel"].forEach((n) => el.removeEventListener(n, { pointerdown: down, pointermove: move, pointerup: up, pointerleave: up, wheel }[n])); renderer.dispose(); el.remove(); api.current = null; };
  }, []);

  useEffect(() => { api.current?.setOrbit(orbit); }, [orbit]);
  useEffect(() => { window.dispatchEvent(new Event("resize")); }, [offset]);
  return <div ref={mountRef} className="globe" role="img" aria-label="Interactive 3D Earth with the selected satellite's orbit" />;
}
