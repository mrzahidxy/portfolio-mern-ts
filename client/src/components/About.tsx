import React from "react";
import Image from "../assets/image/about.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer,
} from "recharts";

interface SkillData {
  name: string;
  skill: number;
  color: string;
}

const About: React.FC = () => {
  const data: SkillData[] = [
    { name: "HTML & CSS", skill: 0.8, color: "#3b82f6" },
    { name: "Tailwind", skill: 0.8, color: "#22c55e" },
    { name: "JS & TS", skill: 0.6, color: "#f97316" },
    { name: "React", skill: 0.6, color: "#fde047" },
    { name: "Next", skill: 0.6, color: "#FF6F61" },
    { name: "Express", skill: 0.6, color: "#8b5cf6" },
  ];

  const skillLabelsAndColors = [
    { skill: 0.4, label: "Newbie", color: "#1e90ff" },
    { skill: 0.6, label: "Geek", color: "#1e90ff" },
    { skill: 0.8, label: "Ninja", color: "#1e90ff" },
    { skill: 1, label: "Pro", color: "#1e90ff" },
  ];

  // Custom Label
  interface CustomYAxisTickProps {
    x?: number;
    y?: number;
    payload?: any;
  }
  const CustomYAxisTick: React.FC<CustomYAxisTickProps> = ({
    x,
    y,
    payload,
  }) => {
    const { value } = payload;
    const labelObj = skillLabelsAndColors.find(
      (labelObj) => labelObj.skill === value
    );
    const label = labelObj ? labelObj.label : "";

    return (
      <text
        x={x}
        y={y}
        dx={-4}
        textAnchor="end"
        fill={labelObj?.color}
        fontSize={14}
      >
        <tspan style={{ fontWeight: "bold" }}>{label}</tspan>
      </text>
    );
  };

  return (
    <div
      id="about"
      data-scroll-section
      className="lg:h-screen grid lg:grid-cols-3 gap-20"
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
            As a devoted software magician, I've mastered JavaScript and its
            magical tech allies. With coding prowess, I conquer real-world
            challenges with efficiency and creativity, crafting elegant
            solutions.
          </p>
          <p className="text-justify">
            On my professional adventure, I thrive on continuous learning and
            growth. Immersed in cutting-edge software development practices, I
            conjure enchanting products for exceptional user experiences.
          </p>
          <p className="text-justify">
            Beyond coding, I find bliss in filmmaking. With just my trusty
            smartphone, I capture life's precious moments, weaving captivating
            visual tales that mesmerize all who see them.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              className="text-[9px] md:text-[14px]"
              style={{ fill: "#1e90ff", fontWeight: 500 }}
            />
            <YAxis
              tick={<CustomYAxisTick />}
              className="text-[9px] md:text-[12px]"
            />
            <Bar dataKey="skill" fill="#8884d8" isAnimationActive={false}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default About;
