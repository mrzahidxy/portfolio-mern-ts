import htmlImage from "../assets/icon/html.png";
import cssImage from "../assets/icon/css.png";
import sassImage from "../assets/icon/sass.png";
import tailwindcssJSImage from "../assets/icon/tailwindcss.png";
import reactJSImage from "../assets/icon/reactjs.png";
import nextJSImage from "../assets/icon/nextjs.png";
import SkillCard from "./common/SkillCard";

import JSImage from "../assets/icon/js.png";
import TSImage from "../assets/icon/ts.png";

import NodeImage from "../assets/icon/node.png";
import ExpressImage from "../assets/icon/express.png";
import MongoDBImage from "../assets/icon/mongodb.png";
import FireBaseImage from "../assets/icon/firebase.png";

import GitImage from "../assets/icon/git.png";
import FigmaImage from "../assets/icon/figma.png";

interface SkillSet {
  title: string;
  image: string;
}
const frontendSkills: SkillSet[] = [
  {
    title: "SASS",
    image: sassImage,
  },
  {
    title: "TAILWIND",
    image: tailwindcssJSImage,
  },
  {
    title: "RACET JS",
    image: reactJSImage,
  },
  {
    title: "NEXT JS",
    image: nextJSImage,
  },
];

const backendSkills: SkillSet[] = [
  {
    title: "NodeJS",
    image: NodeImage,
  },
  {
    title: "ExpressJS",
    image: ExpressImage,
  },
  {
    title: "MongoDB",
    image: MongoDBImage,
  },
  {
    title: "Firebase",
    image: FireBaseImage,
  },
];

const languageSKills: SkillSet[] = [
  {
    title: "Javascript",
    image: JSImage,
  },
  {
    title: "Typescript",
    image: TSImage,
  },
  {
    title: "HTML",
    image: htmlImage,
  },
  {
    title: "CSS",
    image: cssImage,
  },
];

const otherSKills: SkillSet[] = [
  {
    title: "Git",
    image: GitImage,
  },
  {
    title: "Figma",
    image: FigmaImage,
  },
];

const Skill: React.FC = () => {
  return (
    <div id="skills" data-scroll-section className="lg:h-screen flex flex-col pt-20 space-y-10">
      <div className="flex flex-col items-center space-y-6 mb-10">
        <h3 className="text-blue-500 text-3xl lg:text-5xl font-bold">
        Mastered Techn & Stack.
        </h3>
        <p>These are the technologies I've mastered.</p>
      </div>
      <div className="grid lg:grid-cols-4 gap-x-32">
        <SkillCard title="Language" skills={languageSKills} />
        <SkillCard title="Frontend" skills={frontendSkills} />
        <SkillCard title="Backend" skills={backendSkills} />
        <SkillCard title="Others" skills={otherSKills} />
      </div>
    </div>
  );
};

export default Skill;
