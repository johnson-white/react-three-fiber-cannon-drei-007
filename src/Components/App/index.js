import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Plane, OrbitControls } from "@react-three/drei";
import { Physics, usePlane } from "@react-three/cannon";

import css from "./App.module.css";

function PhyPlane({ color, opacity, ...props }) {
  const [ref] = usePlane(() => ({ ...props }));

  return (
    <Plane args={[40, 40]} ref={ref}>
      <meshPhongMaterial
        side={THREE.DoubleSide}
        transparent
        opacity={opacity}
        color={color}
      />
    </Plane>
  );
}

function App() {
  const orbCam = useRef();
  return (
    <Canvas camera={{ position: [0, 2, -15] }}>
      <Physics gravity={[0, -5, 0]}>
        <PhyPlane
          color="white"
          opacity={1}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </Physics>

      <ambientLight intensity={0.5} />
      <pointLight color="red" intensity={5} position={[10, 1, 0]} />
      <pointLight color="blue" intensity={5} position={[-10, 1, 0]} />

      <OrbitControls ref={orbCam} />
    </Canvas>
  );
}

export default App;
