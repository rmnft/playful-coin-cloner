import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const TokenPreview3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const coinRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 300);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create coin geometry
    const geometry = new THREE.CylinderGeometry(2, 2, 0.2, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0xff3333,
      specular: 0xffffff,
      shininess: 100,
      metalness: 1,
      roughness: 0.2,
    });

    const coin = new THREE.Mesh(geometry, material);
    scene.add(coin);
    coinRef.current = coin;

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff0000, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xff0000, 1);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      if (!coinRef.current) return;

      coinRef.current.rotation.y += 0.01;
      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-[300px] h-[300px] mx-auto relative"
      style={{
        perspective: '1000px',
        transform: 'rotateX(20deg)',
      }}
    />
  );
};

export default TokenPreview3D;
