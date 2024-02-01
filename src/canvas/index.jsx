import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Backdrop from "./Backdrop";
import Cloth from "./Cloth";
import CameraRig from "./CameraRig";

export default function CanvasModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        {/* <Backdrop /> */}

        <Center>
          <Cloth />
        </Center>
      </CameraRig>
    </Canvas>
  );
}
