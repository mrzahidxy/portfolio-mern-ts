// import { Suspense, lazy } from "react";
// const ComputerCanvas = lazy(() => import("./ComputerCanvas"));

import Image from "next/image";

function Intro() {
  return (
    <div
      id="intro"
      data-scroll-section
      className="container h-screen grid lg:grid-cols-2"
    >
      <div className="col-span-1 flex flex-col justify-center gap-4 max-w-2xl">
        <span className="text-xl md:text-3xl">Hello, This is</span>
        <h1 className="text-4xl md:text-6xl font-bold">Zahid Hasan</h1>
        <div className="h-12 overflow-hidden">
          <div className="flex flex-col animate-move text-xl md:text-4xl font-bold text-blue-500">
            <div className="h-12">Software Developer</div>
            <div className="h-12">MERN Developer</div>
            <div className="h-12"> Blogger</div>
            <div className="h-12">Videographer</div>
          </div>
        </div>
        <p className="w-5/6 text-base text-justify">
          I'm a dedicated Software developer 🧔, and I'm all about JavaScript
          and its handy libraries and frameworks 💻. I use code to tackle
          real-life problems and add that extra sparkle ✨.
        </p>
      </div>

      <div className="col-span-1 relative">
        <Image fill alt="" src="/image/hero-image.png" object-fit="contain" />
        <a href="https://storyset.com/work" className="text-xs">
          Work illustrations by Storyset
        </a>
      </div>
    </div>
  );
}

export default Intro;
