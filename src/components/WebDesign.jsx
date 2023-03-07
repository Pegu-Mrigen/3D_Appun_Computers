import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Shoe from "./Shoe";
import Mac from "./Mac";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: lightblue;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  @media screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
`;

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Mac />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        We design websites with a strong focus on user experience and
        ensuring fast grow of business.
      </Desc>
    </>
  );
};

export default WebDesign;
