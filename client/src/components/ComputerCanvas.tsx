import { Canvas, useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";
import { Euler, Mesh, MeshStandardMaterial } from "three";

export default function ComputerCanvas(): JSX.Element {
  return (
    <Canvas>
      {/* create an ambient light */}
      <ambientLight />
      {/* create a pointlight and give it a position */}
      <pointLight position={[10, 10, 10]} />
      {/* create a mesh with auto rotation */}
      <RotatingMesh rotation={new Euler(10, 15, 6)} />
    </Canvas>
  );
}

interface RotatingMeshProps {
  rotation: Euler;
}

function RotatingMesh(props: RotatingMeshProps): JSX.Element {
  const meshRef = useRef<Mesh>(null);
  const [rotationSpeed] = useState(0.01); // adjust the rotation speed here

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed;
      meshRef.current.rotation.z += rotationSpeed;

      // Change the color of the mesh dynamically
      const hue = (meshRef.current.rotation.y * 180) / Math.PI;
      const color = `hsl(${hue}, 100%, 50%)`;
      (meshRef.current.material as MeshStandardMaterial).color.set(color);
    }
  });

  return (
    <mesh ref={meshRef} {...props}>
      {/* create a box geometry of a size of 2 on all axes */}
      <boxGeometry args={[2, 2, 2]} />
      {/* give the mesh the standard pbr material */}
      <meshStandardMaterial />
    </mesh>
  );
}
