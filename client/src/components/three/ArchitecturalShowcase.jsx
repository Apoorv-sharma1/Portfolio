import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

// 3D Signboard inspired directly by the CROS architectural signage reference
const ArchitecturalSign = ({ position, title, subtitle, destinationId, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        hovered ? position[1] + 0.12 : position[1],
        0.1
      );
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      onClick={() => onClick && onClick(destinationId)}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      {/* Black Architectural Mounting Bracket */}
      <mesh position={[-1.35, 0, 0]}>
        <boxGeometry args={[0.15, 1.3, 0.45]} />
        <meshStandardMaterial color="#17191D" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Mounting Stems */}
      <mesh position={[-1.2, 0.35, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.2, 16]} />
        <meshStandardMaterial color="#272B31" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[-1.2, -0.35, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.2, 16]} />
        <meshStandardMaterial color="#272B31" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Matte White Sign Panel */}
      <mesh position={[-0.2, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 1.4, 0.35]} />
        <meshStandardMaterial
          color="#F5F6F4"
          roughness={0.4}
          metalness={0.05}
        />
      </mesh>

      {/* Vibrant Lime Green End Block (#78F52B) */}
      <mesh position={[0.85, 0, 0]} castShadow>
        <boxGeometry args={[0.45, 1.4, 0.36]} />
        <meshStandardMaterial
          color={hovered ? '#8FF84E' : '#78F52B'}
          emissive="#78F52B"
          emissiveIntensity={hovered ? 0.6 : 0.25}
          roughness={0.2}
          metalness={0.2}
        />
      </mesh>

      {/* Signage 3D Typography */}
      <Text
        position={[-0.2, 0.15, 0.19]}
        fontSize={0.28}
        color="#17191D"
        font="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.05}
      >
        {title}
      </Text>

      <Text
        position={[-0.2, -0.22, 0.19]}
        fontSize={0.12}
        color="#92979D"
        anchorX="center"
        anchorY="middle"
      >
        {subtitle}
      </Text>

      {/* Directional Arrow Symbol on Green Block */}
      <Text
        position={[0.85, 0, 0.2]}
        fontSize={0.35}
        color="#17191D"
        anchorX="center"
        anchorY="middle"
      >
        ↘
      </Text>
    </group>
  );
};

export const ArchitecturalShowcase = ({ onNavigate }) => {
  const handleSignClick = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="w-full h-[420px] sm:h-[480px] rounded-2xl overflow-hidden glass-panel relative border border-white/10 my-8">
      {/* Visual Overlay Header */}
      <div className="absolute top-4 left-6 z-10 flex items-center justify-between right-6 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
          <span className="text-xs font-mono tracking-wider uppercase text-neutral-400">
            3D Architectural Wayfinding System
          </span>
        </div>
        <span className="text-xs font-mono text-dark-gray/60 hidden sm:inline-block">
          Interactive • Click any sign to navigate
        </span>
      </div>

      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center text-sm font-mono text-dark-gray">
          Loading 3D Architectural Scene...
        </div>
      }>
        <Canvas
          shadows
          camera={{ position: [0, 0.2, 5.2], fov: 42 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight
            position={[5, 8, 5]}
            intensity={2}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-bias={-0.0001}
          />
          <pointLight position={[-4, 2, 2]} intensity={1.5} color="#8B5CF6" />
          <pointLight position={[4, -2, 2]} intensity={1.5} color="#78F52B" />

          {/* Concrete Backdrop Wall */}
          <mesh position={[0, 0, -0.6]} receiveShadow>
            <planeGeometry args={[16, 10]} />
            <meshStandardMaterial
              color="#1C212B"
              roughness={0.9}
              metalness={0.1}
            />
          </mesh>

          {/* Interactive Signs */}
          <ArchitecturalSign
            position={[-1.7, 0.7, 0]}
            title="PROJECTS"
            subtitle="MERN & AI EXPOS"
            destinationId="projects"
            onClick={handleSignClick}
          />

          <ArchitecturalSign
            position={[1.7, 0.7, 0]}
            title="SKILLS"
            subtitle="TECH MATRIX"
            destinationId="skills"
            onClick={handleSignClick}
          />

          <ArchitecturalSign
            position={[-1.7, -0.9, 0]}
            title="ABOUT"
            subtitle="BACKGROUND"
            destinationId="about"
            onClick={handleSignClick}
          />

          <ArchitecturalSign
            position={[1.7, -0.9, 0]}
            title="CONTACT"
            subtitle="COLLABORATE"
            destinationId="contact"
            onClick={handleSignClick}
          />

          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.3}
            maxAzimuthAngle={Math.PI / 6}
            minAzimuthAngle={-Math.PI / 6}
            dampingFactor={0.05}
          />
        </Canvas>
      </Suspense>

      {/* Floating Instructions */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[11px] font-mono text-dark-gray/70 bg-dark-surface/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/5 pointer-events-none">
        Drag to rotate scene • Click signboards to scroll
      </div>
    </div>
  );
};
