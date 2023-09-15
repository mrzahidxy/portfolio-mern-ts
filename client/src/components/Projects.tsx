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
  const [loading, setLoading] = useState<Boolean>(true);
  const apiUrl = import.meta.env.VITE_VERCEL_API_URL;

  const fetchProjects = async () => {
    try {
      const response = await axios.get<Project[]>(`${apiUrl}/api/portfolio`);
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div
      id="projects"
      data-scroll-section
      className="lg:h-screen flex flex-col pt-20 space-y-20"
    >
      <div className="flex flex-col items-center space-y-6">
        <h3 className="text-blue-500 text-3xl lg:text-5xl font-bold">
          Imagine and Create.
        </h3>
        <p className="lg:text-xl">
          Here are some of my works. For live view, Click on the below sections.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {loading ? (
          <div className="col-span-3 flex justify-center items-center font-bold text-gray-800 text-2xl">Loading... </div>
        ) : (
          projects.map((project: Project) => (
            <FeatureCard key={project._id} project={project} />
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
