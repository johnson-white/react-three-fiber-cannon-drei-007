import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";

import style from "./App.module.css";
import Home from "../Pages/Home";
import Skills from "../Pages/Skills";
import NavBar from "../Pages/DOMComponents/NavBar";
import ContactScene from "../Scenes/ContactScene";
import Contact from "../Pages/Contact";

function App() {
  const state = useThree();
  //activeScene will tell camera where to go when a nav Link is clicked
  const [activeScene, setActiveScene] = useState("home");
  //scenes state holds the co-ords for each scene (home and aboutMe pages)
  //modify these to move the camera
  const [scenes, setScenes] = useState([
    {
      name: "home",
      lookFrom: new THREE.Vector3(0, 0, 100), //camera will look from this position
      lookAt: new THREE.Vector3(0, 0, 0), //to this position
    },
    {
      name: "skills",
      lookFrom: new THREE.Vector3(-2260, 0, 100),
      lookAt: new THREE.Vector3(-2300, 0, 100),
    },
    {
      name: "projects",
      lookFrom: new THREE.Vector3(150, 0, 0),
      lookAt: new THREE.Vector3(0, 0, 0),
    },
    {
      name: "aboutMe",
      lookFrom: new THREE.Vector3(0, 0, 0),
      lookAt: new THREE.Vector3(0, 0, 1),
    },
    {
      name: "contact",
      lookFrom: new THREE.Vector3(2260, 0, 0),
      lookAt: new THREE.Vector3(2300, 0, 0),
    },
  ]);

  useEffect(() => {
    function updateSceneForCamera() {
      //if activeScene exists in `scenes` state, use those position values for camera
      scenes.forEach((scene) => {
        if (scene.name.toLowerCase() === activeScene.toLowerCase()) {
          updateCamera(scene.lookAt, scene.lookFrom);
          // console.log(
          //   `${scene.name} ${JSON.stringify(scene.lookAt)} ${JSON.stringify(
          //     scene.lookFrom
          //   )}`
          // );
          // console.log("CAM LOCATION", state.camera.position);
        }
      });
    }
    updateSceneForCamera();
  }, [activeScene]);

  //camera animates to these co-ordinates, these are updated by updateCamera()
  const [view, setView] = useState({
    targetPosition: new THREE.Vector3(500, 500, 500),
    targetQuaternion: new THREE.Quaternion(),
  });

  // constantly animates camera to co-ords above
  useFrame((st, dt) => {
    //camera moves to new position
    st.camera.position.lerp(
      view.targetPosition,
      THREE.MathUtils.damp(0, 1, 2, dt * 2)
    );
    //camera rotates to new position
    st.camera.quaternion.slerp(
      view.targetQuaternion,
      THREE.MathUtils.damp(0, 1, 2, dt * 1) // divided further for more granular slerp
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

      <group>
        <ContactScene
          position={scenes[4].lookFrom
            .clone()
            .sub(new THREE.Vector3(-100, 30, 0))
            .toArray()} //use scene value with manual adjustment
          rotation-y={-Math.PI / 2}
        ></ContactScene>
        <mesh
          position={scenes[4].lookFrom
            .clone()
            .sub(new THREE.Vector3(-15, 0, 0))
            .toArray()} //use scene value with manual adjustment
          rotation-y={-Math.PI / 2}
        >
          <ringGeometry args={[12, 14, 4, 1, 1.57, 6.2832]} />
          <meshLambertMaterial color="aquamarine" opacity={1} transparent />
          <Html
            center
            className={style.appContainer}
            transform
            position={[0, 1.5, 0]}
            distanceFactor={10}
          >
            <Contact updateActiveScene={updateActiveScene}></Contact>
          </Html>
        </mesh>
      </group>

      <mesh
        position={scenes[0].lookFrom
          .clone()
          .sub(new THREE.Vector3(0, 0, 15))
          .toArray()} //use scene value with manual adjustment
        //rotation-x={-Math.PI / 6} //rotate mesh and Html
      >
        {/* [20, 10, 1] */}
        <boxBufferGeometry args={[0, 0, 0]} />
        <meshNormalMaterial />
        <Html
          center
          className={style.appContainer}
          transform //enable 3D transforms
          //position={[0, 0.05, -0.09]} //apply transforms
          distanceFactor={10}
          // sprite
        >
          <Home updateActiveScene={updateActiveScene} />
        </Html>
      </mesh>

      <mesh position={[-2300, 0, 100]}>
        {/* [1, 10, 20] */}
        <sphereGeometry args={[90, 1, 3]} />
        <meshNormalMaterial wireframe opacity={1} transparent />
        <Html center className={style.appContainer}>
          <Skills updateActiveScene={updateActiveScene} />
        </Html>
      </mesh>
      <mesh position={[-2320, 0.02, 100]}>
        {/* [1, 10, 20] */}
        <torusGeometry args={[78, 12, 48, 2, 9]} />
        <meshNormalMaterial wireframe opacity={1} transparent />
      </mesh>
    </>
  );
}

export default App;
