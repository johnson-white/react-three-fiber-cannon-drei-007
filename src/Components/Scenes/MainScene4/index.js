import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { LayerMaterial, Depth, Color, Fresnel, Noise, Normal } from "lamina";

export default function MainScene4() {
  const torus = useRef();

  useFrame((state, delta) => {
    torus.current.rotation.z += delta / 50;
  });

  return (
    <mesh
      castShadow
      receiveShadow
      rotation-y={Math.PI / 2}
      scale={[200, 200, 200]}
      ref={torus}
    >
      <torusKnotGeometry args={[0.4, 0.05, 400, 64, 3, 7]} />
      <LayerMaterial lighting="basic">
        <Color color={"#ff4eb8"} alpha={1} mode="normal" />
        <Depth
          far={100}
          near={1}
          origin={[0, 0, 0]}
          colorA="#ff00e3"
          colorB="#00ffff"
          alpha={0.5}
          mode={"normal"}
          mapping="camera"
        />
        <Depth
          near={25}
          far={75}
          colorA={"#ffe100"}
          alpha={0.65}
          mode={"lighten"}
          origin={[0, 0, 0]}
          mapping={"camera"}
        />
        <Fresnel
          mode="softlight"
          color="ff00e3"
          intensity={1}
          power={2}
          bias={0}
        />
      </LayerMaterial>
    </mesh>
  );
}
