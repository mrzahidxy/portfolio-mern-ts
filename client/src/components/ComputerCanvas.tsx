import { Canvas, useLoader } from "@react-three/fiber";
import { Euler } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "@react-three/drei";

const initialRotation = new Euler(6.3, 16, 15.65);

const Model = ({ rotation }: RotatingMeshProps): JSX.Element => {
  // Load the 3D model using GLTFLoader
  const { scene } = useLoader(
    GLTFLoader,
    "../../public/radio_shack_trs-80_model_1/scene.gltf"
  );

  // Adjust rotation to fix upside-down rendering
  const adjustedRotation = new Euler(
    rotation.x + Math.PI,
    rotation.y,
    rotation.z
  );

  return (
    <group rotation={adjustedRotation}>
      {/* Hemisphere light for ambient lighting */}
      <hemisphereLight intensity={0.15} groundColor="black" />

      {/* Spot light for a focused light source with shadows */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      {/* Point light for additional lighting */}
      <pointLight intensity={1} />

      {/* Render the computer model */}
      <primitive object={scene} scale={0.25} position={[0, 0, 5]} />
    </group>
  );
};

export default function ComputerCanvas(): JSX.Element {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ position: [0, 5, 15], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Ambient light */}
      <ambientLight intensity={0.5} />

      {/* Point light */}
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Spot light */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />

      {/* Drag, zoom, and rotate controls */}
      <OrbitControls />

      {/* Computer model */}
      <Model rotation={initialRotation} />
    </Canvas>
  );
}

interface RotatingMeshProps {
  rotation: Euler;
}
