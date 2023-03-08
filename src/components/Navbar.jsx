import React from "react";
import { MdSearch, MdSearchOff } from "react-icons/md";

import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Container = styled.div`
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
    
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Logo = styled.img`
  height: 50px;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const ListItem = styled.li``;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.img`
  background: transparent;
  width: 20px;
  cursor: pointer;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/appun.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>

        <Icons>
          <Icon src="./img/search1.png" />
          {/* <MdSearchOff style={{ cursor: "pointer", fontSize: 25 }} /> */}
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
