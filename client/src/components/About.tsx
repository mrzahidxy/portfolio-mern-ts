import React from "react";
import Image from "../assets/image/about.png";
import Tehnonext from "../assets/image/technonext.jpeg";
import Intellier from "../assets/image/intellier.png";

const About: React.FC = () => {
  return (
    <div
      id="about"
      data-scroll-section
      className="lg:h-screen pt-20  grid lg:grid-cols-3 gap-20"
    >
      <div className="h-[350px] rounded-md bg-transparent lg:bg-gray-800 lg:relative">
        <img
          src={Image}
          alt="image"
          className="h-full rounded-md overflow-hidden lg:absolute lg:left-14 top-14"
        />
      </div>

      <div className="lg:col-span-2 lg:pl-32">
        <div className="space-y-8 text-justify">
          <h3 className="text-blue-500 text-3xl lg:text-5xl font-bold">
            About
          </h3>
          <p className="lg:text-lg text-justify">
            As a dedicated software professional, I have mastered JavaScript and
            related technologies. I use my coding skills to solve real-world
            problems creatively and efficiently. I'm proficient in both frontend
            and backend development, which strengthens my skills in software
            engineering.
          </p>
          <p className="lg:text-lg text-justify mb-2">
            In my professional journey, I prioritize continuous learning and
            immerse myself in cutting-edge software practices. This enabled me
            to create a seamless user experience with integrated APIs.
          </p>

          <p className="lg:text-lg  text-justify mb-2">
            Beyond coding, I enjoy filmmaking using my smartphone to capture
            life's precious moments, creating captivating visual stories.
          </p>

          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-medium text-blue-500">Work Experinces</h3>

            <div className="flex gap-8">
              <img src={Tehnonext} alt="" className="w-16 h-16" />
              <div className="flex flex-col">
                <span className="text-lg lg:text-2xl">Software Engineer </span>
                <span className="lg:text-xl">
                  at Technonext (US Bangla) || (2022-Present)
                </span>
              </div>
            </div>

            <div className="flex gap-8">
              <img
                src={Intellier}
                alt=""
                className="w-16 h-16 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg lg:text-2xl">Frontend Engineer </span>
                <span className="lg:text-xl">at Intellier (Team) || (2022)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
