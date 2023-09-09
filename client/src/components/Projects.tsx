import React, { useEffect, useState } from "react";
import FeatureCard from "./common/FeatureCard";
import axios from "axios";

interface Project {
  createdAt: string;
  description: string;
  img: string;
  link: string;
  title: string;
  updatedAt: string;
  __v?: number;
  _id: string;
}


const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get<Project[]>(
        "http://localhost:8080/api/portfolio/"
      );
      setProjects(response.data);
      console.log("Fetched projects successfully:", response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

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
        {projects.map((project: Project) => (
          <FeatureCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
