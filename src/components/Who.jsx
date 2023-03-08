import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";
import styled from "styled-components";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Img = styled.img``;
const Title = styled.h1`
  font-size: 70px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
  @media only screen and (max-width: 425px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 320px) {
    font-size: 20px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: -30px 0;
  padding: -50px 0;
`;

const Subtitle = styled.h2`
  color: blue;
`;
const Desc = styled.p`
  font-size: 14px;
  display: flex;
  text-align: center;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 12px;
  }
  @media screen and (max-width: 425px) {
    text-align: center;
    font-size: 10px;
  }
  @media screen and (max-width: 320px) {
    text-align: center;
    font-size: 8px;
  }
`;
const Button = styled.button`
  background-color: blue;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  cursor: pointer;
`;
const Line = styled.div`
  width: 30px;
  height: 5px;
  background-color: white;
  border-radius: 10px;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Let's do revolutionary creations.</Title>
          <WhatWeDo>
            <Line />
            <Subtitle>Who we are</Subtitle>
          </WhatWeDo>
          <Desc>Desire to make it done and execute in real life.</Desc>
          <Button>Our Projects</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
