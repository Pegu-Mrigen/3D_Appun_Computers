import React from "react";
import styled from "styled-components";
import Map from "./Map";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  @media screen and (max-width: 425px) {
    
    margin-top: -400px;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;
const Input = styled.input`
  padding: 20px;
  background-color: white;
  border: none;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 20px;
  background-color: white;
  border: none;
  border-radius: 5px;
`;
const Button = styled.button`
  background-color: blue;
  color: white;
  border-radius: 5px;
  padding: 20px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();

  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_krsnec8",
        "template_hh7etl8",
        ref.current,
        "Ce_YH96CdeoGQWrwf"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Type your Message"
              rows={10}
              name="message"
            />

            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We will get back to you soon. Thank You !"}
            {/* {!success && "There is something Wrong !"} */}
          </Form>
        </Left>
        <Right>
          <Map id="root1" />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
