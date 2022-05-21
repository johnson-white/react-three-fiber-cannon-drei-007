import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Plane, OrbitControls } from "@react-three/drei";
import { Physics, usePlane } from "@react-three/cannon";

import css from "./App.module.css";
import MainScene1 from "../Scenes/MainScene1";
import MainScene2 from "../Scenes/MainScene2";
import PhyPlane from "../PhyPlane";

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

      <MainScene1></MainScene1>
      <MainScene2></MainScene2>

      <OrbitControls ref={orbCam} />
    </Canvas>
  );
}

export default App;
