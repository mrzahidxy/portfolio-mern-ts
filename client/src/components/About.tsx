import React from "react";
import Image from "../assets/image/about.png";

const About: React.FC = () => {
  return (
    <div
      id="about"
      data-scroll-section
      className="lg:h-screen mt-20 space-y-20 grid lg:grid-cols-3 gap-20"
    >
      <div className="h-[350px] flex justify-center rounded-md bg-transparent lg:bg-gray-800 lg:relative">
        <img
          src={Image}
          alt="image"
          className="h-full rounded-md overflow-hidden lg:absolute lg:left-14 top-14"
        />
      </div>

      <div className="lg:col-span-2 space-y-12 lg:pl-32">
        <div className="space-y-8 text-justify">
          <h3 className="text-blue-500 text-3xl lg:text-5xl font-bold">
            About
          </h3>
          <p className="text-justify">
            As a dedicated software professional, I have mastered JavaScript and
            related technologies. I use my coding skills to solve real-world
            problems creatively and efficiently. I'm proficient in both frontend
            and backend development, which strengthens my skills in software
            engineering.
          </p>
          <p className="text-justify mb-2">
            In my professional journey, I prioritize continuous learning and
            immerse myself in cutting-edge software practices. This enabled me
            to create a seamless user experience with integrated APIs.
          </p>

          <p className="text-justify mb-2">
            Beyond coding, I enjoy filmmaking using my smartphone to capture
            life's precious moments, creating captivating visual stories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
