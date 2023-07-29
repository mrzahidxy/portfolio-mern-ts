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
      className="block bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-102 cursor-pointer relative"
    >
      <div className="h-40 rounded-t-md overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="h-full font-semibold text-xl text-gray-400 flex justify-center items-center">
            Image not found
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        
        <p className="text-gray-700 text-sm">{project.description}</p>
      </div>
    </a>
  );
};

export default FeatureCard;
