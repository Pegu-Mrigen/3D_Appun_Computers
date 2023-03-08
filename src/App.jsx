import Hero from "./components/Hero";
import Works from "./components/Works";
import Contact from "./components/Contact";
import styled from "styled-components";
import Who from "./components/Who";
import Test from "./components/Test";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.png");
  background-size: 100vw 100vh;
  // background-repeat: no-repeat;
  &::-webkit-scrollbar {
    display: none;
  }

  
`;
function App() {
  return (
    <Container className="App">
      <Hero />
      <Who />
      <Works />
      <Contact />
      {/* <Test /> */}
    </Container>
  );
}

export default App;
