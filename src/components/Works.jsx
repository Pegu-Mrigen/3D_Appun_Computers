import React, { useState } from "react";
import styled from "styled-components";
import Development from "./Development";
import Publishing from "./Application";
import WebDesign from "./WebsiteBuilding";
import Application from "./Application";
import WebsiteBuilding from "./WebsiteBuilding";

const data = [
  // "Web Design",
  "Website Building",
  "Development",
  "Application",
  // "Publishing",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
  @media screen and (max-width: 768px) {
    margin-bottom: 250px;
  }
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 150px;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 768px) {
    margin: -250px 0px;
  }
`;
const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 30px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      color: white;
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        100% {
          width: 100%;
        }
      }
    }
  }
`;
const Right = styled.div`
  flex: 1;
  @media screen and (max-width: 425px) {
  }
`;

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work == "Website Building" ? (
            <WebsiteBuilding />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <Application />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
