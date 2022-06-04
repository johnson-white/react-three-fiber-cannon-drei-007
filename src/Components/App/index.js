import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";

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
      lookFrom: new THREE.Vector3(0, 50, 88), //camera will look from this position
      lookAt: new THREE.Vector3(0, 0, 0), //to this position
    },
    {
      name: "aboutMe",
      lookFrom: new THREE.Vector3(-250, 0, 0),
      lookAt: new THREE.Vector3(-300, 0, 0),
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
          console.log("CAM LOCATION", state.camera.position);
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

  // constantly animates camera to co-ords above
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
      {/* <OrbitControls></OrbitControls> */}
      <mesh
        position={[0, 43, 77]}
        lookAt={state.camera.position}
        //rotation-x={-Math.PI / 6}
      >
        <boxBufferGeometry args={[20, 10, 1]} />
        <meshNormalMaterial />
        <Html
          center
          className={style.appContainer}
          //transform //enable 3D transforms
          //position={[0, 0.05, -0.09]} //apply transforms
          sprite
        >
          <Home updateActiveScene={updateActiveScene} />
        </Html>
      </mesh>

      <mesh position={[-300, 0, 0]}>
        <boxBufferGeometry args={[20, 10, 1]} />
        <meshNormalMaterial />
        <Html center className={style.appContainer}>
          <AboutMe updateActiveScene={updateActiveScene} />
        </Html>
      </mesh>
    </>
  );
}

export default App;
