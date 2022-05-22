import React, { useRef } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";

export default function MainScene1({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/mainscene1.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-450.03, 100, -50]}>
        <mesh
          geometry={nodes.Cube_10.geometry}
          material={nodes.Cube_10.material}
          position={[0, 50, -100]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Cube_9.geometry}
          material={nodes.Cube_9.material}
          position={[100, -50, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Cube_8.geometry}
          material={nodes.Cube_8.material}
          position={[0, -50, 100]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Cube_7.geometry}
          material={nodes.Cube_7.material}
          position={[-100, 50, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
      </group>
      <group position={[1, 150, 401.57]}>
        <mesh
          geometry={nodes.Cube_6.geometry}
          material={nodes.Cube_6.material}
          position={[-100, -100, -100]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Cube_5.geometry}
          material={nodes.Cube_5.material}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Cube_4.geometry}
          material={nodes.Cube_4.material}
          position={[100, 100, 100]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
      </group>
      <group position={[489.31, 50, -11.24]}>
        <mesh
          geometry={nodes.Cube_3.geometry}
          material={nodes.Cube_3.material}
          position={[0, 0, 63.47]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Cube_2.geometry}
          material={nodes.Cube_2.material}
          position={[0, 0, -63.47]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
      </group>
      <group position={[1, 56.61, -409.61]} rotation={[0, -Math.PI / 4, 0]}>
        <spotLight
          intensity={1}
          angle={Math.PI / 9}
          decay={2}
          distance={1800}
          position={[538.31, 1131.88, 392.03]}
        />
        <spotLight
          intensity={1}
          angle={0.21}
          decay={2}
          distance={1287}
          position={[127.24, -64.48, -368.42]}
          rotation={[-Math.PI / 2, 0, 0.5]}
        />
        <spotLight
          intensity={1}
          angle={0.21}
          decay={2}
          distance={1287}
          position={[1251.43, -121.09, 1125.76]}
          rotation={[-Math.PI / 2, 0, -2.41]}
        />
        <mesh
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
      </group>
      <spotLight
        intensity={1}
        angle={Math.PI / 6}
        decay={2}
        distance={2000}
        position={[429.09, 0, -506.32]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 3]}
      />
      <spotLight
        intensity={1}
        angle={0.4}
        decay={2}
        distance={3026}
        position={[324.89, 145.3, 1026.21]}
        rotation={[-Math.PI, Math.PI / 3, -Math.PI / 2]}
      />
      <spotLight
        intensity={1}
        angle={0.3}
        decay={2}
        distance={2000}
        position={[-195.8, 1944.34, 0]}
      />
      <OrthographicCamera
        makeDefault={false}
        far={100000}
        near={-100000}
        position={[1335.7, 1121.78, -17.75]}
        rotation={[-1.54, 0.98, 1.53]}
      />
    </group>
  );
}

useGLTF.preload("./models/mainscene1.gltf");
