import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import App from "../App";
import HomeScene from "../Scenes/HomeScene";
import Loading from "../Pages/DOMComponents/Loading";

function CanvasRender() {
  return (
    <>
      <Canvas camera={{ position: [-1, 0, 0], near: 0.001 }}>
        <Suspense fallback={<Loading />}>
          <HomeScene></HomeScene>

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
