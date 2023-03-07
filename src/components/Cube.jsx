import { useFrame } from "@react-three/fiber";
import { RenderTexture, Text, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import styled from "styled-components";
const Cube = () => {
  const textRef = useRef();
  //   useFrame((state) => console.log(state));
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshBasicMaterial color="red">
        <RenderTexture attach="map">
          <PerspectiveCamera make Default position={[0, 0, 2]} />
          <color attach="background" args={["pink"]} />
          <Text ref={textRef} fontSize={2} color="green">
            Appun 
          </Text>
        </RenderTexture>
      </meshBasicMaterial>
    </mesh>
  );
};

export default Cube;
