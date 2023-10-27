import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

type Props = {
  project: {
    createdAt: string;
    description: string;
    img: string;
    link: string;
    title: string;
    updatedAt: string;
    __v?: number;
    _id: string;
  };
};

const FeatureCard: React.FC<Props> = ({ project }) => {
  return (
    <Link
      to={`${project.link}`}
      className="block bg-gray-100 rounded-md shadow-md group hover:shadow-xl hover:bg-blue-100 transform hover:scale-102 cursor-pointer relative transition duration-300 ease-in-out"
    >
      <div className="h-40 rounded-t-md overflow-hidden">
        {project.img ? (
          <img
            src={project.img}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="h-full font-semibold text-xl text-gray-400 flex justify-center items-center">
            Image not found
          </div>
        )}
      </div>
      <div className="p-4 space-y-2">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold text-blue-500">{project.title}</h2>
          <div className="space-x-2 text-lg">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
        <ul className="flex gap-3">
          <li className="bg-white text-blue-500 font-semibold px-4 py-1 rounded-xl">Test</li>
        </ul>
        <p className="text-sm text-gray-500">{project.description}</p>
      </div>
    </Link>
  );
};

export default FeatureCard;
