import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Torus, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Interactive Focal 3D Core
const InteractiveSculpture = ({ isHovered, setIsHovered }) => {
  const meshRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Smooth responsive rotation following pointer
    targetRotation.current.x = THREE.MathUtils.lerp(
      targetRotation.current.x,
      state.pointer.y * 0.4,
      0.05
    );
    targetRotation.current.y = THREE.MathUtils.lerp(
      targetRotation.current.y,
      state.pointer.x * 0.6,
      0.05
    );

    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2 + targetRotation.current.x;
      meshRef.current.rotation.y = t * 0.3 + targetRotation.current.y;
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.x = t * 0.4 + targetRotation.current.x * 1.5;
      ringRef1.current.rotation.y = t * 0.2;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.x = -t * 0.3;
      ringRef2.current.rotation.z = t * 0.35 + targetRotation.current.y * 1.5;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
      <group
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
      >
        {/* Core Architectural Sphere */}
        <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={isHovered ? 1.08 : 1}>
          <MeshDistortMaterial
            color="#131720"
            emissive="#1F2430"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.85}
            distort={0.35}
            speed={2}
            wireframe={false}
          />
        </Sphere>

        {/* Outer Accent Torus Ring 1 (Violet) */}
        <Torus ref={ringRef1} args={[2.2, 0.04, 32, 100]}>
          <meshStandardMaterial
            color="#8B5CF6"
            emissive="#8B5CF6"
            emissiveIntensity={2}
            roughness={0.2}
            metalness={0.9}
          />
        </Torus>

        {/* Outer Accent Torus Ring 2 (Architectural Lime #38BDF8) */}
        <Torus ref={ringRef2} args={[2.7, 0.03, 32, 100]} rotation={[Math.PI / 3, 0, 0]}>
          <meshStandardMaterial
            color="#38BDF8"
            emissive="#38BDF8"
            emissiveIntensity={2.5}
            roughness={0.1}
            metalness={0.9}
          />
        </Torus>

        {/* Inner Glowing Core */}
        <Sphere args={[0.7, 32, 32]}>
          <meshBasicMaterial color="#69C9FF" wireframe />
        </Sphere>
      </group>
    </Float>
  );
};

// WebGL Fallback if device has no WebGL support
const CanvasFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative w-64 h-64 rounded-full border-2 border-brand-accent/30 animate-spin-slow flex items-center justify-center">
      <div className="w-48 h-48 rounded-full border border-brand-lime/40 animate-pulse flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-brand-accent to-brand-lime opacity-30 blur-xl" />
      </div>
    </div>
  </div>
);

export const HeroScene = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full h-[400px] sm:h-[480px] lg:h-[550px] relative select-none cursor-grab active:cursor-grabbing">
      <Suspense fallback={<CanvasFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6.5], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          dpr={[1, 2]}
        >
          {/* Subtle Ambient & Directional Lighting */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#FFFFFF" />
          <pointLight position={[-8, -8, -5]} intensity={2.5} color="#8B5CF6" />
          <pointLight position={[8, -5, 5]} intensity={3} color="#38BDF8" />

          {/* Core Visual */}
          <InteractiveSculpture isHovered={isHovered} setIsHovered={setIsHovered} />

          {/* Ambient Cyber Particles */}
          <Sparkles
            count={70}
            scale={8}
            size={2.5}
            speed={0.4}
            opacity={0.6}
            color="#8B5CF6"
          />
          <Sparkles
            count={40}
            scale={7}
            size={3}
            speed={0.6}
            opacity={0.8}
            color="#38BDF8"
          />
        </Canvas>
      </Suspense>

      {/* Interactive Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-mono text-dark-gray/70 flex items-center gap-2 pointer-events-none bg-dark-surface/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
        <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
        Interactive 3D Core • Drag to inspect
      </div>
    </div>
  );
};
