import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingSphere = ({ position, color, scale = 1 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 32, 32]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
          metalness={0.1}
        />
      </Sphere>
    </Float>
  );
};

const ParticleField = () => {
  const pointsRef = useRef();

  useEffect(() => {
    if (!pointsRef.current) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(1000 * 3);
      
      for (let i = 0; i < 1000; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const material = new THREE.PointsMaterial({
        color: 0x8B5CF6,
        size: 0.1,
        transparent: true,
        opacity: 0.6
      });
      
      const points = new THREE.Points(geometry, material);
      pointsRef.current = points;
    }
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return pointsRef.current ? <primitive object={pointsRef.current} /> : null;
};

const Scene3D = () => {
  return (
    <div className="scene-3d">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8B5CF6" />
        
        <FloatingSphere position={[2, 1, 0]} color="#8B5CF6" scale={0.8} />
        <FloatingSphere position={[-2, -1, 0]} color="#A855F7" scale={0.6} />
        <FloatingSphere position={[0, 2, -2]} color="#C084FC" scale={0.4} />
        
        <ParticleField />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
