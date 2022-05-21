import React from "react";
import * as THREE from "three";
import { Plane } from "@react-three/drei";
import { usePlane } from "@react-three/cannon";

function PhyPlane({ color, opacity, ...props }) {
  const [ref] = usePlane(() => ({ ...props }));

  return (
    <Plane args={[40, 40]} ref={ref}>
      <meshPhongMaterial
        side={THREE.DoubleSide}
        transparent
        opacity={opacity}
        color={color}
      />
    </Plane>
  );
}

export default PhyPlane;
