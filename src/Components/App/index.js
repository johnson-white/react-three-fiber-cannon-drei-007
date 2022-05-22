import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import style from "./App.module.css";
import MainScene1 from "../Scenes/MainScene1";
import MainScene2 from "../Scenes/MainScene2";
import PhyPlane from "../PhyPlane";
import Home from "../Pages/Home";
import AboutMe from "../Pages/AboutMe";

function App() {
  const state = useThree();
  const scene1Guide = useRef();
  const [activeScene, setActiveScene] = useState("home");
  const [scenes, setScenes] = useState([
    {
      name: "home",
      lookFrom: new THREE.Vector3(-1, 0, 5), //acts as moving camera, recommend adjusting first
      lookAt: new THREE.Vector3(1, 1, 0), //direction you are looking in, recommend adjusting first
    },
    {
      name: "aboutMe",
      lookFrom: new THREE.Vector3(1, 0, 5),
      lookAt: new THREE.Vector3(1, 1, 0),
    },
    {
      name: "scene3",
      lookFrom: new THREE.Vector3(0, 0, 0),
      lookAt: new THREE.Vector3(0, 0, 0),
    },
  ]);

  useEffect(() => {
    function updateSceneForCamera() {
      //if activeScene exists in `scenes` state, use those position values for camera
      scenes.forEach((scene) => {
        if (scene.name.toLowerCase() === activeScene.toLowerCase()) {
          updateCamera(scene.lookAt, scene.lookFrom);
          console.log(
            `${scene.name} ${JSON.stringify(scene.lookAt)} ${JSON.stringify(
              scene.lookFrom
            )}`
          );
        }
      });
    }
    updateSceneForCamera();
  }, [activeScene]);

  const [view, setView] = useState({
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
      THREE.MathUtils.damp(0, 1, 1, dt) // divided further for more granular slerp
    );
  });

  function updateActiveScene(string) {
    setActiveScene(string);
  }

  function updateCamera(lookAtPosition, lookFromPosition) {
    const initialPosition = state.camera.position.clone();
    // console.log("initialPosition", initialPosition);

    const initialQuaternion = state.camera.quaternion.clone();
    // console.log("initialQuaternion", initialQuaternion);

    //move camera to target sphere's external cam location
    state.camera.position.copy(lookFromPosition);
    //rotate camera to face target sphere
    state.camera.lookAt(lookAtPosition);

    //store camera quaternion
    const targetQuaternion = state.camera.quaternion.clone();
    // console.log("quaternion", quaternion);

    setView({
      targetPosition: lookFromPosition,
      targetQuaternion,
    });

    //move camera back
    state.camera.position.copy(initialPosition);
    //rotate camera back
    state.camera.setRotationFromQuaternion(initialQuaternion);
  }

  return (
    <>
      <MainScene1></MainScene1>
      <MainScene2></MainScene2>

      <Html className={style.container}>
        <BrowserRouter>
          <Routes>
            {/* this Home is rendered by default: */}
            <Route
              path="/"
              element={<Home updateActiveScene={updateActiveScene} />}
            />
            <Route
              path="aboutMe"
              element={<AboutMe updateActiveScene={updateActiveScene} />}
            />
          </Routes>
        </BrowserRouter>
      </Html>

      {/* scene1Guide for camera positioning */}
      <mesh ref={scene1Guide} position={[0, 0, 0]}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshPhysicalMaterial attach="material" color="red" />
      </mesh>
    </>
  );
}

export default App;
