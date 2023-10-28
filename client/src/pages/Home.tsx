import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skill from "../components/Skill";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Intro />
        <About />
        <Skill />
        <Projects />
      </div>
      <Contact />
    </>
  );
};

export default Home;
