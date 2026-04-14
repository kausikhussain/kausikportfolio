"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

function InteractiveGeometry({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base slow rotation
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
      
      // Interactive parallax based on mouse
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        (state.pointer.y * Math.PI) / 4,
        0.05
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        (state.pointer.x * Math.PI) / 4,
        0.05
      );
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]}>
      <icosahedronGeometry args={[3, 1]} />
      <meshBasicMaterial 
        color={color} 
        wireframe 
        transparent 
        opacity={0.15} 
      />
    </mesh>
  );
}

function ParticleField({ color }: { color: string }) {
  const ref = useRef<THREE.Points>(null);
  const { mouse } = useThree((state) => ({ mouse: state.pointer }));
  
  const particleCount = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, [particleCount]);

  useFrame((state, delta) => {
    if (ref.current) {
      // Cosmic drift
      ref.current.rotation.x -= delta * 0.05;
      ref.current.rotation.y -= delta * 0.03;
      
      // Follow mouse slightly
      ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, mouse.x * 2, 0.02);
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, mouse.y * 2, 0.02);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function HeroScene() {
  const { theme } = useTheme();
  const activeColor = theme === "light" ? "#3b82f6" : "#8b5cf6"; // Blueish light mode, purple dark mode

  return (
    <div className="absolute inset-0 -z-10 bg-transparent">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
        <fog attach="fog" args={["#000", 3, 15]} />
        <ambientLight intensity={0.5} />
        
        {/* Core Geometry */}
        <InteractiveGeometry color={activeColor} />
        
        {/* Mouse interactive space dust */}
        <ParticleField color={activeColor} />
      </Canvas>
    </div>
  );
}
