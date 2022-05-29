import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import App from "../App";
import MainScene1 from "../Scenes/MainScene1";
import MainScene2 from "../Scenes/MainScene2";
import MainScene3 from "../Scenes/MainScene3";
import MainScene4 from "../Scenes/MainScene4";

function CanvasRender() {
  return (
    <>
      <Canvas camera={{ position: [0, 2, -15], near: 0.001 }}>
        <Suspense>
          {/* <MainScene1></MainScene1> */}
          <MainScene2></MainScene2>
          <MainScene3 scale={1} position={[0, 0, 0]}></MainScene3>

          <MainScene4></MainScene4>

          <App />
        </Suspense>
      </Canvas>
    </>
  );
}

export default CanvasRender;
