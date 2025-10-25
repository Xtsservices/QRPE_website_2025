import { useRef } from 'react';
import { useFrame, type MeshProps, type PointsProps } from '@react-three/fiber';
import { Sphere, Box, Torus, MeshDistortMaterial } from '@react-three/drei';

export const FloatingShapes = () => {
  const sphere1Ref = useRef<any>(null);
  const sphere2Ref = useRef<any>(null);
  const torusRef = useRef<any>(null);
  const boxRef = useRef<any>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (sphere1Ref.current) {
      sphere1Ref.current.rotation.x = t * 0.3;
      sphere1Ref.current.rotation.y = t * 0.2;
      sphere1Ref.current.position.y = Math.sin(t * 0.5) * 0.5;
    }
    
    if (sphere2Ref.current) {
      sphere2Ref.current.rotation.x = -t * 0.2;
      sphere2Ref.current.rotation.z = t * 0.3;
      sphere2Ref.current.position.y = Math.cos(t * 0.4) * 0.3;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.4;
      torusRef.current.rotation.y = t * 0.3;
      torusRef.current.position.x = Math.sin(t * 0.3) * 0.5;
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = t * 0.2;
      boxRef.current.rotation.y = t * 0.3;
      boxRef.current.position.x = Math.cos(t * 0.4) * 0.4;
    }
  });

  return (
    <group>
      {/* Distorted Sphere 1 */}
      <Sphere ref={sphere1Ref} args={[1, 64, 64]} position={[-3, 0, -2]}>
        <MeshDistortMaterial
          color="#0270ca"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.9}
          emissive="#0270ca"
          emissiveIntensity={0.5}
        />
      </Sphere>

      {/* Distorted Sphere 2 */}
      <Sphere ref={sphere2Ref} args={[0.7, 64, 64]} position={[3, 1, -3]}>
        <MeshDistortMaterial
          color="#0d3054"
          attach="material"
          distort={0.5}
          speed={1.5}
          roughness={0.3}
          metalness={0.8}
          emissive="#0d3054"
          emissiveIntensity={0.4}
        />
      </Sphere>

      {/* Torus */}
      <Torus ref={torusRef} args={[1, 0.3, 32, 100]} position={[2, -1, -1]}>
        <meshStandardMaterial
          color="#0270ca"
          metalness={0.9}
          roughness={0.1}
          emissive="#0270ca"
          emissiveIntensity={0.6}
        />
      </Torus>

      {/* Box */}
      <Box ref={boxRef} args={[1, 1, 1]} position={[-2, -1, -1]}>
        <meshStandardMaterial
          color="#0d3054"
          metalness={0.8}
          roughness={0.2}
          wireframe={false}
          emissive="#0d3054"
          emissiveIntensity={0.3}
        />
      </Box>

      {/* Ambient Light */}
      <ambientLight intensity={0.6} />
      
      {/* Point Lights */}
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#0270ca" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#0270ca" />
      <pointLight position={[5, 0, 5]} intensity={1} color="#0d3054" />
      <pointLight position={[-5, 5, -5]} intensity={0.7} color="#0d3054" />
      
      {/* Directional Light */}
      <directionalLight position={[5, 5, 5]} intensity={0.7} color="#0270ca" />
    </group>
  );
};

export const ParticleField = () => {
  const particlesRef = useRef<any>(null);
  const particleCount = 1000;

  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#0270ca"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

export const WaveGeometry = () => {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      const geometry = meshRef.current.geometry;
      const positions = geometry.attributes.position;

      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const wave1 = Math.sin(x + time) * 0.1;
        const wave2 = Math.sin(y + time * 0.5) * 0.1;
        positions.setZ(i, wave1 + wave2);
      }

      positions.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, -5]}>
      <planeGeometry args={[10, 10, 50, 50]} />
      <meshStandardMaterial
        color="#0d3054"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};
