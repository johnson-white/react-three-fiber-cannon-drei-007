import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Plane, OrbitControls } from "@react-three/drei";
import { Physics, usePlane } from "@react-three/cannon";

import css from "./App.module.css";
import SplineModel from "../SplineModel";
import MainScene1 from "../MainScene1";
import MainScene2 from "../MainScene2";

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

      {/* <SplineModel></SplineModel> */}
      <MainScene1></MainScene1>
      <MainScene2></MainScene2>

      <OrbitControls ref={orbCam} />
    </Canvas>
  );
}

export default App;
