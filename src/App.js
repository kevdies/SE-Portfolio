import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
