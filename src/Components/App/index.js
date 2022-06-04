import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";

import style from "./App.module.css";
import Home from "../Pages/Home";
import Skills from "../Pages/Skills";

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
      name: "skills",
      lookFrom: new THREE.Vector3(-260, 43, 77),
      lookAt: new THREE.Vector3(-300, 43, 77),
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
        rotation-x={-Math.PI / 6} //rotate mesh and Html
      >
        {/* [20, 10, 1] */}
        <boxBufferGeometry args={[0, 0, 0]} />
        <meshNormalMaterial />
        <Html
          center
          className={style.appContainer}
          transform //enable 3D transforms
          //position={[0, 0.05, -0.09]} //apply transforms
          distanceFactor={9}
          // sprite
        >
          <Home updateActiveScene={updateActiveScene} />
        </Html>
      </mesh>

      <mesh position={[-300, 43, 77]}>
        {/* [1, 10, 20] */}
        <sphereGeometry args={[90, 1, 3]} />
        <meshNormalMaterial wireframe opacity={1} transparent />
        <Html center className={style.appContainer}>
          <Skills updateActiveScene={updateActiveScene} />
        </Html>
      </mesh>
      <mesh position={[-320, 45, 78]}>
        {/* [1, 10, 20] */}
        <torusGeometry args={[78, 12, 48, 2, 9]} />
        <meshNormalMaterial wireframe opacity={1} transparent />
      </mesh>
    </>
  );
}

export default App;
