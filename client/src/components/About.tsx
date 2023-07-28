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

const data: SkillData[] = [
  { name: "HTML & CSS", skill: 0.8, color: "#FF6384" },
  { name: "JavaScript", skill: 0.6, color: "#36A2EB" },
  { name: "ReactJS", skill: 0.6, color: "#FFCE56" },
  { name: "NextJS", skill: 0.6, color: "#4BC0C0" },
  { name: "TailwindCSS", skill: 0.6, color: "#9966FF" },
];

const CustomYAxisTick = ({ x, y, payload }: any) => {
  const skill = payload.value as number;

  let label = "";
  if (skill === 0.4) {
    label = "Newbie";
  } else if (skill === 0.6) {
    label = "Geek";
  } else if (skill === 0.8) {
    label = "Ninja";
  } else if (skill === 1) {
    label = "Pro";
  }

  return (
    <text x={x} y={y} dx={-4} textAnchor="end" fill="#1e90ff" fontSize={14}>
      <tspan style={{ fontWeight: "bold" }}>{label}</tspan>
    </text>
  );
};

const About: React.FC = () => {
  return (
    <div
      id="about"
      data-scroll-section
      className="h-screen grid lg:grid-cols-2 gap-20"
    >
      <div className="h-[600px] lg:h-2/3 rounded-md bg-transparent lg:bg-gray-800 relative">
        <img
          src={Image}
          alt="image"
          className="h-full md:w-full object-fit rounded-md overflow-hidden absolute left-14 top-14 lobject-cover"
        />
      </div>

      <div className="space-y-12">
        <div className="space-y-8 text-justify">
          <p>
            As a dedicated software developer 🧔, I have expertise in JavaScript
            and its supporting technologies that solve real-world problems
            through code ✨. I'm learning industry-standard software development
            from my current workplace, which I will use to build world-class
            products. 🏆
          </p>
          <p>
            Also, I love to capture the motion of life on my phone 🎬. I try to
            write what I learn simply for others.📃
          </p>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              className="text-[9px] md:text-lg"
              style={{ fill: "#1e90ff", fontWeight: 500 }}
            />
            <YAxis tick={<CustomYAxisTick />} />
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
