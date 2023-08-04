import "../App.css";
import ComputerCanvas from "./ComputerCanvas";

function Intro() {
  return (
    <div
      id="intro"
      data-scroll-section
      className="h-screen grid lg:grid-cols-2"
    >
      <div className="col-span-1 flex flex-col justify-center gap-5 lg:pr-36">
        <span className="text-xl md:text-3xl">Hello, This is</span>
        <h1 className="text-4xl md:text-5xl font-bold">Zahid Hasan</h1>
        <div className="h-12 overflow-hidden">
          <div className="flex flex-col animate-move text-xl md:text-3xl font-bold text-blue-500">
            <div className="h-12">Software Engineer</div>
            <div className="h-12">MERN Developer</div>
            <div className="h-12">Tech Blogger</div>
            <div className="h-12">Videographer</div>
          </div>
        </div>
        <p className="text-base md:text-lg text-justify">
          As a devoted software sorcerer 🧔, I've mastered the magical arts of
          JavaScript and its supporting technologies 💻. With the power of code
          at my fingertips, I weave solutions to real-world problems that
          sparkle with efficiency and innovation ✨.
        </p>
      </div>

      <div className="col-span-1 relative hidden lg:block">
        <ComputerCanvas />
      </div>
    </div>
  );
}

export default Intro;
