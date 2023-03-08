import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    height: 200vh;
  }
  @media screen and (max-width: 425px) {
    height: 100%;
  }
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;
const Title = styled.h1`
  margin-top: -70px;
  font-size: 70px;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 60px;
  }
  @media screen and (max-width: 425px) {
    text-align: center;
    font-size: 50px;
  }
  @media screen and (max-width: 320px) {
    text-align: center;
    font-size: 40px;
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
  font-size: 24px;
  color: lightgray;
  display: flex;
  text-align: center;
  padding: 10px;
`;
const Button = styled.button`
  background-color: blue;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    margin: -20px;
  }
`;
const Right = styled.div`
  flex: 3;
  position: relative;
  @media screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
`;
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 10s infinite ease alternate-reverse;
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
  @keyframes animate {
    12.5% {
      transform: translateX(260px);
    }
    25% {
      transform: translateY(0px);
    }
    37.5% {
      transform: translateY(40px);
    }
    55% {
      transform: translateY(-40px);
    }

    62.5% {
      transform: translateX(-240px);
    }

    75% {
      transform: translateY(0px);
    }
    87.5% {
      transform: translateY(40px);
    }
    100% {
      transform: translateY(-40px);
    }
  }
`;
const Line = styled.div`
  width: 30px;
  height: 5px;
  background-color: white;
  border-radius: 10px;
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Initiate. Execute. Resolve.</Title>
          <WhatWeDo>
            <Line />
            <Subtitle>What we do</Subtitle>
          </WhatWeDo>
          <Desc>
            We design user friendly web applications to help business grow
            faster.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere arg={[1, 100, 200]} scale={1.8}>
              <MeshDistortMaterial
                color="blue"
                attach="material"
                distort={1.2}
                speed={3}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/Appun_WB.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
