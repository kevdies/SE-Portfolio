import React from "react";
import { Container } from "reactstrap";

import Navigation from "./Navigation";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

function App() {
  return (
    <Container>
      <Navigation />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </Container>
  );
}

export default App;
