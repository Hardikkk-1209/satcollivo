import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const EARTH_RADIUS_KM = 6371;

export default function Orbit3D({ orbit }) {
  const host = useRef(null);

  useEffect(() => {
    if (!host.current || !orbit?.points?.length) return undefined;

    const el = host.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x05090e);

    const camera = new THREE.PerspectiveCamera(42, 1, 0.01, 100);
    camera.position.set(2.9, 2.2, 3.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(el.clientWidth || 600, el.clientHeight || 330, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    el.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 1.5;
    controls.maxDistance = 8;
    controls.target.set(0, 0, 0);

    scene.add(new THREE.AmbientLight(0x8aa9b8, 1.1));
    const sun = new THREE.DirectionalLight(0xffffff, 2.0);
    sun.position.set(4, 3, 5);
    scene.add(sun);

    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 32),
      new THREE.MeshPhongMaterial({ color: 0x0b4058, emissive: 0x03121c, shininess: 18, specular: 0x6edfff })
    );
    scene.add(earth);

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.055, 48, 24),
      new THREE.MeshBasicMaterial({ color: 0x38c7ee, transparent: true, opacity: 0.08, side: THREE.BackSide })
    );
    scene.add(atmosphere);

    const points = orbit.points.map(p => new THREE.Vector3(
      p.x / EARTH_RADIUS_KM,
      p.z / EARTH_RADIUS_KM,
      -p.y / EARTH_RADIUS_KM
    ));
    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const orbitLine = new THREE.Line(
      orbitGeometry,
      new THREE.LineBasicMaterial({ color: 0x63e5ff, transparent: true, opacity: 0.9 })
    );
    scene.add(orbitLine);

    const startRing = new THREE.Mesh(
      new THREE.RingGeometry(1.08, 1.085, 64),
      new THREE.MeshBasicMaterial({ color: 0x2d6173, transparent: true, opacity: 0.65, side: THREE.DoubleSide })
    );
    startRing.rotation.x = Math.PI / 2;
    scene.add(startRing);

    const last = points[points.length - 1];
    const satellite = new THREE.Mesh(
      new THREE.SphereGeometry(0.035, 16, 12),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    satellite.position.copy(last);
    scene.add(satellite);

    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.085, 16, 12),
      new THREE.MeshBasicMaterial({ color: 0x61e8ff, transparent: true, opacity: 0.18 })
    );
    glow.position.copy(last);
    scene.add(glow);

    const stars = new THREE.BufferGeometry();
    const starPositions = new Float32Array(900);
    for (let i = 0; i < starPositions.length; i += 3) {
      const r = 7 + Math.random() * 4;
      const a = Math.random() * Math.PI * 2;
      const b = Math.acos(2 * Math.random() - 1);
      starPositions[i] = r * Math.sin(b) * Math.cos(a);
      starPositions[i + 1] = r * Math.sin(b) * Math.sin(a);
      starPositions[i + 2] = r * Math.cos(b);
    }
    stars.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    scene.add(new THREE.Points(stars, new THREE.PointsMaterial({ color: 0x6f8794, size: 0.018, sizeAttenuation: true })));

    const resize = () => {
      const width = el.clientWidth || 600;
      const height = el.clientHeight || 330;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(el);

    let frame;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      earth.rotation.y += 0.0008;
      atmosphere.rotation.y += 0.0005;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      controls.dispose();
      orbitGeometry.dispose();
      orbitLine.material.dispose();
      earth.geometry.dispose();
      earth.material.dispose();
      atmosphere.geometry.dispose();
      atmosphere.material.dispose();
      startRing.geometry.dispose();
      startRing.material.dispose();
      satellite.geometry.dispose();
      satellite.material.dispose();
      glow.geometry.dispose();
      glow.material.dispose();
      stars.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [orbit]);

  if (!orbit) return <div className="orbit-empty"><span>Select a satellite to propagate its orbit.</span></div>;
  return <div className="orbit-3d" ref={host}><div className="orbit-overlay"><span>3D SGP4 / TEME</span><span>DRAG TO ROTATE · SCROLL TO ZOOM</span></div></div>;
}
