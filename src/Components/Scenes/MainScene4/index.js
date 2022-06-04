import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { LayerMaterial, Depth, Color, Fresnel, Noise, Normal } from "lamina";

export default function MainScene4() {
  const torus = useRef();

  useFrame((state, delta) => {
    torus.current.rotation.z += delta / 20;
  });

  return (
    <mesh
      castShadow
      receiveShadow
      rotation-y={-Math.PI / 2}
      scale={[200, 200, 200]}
      ref={torus}
    >
      <torusKnotGeometry args={[0.4, 0.1, 600, 32, 3, 9]} />
      <LayerMaterial lighting="basic">
        <Color color={"ghostwhite"} alpha={1} mode="normal" />
        <Depth
          far={100}
          near={10}
          origin={[0, 0, 0]}
          colorA="coral"
          alpha={0.5}
          mode={"normal"}
          mapping="camera"
        />
        <Depth
          near={80}
          far={110}
          colorA={"gold"}
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
