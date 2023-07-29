import image from "../assets/image/about.png";
import FeatureCard from "./common/FeatureCard";

type Blog = {
  id: number;
  image: string;
  title: string;
  link: string;
  description: string;
};

const data: Blog[] = [
  {
    id: 1,
    image: image,
    title: "Work 1",
    link: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sed quia modi eligendi temporibus deserunt ab qui dolore dolores perferendis?",
  },
  {
    id: 2,
    image: image,
    title: "Work 2",
    link: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sed quia modi eligendi temporibus deserunt ab qui dolore dolores perferendis?",
  },
  {
    id: 3,
    image: image,
    title: "Work 3",
    link: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sed quia modi eligendi temporibus deserunt ab qui dolore dolores perferendis?",
  },
];

function Blogs() {
  return (
    <div  id="blogs" data-scroll-section className="lg:h-screen flex flex-col space-y-20 pt-40">
      <div className="flex flex-col items-center space-y-6">
        <h3 className="text-blue-500 text-3xl lg:text-5xl font-bold">Think and Write.</h3>
        <p>
          Here are some of my articless. For read, Click on the below sections.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        
        {data.map((project) => (
          <FeatureCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
