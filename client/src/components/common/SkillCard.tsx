interface Skill {
  title: string;
  image: string;
}

function SkillCard({ skills, title }: { skills: Skill[]; title: string }) {
  return (
    <div className="space-y-4">
      <h3 className="Lg:text-xl font-semibold">{title}</h3>
      <div className="grid grid-cols-5">
        {skills.map((skill, index) => (
          <div key={index} className="w-8 lg:w-12 h-8 lg:h-12">
            <img src={skill.image} alt={skill.title} className="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
