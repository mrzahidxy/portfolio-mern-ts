import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";
import "../style/App.css";

export default function Home() {
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
}
