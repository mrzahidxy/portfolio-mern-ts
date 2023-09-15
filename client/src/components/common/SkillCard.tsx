interface Skill {
  title: string;
  image: string;
}

function SkillCard({ skills, title }: { skills: Skill[]; title: string }) {
  return (
    <div className="space-y-4 mb-8 lg:mb-0">
      <h3 className="text-2xl font-medium">{title}</h3>
      <div className="grid grid-cols-2 gap-y-8 gap-x-4 lg:gap-y-16">
        {skills.map((skill) => (
          <div className="w-16 h-16">
            <img src={skill.image} alt={skill.title} className="" />
            {/* <div className="text-center text-sm font-medium">{skill.title}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
