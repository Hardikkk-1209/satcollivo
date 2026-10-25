import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const EARTH_KM = 6371;

export default function Orbit3D({ orbit, theme = "dark" }) {
  const mountRef = useRef(null);
  const stats = useMemo(() => {
    const pts = orbit?.points;
    if (!pts?.length) return null;
    const r = pts.map((p) => Math.hypot(p.position_km?.x || 0, p.position_km?.y || 0, p.position_km?.z || 0));
    const min = Math.min(...r), max = Math.max(...r);
    return { perigee: Math.round(min - EARTH_KM), apogee: Math.round(max - EARTH_KM) };
  }, [orbit]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !orbit?.points?.length) return;
    const light = theme === "light";
    let disposed = false, frame = 0, dragging = false, lastX = 0, lastY = 0, idleSince = 0;
    const disposables = [];
    const track = (o) => (disposables.push(o), o);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(light ? 0xe9f1f6 : 0x060e18);
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 200);
    let zoom = 6.8;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, light ? 1.5 : 0.9));
    const sun = new THREE.DirectionalLight(0xfff2dd, light ? 2 : 3.2);
    sun.position.set(5, 3, 6); scene.add(sun);

    // starfield (dark only)
    if (!light) {
      const n = 1400, pos = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        const v = new THREE.Vector3().randomDirection().multiplyScalar(40 + Math.random() * 40);
        pos.set([v.x, v.y, v.z], i * 3);
      }
      const g = track(new THREE.BufferGeometry()); g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const stars = new THREE.Points(g, track(new THREE.PointsMaterial({ color: 0xbfe6ff, size: 0.11, sizeAttenuation: true, transparent: true, opacity: 0.8 })));
      scene.add(stars);
    }

    const root = new THREE.Group(); scene.add(root);
    root.rotation.x = 0.35;

    const earthGeo = track(new THREE.SphereGeometry(1.28, 72, 72));
    const earth = new THREE.Mesh(earthGeo, track(new THREE.MeshStandardMaterial({
      color: light ? 0x3d86b0 : 0x14456b, roughness: 0.7, metalness: 0.08, emissive: light ? 0x000000 : 0x061a2c, emissiveIntensity: 0.6
    })));
    root.add(earth);
    // lat/long wireframe overlay for a "tracking globe" feel
    const grid = new THREE.Mesh(track(new THREE.SphereGeometry(1.285, 24, 16)), track(new THREE.MeshBasicMaterial({
      color: light ? 0xffffff : 0x4fd8ee, wireframe: true, transparent: true, opacity: light ? 0.28 : 0.16
    })));
    earth.add(grid);

    // fresnel atmosphere
    const atmo = new THREE.Mesh(track(new THREE.SphereGeometry(1.5, 64, 64)), track(new THREE.ShaderMaterial({
      transparent: true, side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false,
      uniforms: { c: { value: new THREE.Color(light ? 0x2c9bc4 : 0x4fd8ee) } },
      vertexShader: "varying vec3 n;void main(){n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
      fragmentShader: "varying vec3 n;uniform vec3 c;void main(){float i=pow(0.62-dot(n,vec3(0.,0.,1.)),3.);gl_FragColor=vec4(c,1.)*i*" + (light ? "0.9" : "1.6") + ";}"
    })));
    scene.add(atmo);

    // orbit path with fading colour
    const raw = orbit.points.map((p) => [Number(p.position_km?.x) || 0, Number(p.position_km?.y) || 0, Number(p.position_km?.z) || 0]);
    const maxR = Math.max(...raw.map(([x, y, z]) => Math.hypot(x, y, z)), 1);
    const points = raw.map(([x, y, z]) => new THREE.Vector3(x * 2.02 / maxR, z * 2.02 / maxR, -y * 2.02 / maxR));
    const lineGeo = track(new THREE.BufferGeometry().setFromPoints(points));
    const colors = new Float32Array(points.length * 3);
    lineGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const orbitLine = new THREE.Line(lineGeo, track(new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.95 })));
    root.add(orbitLine);
    const base = new THREE.Color(light ? 0x087e8b : 0x43d6c5), dim = new THREE.Color(light ? 0xa9cdd6 : 0x153a48);

    // satellite + glow
    const sat = new THREE.Group();
    sat.add(new THREE.Mesh(track(new THREE.SphereGeometry(0.055, 20, 20)), track(new THREE.MeshBasicMaterial({ color: 0xffc857 }))));
    const glowTex = (() => {
      const c = document.createElement("canvas"); c.width = c.height = 64;
      const x = c.getContext("2d"), g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
      g.addColorStop(0, "rgba(255,200,87,.95)"); g.addColorStop(.35, "rgba(255,200,87,.3)"); g.addColorStop(1, "rgba(255,200,87,0)");
      x.fillStyle = g; x.fillRect(0, 0, 64, 64); return track(new THREE.CanvasTexture(c));
    })();
    const glow = new THREE.Sprite(track(new THREE.SpriteMaterial({ map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })));
    glow.scale.setScalar(0.55); sat.add(glow);
    root.add(sat);

    const resize = () => {
      if (disposed) return;
      const w = Math.max(mount.clientWidth, 1), h = Math.max(mount.clientHeight, 1);
      camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h, false);
    };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(mount);

    const el = renderer.domElement;
    const down = (e) => { dragging = true; lastX = e.clientX; lastY = e.clientY; el.setPointerCapture?.(e.pointerId); };
    const move = (e) => {
      if (!dragging) return;
      root.rotation.y += (e.clientX - lastX) * 0.007;
      root.rotation.x = THREE.MathUtils.clamp(root.rotation.x + (e.clientY - lastY) * 0.007, -1.3, 1.3);
      lastX = e.clientX; lastY = e.clientY;
    };
    const up = () => { dragging = false; idleSince = performance.now(); };
    const wheel = (e) => { e.preventDefault(); zoom = THREE.MathUtils.clamp(zoom + e.deltaY * 0.004, 3.8, 11); };
    el.addEventListener("pointerdown", down); el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up); el.addEventListener("pointerleave", up);
    el.addEventListener("wheel", wheel, { passive: false });

    const clock = new THREE.Clock(), N = points.length;
    const animate = () => {
      if (disposed) return;
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      if (!dragging && performance.now() - idleSince > 1500) root.rotation.y += 0.0016;
      earth.rotation.y = t * 0.08;
      const f = (t * 8) % N, i = Math.floor(f);
      sat.position.lerpVectors(points[i], points[(i + 1) % N], f - i);
      glow.material.opacity = 0.75 + Math.sin(t * 4) * 0.25;
      for (let k = 0; k < N; k++) { // bright trail behind the satellite
        const age = ((i - k + N) % N) / N, c = dim.clone().lerp(base, Math.pow(1 - age, 2.2));
        colors.set([c.r, c.g, c.b], k * 3);
      }
      lineGeo.attributes.color.needsUpdate = true;
      camera.position.z += (zoom - camera.position.z) * 0.08;
      camera.position.y = 0.4; camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    camera.position.set(0, 0.4, zoom);
    animate();

    return () => {
      disposed = true; cancelAnimationFrame(frame); ro.disconnect();
      el.removeEventListener("pointerdown", down); el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up); el.removeEventListener("pointerleave", up);
      el.removeEventListener("wheel", wheel);
      disposables.forEach((d) => d.dispose?.());
      renderer.dispose(); el.remove();
    };
  }, [orbit, theme]);

  if (!orbit?.points?.length) return <div className="orbit-empty">Select a satellite to load its propagated orbit.</div>;
  return (
    <div ref={mountRef} className="orbit-viewer" aria-label="Interactive 3D Earth and satellite orbit" role="img">
      <div className="orbit-hud">
        <span>{orbit.name}</span>
        {stats && <span>PERIGEE <b>{stats.perigee} km</b></span>}
        {stats && <span>APOGEE <b>{stats.apogee} km</b></span>}
      </div>
      <div className="orbit-hint">DRAG TO ROTATE · SCROLL TO ZOOM</div>
    </div>
  );
}
