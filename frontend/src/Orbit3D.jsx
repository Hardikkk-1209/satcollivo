import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Orbit3D({ orbit }) {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x07111f);

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 2.4, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffffff, 2.5);
    key.position.set(4, 5, 6);
    scene.add(key);

    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(1.65, 48, 48),
      new THREE.MeshStandardMaterial({
        color: 0x163b58,
        roughness: 0.8,
        metalness: 0.05,
      })
    );
    scene.add(earth);

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.7, 48, 48),
      new THREE.MeshBasicMaterial({
        color: 0x1f91a8,
        transparent: true,
        opacity: 0.08,
        side: THREE.BackSide,
      })
    );
    scene.add(atmosphere);

    let orbitLine;
    let satellite;

    if (orbit?.points?.length) {
      const raw = orbit.points.map((point) => [
        point.position_km.x,
        point.position_km.y,
        point.position_km.z,
      ]);

      const maxRadius = Math.max(...raw.map(([x, y, z]) => Math.sqrt(x * x + y * y + z * z)), 1);
      const scale = 2.45 / maxRadius;

      const points = raw.map(([x, y, z]) => new THREE.Vector3(x * scale, z * scale, -y * scale));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: 0x43d6c5 });
      orbitLine = new THREE.Line(geometry, material);
      scene.add(orbitLine);

      const markerGeometry = new THREE.SphereGeometry(0.075, 16, 16);
      const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xffc857 });
      satellite = new THREE.Mesh(markerGeometry, markerMaterial);
      satellite.position.copy(points[0]);
      scene.add(satellite);
    }

    const resize = () => {
      const width = mount.clientWidth || 640;
      const height = mount.clientHeight || 360;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    let frame;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      earth.rotation.y += 0.0015;
      if (orbitLine) orbitLine.rotation.y += 0.0008;
      if (satellite && orbitLine) {
        satellite.position.set(0, 0, 0);
        satellite.position.applyMatrix4(orbitLine.matrixWorld);
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      orbitLine?.geometry.dispose();
      orbitLine?.material.dispose();
      satellite?.geometry.dispose();
      satellite?.material.dispose();
      earth.geometry.dispose();
      earth.material.dispose();
      atmosphere.geometry.dispose();
      atmosphere.material.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, [orbit]);

  if (!orbit) {
    return <div className="orbit-empty">Select a satellite to load its propagated orbit.</div>;
  }

  return <div ref={mountRef} className="orbit-viewer" aria-label="3D satellite orbit viewer" />;
}
