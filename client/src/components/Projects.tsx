import { projects } from "../JSON/project.json";
import FeatureCard from "./common/FeatureCard";

const Projects: React.FC = () => {

  return (
    <div
      id="projects"
      data-scroll-section
      className="lg:h-screen flex flex-col space-y-20 pt-40"
    >
      <div className="flex flex-col items-center space-y-6">
        <h3 className="text-blue-500 text-3xl lg:text-5xl font-bold">
          Imagine and Create.
        </h3>
        <p>
          Here are some of my works. For live view, Click on the below sections.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <FeatureCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
