import React from "react";

type Props = {
  project: {
    id: number;
    image: string;
    title: string;
    technology?: string;
    link: string;
    description: string;
  };
};

const FeatureCard: React.FC<Props> = ({ project }) => {
  return (
    <a
      href={`${project.link}`}
      className="block bg-gray-100 rounded-md shadow-md group hover:shadow-xl hover:bg-blue-100 transform hover:scale-102 cursor-pointer relative transition duration-300 ease-in-out"
    >
      <div className="h-40 rounded-t-md overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="h-full font-semibold text-xl text-gray-400 flex justify-center items-center">
            Image not found
          </div>
        )}
      </div>
      <div className="p-4 ">
        <h2 className="text-xl font-bold mb-2 text-blue-500">
          {project.title}
        </h2>
        <h4 className="font-semibold mb-2 text-gray-700">
          {project.technology}
        </h4>
        <p className="text-sm text-gray-500">{project.description}</p>
      </div>
    </a>
  );
};

export default FeatureCard;
