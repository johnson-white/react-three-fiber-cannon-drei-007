import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import App from "../App";
import MainScene1 from "../Scenes/MainScene1";
import MainScene2 from "../Scenes/MainScene2";
import MainScene3 from "../Scenes/MainScene3";
import MainScene4 from "../Scenes/MainScene4";
import Loading from "../Pages/DOMComponents/Loading";

function CanvasRender() {
  return (
    <>
      <Canvas camera={{ position: [-1, 0, 0], near: 0.001 }}>
        <Suspense fallback={<Loading />}>
          {/* <MainScene2></MainScene2> */}

          <MainScene4></MainScene4>

          <directionalLight
            intensity={2}
            castShadow
            shadow-mapSize-height={1024}
            shadow-mapSize-width={1024}
          />
          <ambientLight intensity={0.4} />
          <App />
        </Suspense>
      </Canvas>
    </>
  );
}

export default CanvasRender;
