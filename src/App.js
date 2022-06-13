import React from "react";
import styled from "styled-components";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Skills from "./components/skills/skills";
import Background from "./components/three/background"

const App = () => {
return(
   <Wrapper className="App">
     <Header />
     <Background />
     <Home />
     <Projects/>
     <Skills/>
     <Contact />
     </Wrapper>
)
}
const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 500px;
  }
`;

export default App;
