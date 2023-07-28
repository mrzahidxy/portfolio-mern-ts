import React from "react";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="container">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
};

export default Home;
