import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Shoe from "./Shoe";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: lightblue;
  border-radius: 10px;
  position: absolute;
  bottom: 100px;
  right: 100px;

  @media only screen and (max-width: 768px) {
   display: none;
  }
`;

const Application = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Shoe />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        We publish products online with a strong focus to attract potential
        customers and ensuring your product a market success.
      </Desc>
    </>
  );
};

export default Application;
