import "../App.css";
import ComputerCanvas from "./ComputerCanvas";

function Intro() {
  return (
    <div
      id="intro"
      data-scroll-section
      className="h-screen grid lg:grid-cols-2"
    >
      <div className="col-span-1 flex flex-col justify-center gap-5 lg:pr-32">
        <span className="text-xl md:text-3xl">Hello, This is</span>
        <h1 className="text-4xl md:text-6xl font-bold">Zahid Hasan</h1>
        <div className="h-12 overflow-hidden">
          <div className="flex flex-col animate-move text-xl md:text-4xl font-bold text-blue-500">
            <div className="h-12">Software Engineer</div>
            <div className="h-12">MERN Stack Developer</div>
            <div className="h-12">Tech Blogger</div>
            <div className="h-12">Videographer</div>
          </div>
        </div>
        <p className="text-base md:text-xl text-justify">
          As a coding wizard 🧔, I've mastered JavaScript and its tech
          companions 💻. With code as my wand, I craft solutions that dazzle
          with innovation ✨.
        </p>
      </div>

      <div className="col-span-1 relative hidden lg:block">
        <ComputerCanvas />
      </div>
    </div>
  );
}

export default Intro;
