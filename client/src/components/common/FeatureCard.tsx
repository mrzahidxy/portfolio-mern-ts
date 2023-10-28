import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

type Props = {
  project: {
    description: string;
    img: string;
    technology: Array<string>;
    githubLink: string;
    liveLink: string;
    title: string;
    _id?: string;
  };
};

const FeatureCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="block bg-gray-100 rounded-md shadow-md group hover:shadow-xl hover:bg-blue-100 transform hover:scale-102 cursor-pointer relative transition duration-300 ease-in-out">
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
            <Link to={project.liveLink}>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>

            <Link to={project.githubLink}>
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </div>
        </div>
        <ul className="flex gap-3">
          {/* {project?.technology && project?.technology[0]?.map((tech:string) => (
            <li className="bg-white text-blue-500 font-semibold px-4 py-1 rounded-xl">
              {tech}
            </li>
          ))} */}
        </ul>
        <p className="text-sm text-gray-500">{project.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
