import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

import style from "./App.module.css";
import Home from "../Pages/Home";
import AboutMe from "../Pages/AboutMe";

function App() {
  const state = useThree();
  //activeScene will tell camera where to go when a nav Link is clicked
  const [activeScene, setActiveScene] = useState("home");
  //scenes state holds the co-ords for each scene (home and aboutMe pages)
  //modify these to move the camera
  const [scenes, setScenes] = useState([
    {
      name: "home",
      lookFrom: new THREE.Vector3(0, 0, -100), //camera will look from this position
      lookAt: new THREE.Vector3(0, 0, 0), //to this position
    },
    {
      name: "aboutMe",
      lookFrom: new THREE.Vector3(150, 120, -80),
      lookAt: new THREE.Vector3(0, 0, 0),
    },
    {
      name: "scene3",
      lookFrom: new THREE.Vector3(0, 0, 0),
      lookAt: new THREE.Vector3(1, 0, 0),
    },
    {
      name: "scene4",
      lookFrom: new THREE.Vector3(0, 0, 0),
      lookAt: new THREE.Vector3(0, 0, 1),
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

  //camera animates to these co-ordinates, these are updated by updateCamera()
  const [view, setView] = useState({
    targetPosition: new THREE.Vector3(0, 0, 10),
    targetQuaternion: new THREE.Quaternion(),
  });

  //constantly animates camera to co-ords above
  useFrame((st, dt) => {
    //camera moves to new position
    st.camera.position.lerp(
      view.targetPosition,
      THREE.MathUtils.damp(0, 1, 2, dt)
    );
    //camera rotates to new position
    st.camera.quaternion.slerp(
      view.targetQuaternion,
      THREE.MathUtils.damp(0, 1, 2, dt) // divided further for more granular slerp
    );
  });

  //used by nav Links to setActiveScene
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
    </>
  );
}

export default App;
