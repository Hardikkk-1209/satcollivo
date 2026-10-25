import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Orbit3D({ orbit, theme = "dark" }) {
  const mountRef = useRef(null);
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !orbit?.points?.length) return;
    let disposed = false, frame = 0;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(theme === "light" ? 0xf1f6f9 : 0x07111f);
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.15, 6.8);
    camera.lookAt(0, 0, 0);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);
    scene.add(new THREE.AmbientLight(0xffffff, 1.7));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(4, 5, 6); scene.add(key);
    const earth = new THREE.Mesh(new THREE.SphereGeometry(1.28, 64, 64), new THREE.MeshStandardMaterial({
      color: theme === "light" ? 0x397ba5 : 0x163b58, roughness: 0.78, metalness: 0.04
    }));
    scene.add(earth);
    const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(1.33, 48, 48), new THREE.MeshBasicMaterial({
      color: 0x36b9d0, transparent: true, opacity: 0.13, side: THREE.BackSide
    }));
    scene.add(atmosphere);
    const raw = orbit.points.map(p => [Number(p.position_km?.x)||0, Number(p.position_km?.y)||0, Number(p.position_km?.z)||0]);
    const maxRadius = Math.max(...raw.map(([x,y,z]) => Math.hypot(x,y,z)), 1);
    const points = raw.map(([x,y,z]) => new THREE.Vector3(x*2.02/maxRadius, z*2.02/maxRadius, -y*2.02/maxRadius));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const orbitLine = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: theme === "light" ? 0x087e8b : 0x43d6c5 }));
    scene.add(orbitLine);
    const satellite = new THREE.Mesh(new THREE.SphereGeometry(0.065, 20, 20), new THREE.MeshBasicMaterial({color:0xffc857}));
    scene.add(satellite);
    const resize = () => {
      if (disposed) return;
      const width = Math.max(mount.clientWidth,1), height = Math.max(mount.clientHeight,1);
      camera.aspect = width/height;
      camera.position.z = width/height < 1.25 ? 7.5 : 6.8;
      camera.lookAt(0,0,0); camera.updateProjectionMatrix();
      renderer.setSize(width,height,false);
    };
    resize();
    const observer = new ResizeObserver(resize); observer.observe(mount);
    const clock = new THREE.Clock();
    const animate = () => {
      if (disposed) return;
      frame = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      earth.rotation.y = elapsed*0.12;
      atmosphere.rotation.y = -elapsed*0.035;
      orbitLine.rotation.y = elapsed*0.075;
      const index = Math.floor((elapsed*10)%points.length);
      satellite.position.copy(points[index]).applyAxisAngle(new THREE.Vector3(0,1,0),orbitLine.rotation.y);
      renderer.render(scene,camera);
    };
    animate();
    return () => {
      disposed=true; cancelAnimationFrame(frame); observer.disconnect();
      geometry.dispose(); orbitLine.material.dispose(); satellite.geometry.dispose(); satellite.material.dispose();
      earth.geometry.dispose(); earth.material.dispose(); atmosphere.geometry.dispose(); atmosphere.material.dispose();
      renderer.dispose(); renderer.domElement.remove();
    };
  }, [orbit,theme]);
  if (!orbit?.points?.length) return <div className="orbit-empty">Select a satellite to load its propagated orbit.</div>;
  return <div ref={mountRef} className="orbit-viewer" aria-label="Rotating 3D Earth and satellite orbit" role="img" />;
}
