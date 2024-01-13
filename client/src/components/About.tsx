import Image from "next/image";

interface experienceProps {
  title: string;
  workplace: string;
  duration: string;
  image: string;
}
const About: React.FC = () => {
  const experiences: experienceProps[] = [
    {
      title: "Software Engineer",
      workplace: "Technonext (US-Bangla)",
      duration: "2023-Present",
      image: "/image/technonext.jpeg",
    },
    {
      title: "Frontend Engineer",
      workplace: "Intelier (Team)",
      duration: "2023-Present",
      image: "/image/intellier.png",
    },
  ];

  return (
    <div id="about" className="container h-screen flex items-center">
      <div className="grid lg:grid-cols-3 gap-x-32">
        <div className="h-[450px] bg-black p-10 rounded-md relative">
          <Image
           width={600}
           height={450}
            alt=""
            src="/image/about.png"
            className="object-cover rounded-md overflow-hidden lg:absolute lg:left-14 top-14 w-full h-full"
          />
        </div>

        <div className="lg:col-span-2">
          <div className="space-y-8 text-justify">
            <h3 className="text-blue-500 text-2xl lg:text-4xl font-bold">
            &lt;a little about me/&gt;
            </h3>
            <div className="space-y-4">
              <p className="lg:text-lg text-justify">
                I have been in web development for more than 3 years since my
                student life. I've built all kinds of things, from regular
                websites to ERP systems. What makes me unique? I write clean,
                up-to-date code in JavaScript and TypeScript, and I do it
                quickly.
              </p>
              <p className="lg:text-lg text-justify">
                In my professional journey, I prioritize continuous learning and
                immerse myself in cutting-edge software practices. This enabled
                me to create a seamless user experience with integrated APIs.
              </p>

              <p className="lg:text-lg  text-justify">
                Beyond coding, I enjoy filmmaking using my smartphone to capture
                life's precious moments, creating captivating visual stories.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-semibold text-blue-500">
                Work Experinces
              </h3>

              <div className="space-y-4">
                {experiences.map((experience, index) => (
                  <div key={index} className="flex items-center gap-8">
                    <Image
                      src={experience.image}
                      alt=""
                      className="w-12 h-12 object-contain"
                      width={100}
                      height={100}
                    />

                    <div className="flex flex-col">
                      <span className="text-xl font-medium">
                        {experience.title}
                      </span>
                      <span className="text-l font-medium">
                        at {experience.workplace}
                      </span>
                      <span className="text-sm">{experience.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="float-right">
              <h3 className="text-blue-500 text-2xl font-bold">
                &lt;a little about me/&gt;
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
