import { Canvas } from "@react-three/fiber";
import App from "../App";

function CanvasRender() {
  return (
    <>
      <Canvas camera={{ position: [0, 2, -15] }}>
        <App />
      </Canvas>
    </>
  );
}

export default CanvasRender;
