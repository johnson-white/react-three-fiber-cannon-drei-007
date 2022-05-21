import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import style from "./App.module.css";
import MainScene1 from "../Scenes/MainScene1";
import MainScene2 from "../Scenes/MainScene2";
import PhyPlane from "../PhyPlane";
import Home from "../Pages/Home";

function App() {
  const state = useThree();
  const scene1Guide = useRef();

  /*   const [shots, setShots] = useState([
    { scene1: { pos: new Vector3(0, 0, 0), target: new Vector3(0, 0, 0) } },
    { scene2: { pos: new Vector3(0, 0, 0), target: new Vector3(0, 0, 0) } },
    { scene3: { pos: new Vector3(0, 0, 0), target: new Vector3(0, 0, 0) } },
  ]); */

  //useEffect sets up camera to follow box mesh on mount
  useEffect(() => {
    function getTarget() {
      const lookAtPosition = scene1Guide.current.position.clone();
      const lookFromPosition = lookAtPosition
        .clone()
        .add(new THREE.Vector3(0, 5, 10));

      updateCamera(lookAtPosition, lookFromPosition);
    }
    getTarget();
  }, []);

  const [view, setView] = useState({
    initialPosition: new THREE.Vector3(),
    initialQuaternion: new THREE.Quaternion(),
    targetPosition: new THREE.Vector3(0, 0, 10),
    targetQuaternion: new THREE.Quaternion(),
  });

  useFrame((st, dt) => {
    //camera moves to new position
    st.camera.position.lerp(
      view.targetPosition,
      THREE.MathUtils.damp(0, 1, 2, dt)
    );
    //camera rotates to new position
    st.camera.quaternion.slerp(
      view.targetQuaternion,
      THREE.MathUtils.damp(0, 1, 1, dt / 10) // divided further for more granular slerp
    );
  });

  function updateCamera(lookAtPosition, targetPosition) {
    const initialPosition = state.camera.position.clone();
    // console.log("initialPosition", initialPosition);

    const initialQuaternion = state.camera.quaternion.clone();
    // console.log("initialQuaternion", initialQuaternion);

    //move camera to target sphere's external cam location
    state.camera.position.copy(targetPosition);
    //rotate camera to face target sphere
    state.camera.lookAt(lookAtPosition);

    //store camera quaternion
    const targetQuaternion = state.camera.quaternion.clone();
    // console.log("quaternion", quaternion);

    //if setData is null(first onClick execution) store all values in state
    setView({
      initialPosition,
      initialQuaternion,
      targetPosition,
      targetQuaternion,
    });

    //move camera back
    state.camera.position.copy(initialPosition);
    //rotate camera back
    state.camera.setRotationFromQuaternion(initialQuaternion);
  }

  return (
    <>
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
      <OrbitControls />

      <Html className={style.container}>
        <Home />
      </Html>

      {/* scene1Guide for camera positioning */}
      <mesh ref={scene1Guide} position={[0, 0, 0]}>
        <boxBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]} />
        <meshPhysicalMaterial attach="material" color="red" />
      </mesh>
    </>
  );
}

export default App;
