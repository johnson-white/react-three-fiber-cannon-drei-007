/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from "react";
import { useGLTF, Merged } from "@react-three/drei";

export default function InstancedModel(props) {
  const { nodes } = useGLTF("./models/mainscene2-transformed.glb");
  const instances = useMemo(
    () => ({
      Cube: nodes.Cube_10,
    }),
    [nodes]
  );
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => <MainScene2 instances={instances} />}
    </Merged>
  );
}

function MainScene2({ instances, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/mainscene2-transformed.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-99.750066, 20.871352, -11.163223]} scale={0.220669}>
        <instances.Cube
          position={[0, 50, -100]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <instances.Cube
          position={[100, -50, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <instances.Cube
          position={[0, -50, 100]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <instances.Cube
          position={[-100, 50, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
      </group>
      <group position={[-0.220515, 31.90482, 88.484253]} scale={0.220669}>
        <instances.Cube
          position={[-100, -100, -100]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <instances.Cube rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <instances.Cube
          position={[100, 100, 100]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
      </group>
      <group position={[107.535535, 9.837883, -2.609672]} scale={0.220669}>
        <instances.Cube
          position={[0, 0, 63.466834]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <instances.Cube
          position={[0, 0, -63.466834]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
      </group>
      <group
        position={[-0.220515, 11.296361, -90.519169]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={0.220669}
      >
        <spotLight
          intensity={1}
          angle={Math.PI / 4}
          penumbra={1}
          decay={2}
          distance={1800}
          position={[538.3145, 1131.878946, 392.026178]}
        />
        <spotLight
          intensity={1}
          angle={Math.PI / 4}
          penumbra={1}
          decay={2}
          distance={1287}
          position={[127.241383, -64.476637, -368.422618]}
          rotation={[-Math.PI / 2, 0, 0.4964]}
        />
        <spotLight
          intensity={1}
          angle={Math.PI / 4}
          penumbra={1}
          decay={2}
          distance={1287}
          position={[1251.425633, -121.085973, 1125.762845]}
          rotation={[-Math.PI / 2, 0, -2.414039]}
        />
        <instances.Cube rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
      </group>
      <spotLight
        intensity={1}
        angle={Math.PI / 4}
        penumbra={1}
        decay={2}
        distance={2000}
        position={[-3725.300443, 275.266999, -5102.530918]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 3]}
      />
      <spotLight
        intensity={1}
        angle={Math.PI / 4}
        penumbra={1}
        decay={2}
        distance={3026}
        position={[-3829.496583, 420.569947, -3570.003566]}
        rotation={[-Math.PI, Math.PI / 3, -Math.PI / 2]}
      />
      <spotLight
        intensity={1}
        angle={Math.PI / 4}
        penumbra={1}
        decay={2}
        distance={2000}
        position={[-4350.186351, 2219.602967, -4596.208889]}
      />
    </group>
  );
}

useGLTF.preload("/mainscene2-transformed.glb");
