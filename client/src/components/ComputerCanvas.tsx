import React, { useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Euler } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "@react-three/drei";

const MODEL_PATH = "/radio_shack_trs-80_model_1/scene.gltf";
const initialRotation = new Euler(6.3, 16, 15.65);

const Model = ({ rotation }: RotatingMeshProps): JSX.Element => {
  const { scene } = useLoader(GLTFLoader, MODEL_PATH);

  const adjustedRotation = useMemo(
    () => new Euler(rotation.x + Math.PI, rotation.y, rotation.z),
    [rotation]
  );

  return (
    <group rotation={adjustedRotation}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive object={scene} scale={0.25} position={[0, 0, 5]} />
    </group>
  );
};

interface RotatingMeshProps {
  rotation: Euler;
}

const ComputerCanvas: React.FC = () => (
  <Canvas
    dpr={[1, 2]}
    shadows
    camera={{ position: [0, 5, 15], fov: 50 }}
    gl={{ preserveDrawingBuffer: true }}
  >
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} intensity={1} />
    <spotLight
      position={[-20, 50, 10]}
      angle={0.3}
      penumbra={1}
      intensity={1}
      castShadow
    />
    <OrbitControls />
    <Model rotation={initialRotation} />
  </Canvas>
);

export default ComputerCanvas;
