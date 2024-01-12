import SkillsCard from "../utils/SkillsCard";
import { skillsData } from "../utils/skillsData.jsx";
import "./Skills.css";

function Skills() {
  return (
    <section className="service" id="skills">
      <div data-aos="zoom-in-up" data-aos-once="true">
        <h2 className="allheading">
          My <span>Skills</span>
        </h2>
      </div>
      <div className="service-section">
        {skillsData.map(function (skill) {
          return (
            <SkillsCard
              key={skill.id}
              icon={skill.icon}
              skillName={skill.skillName}
              link={skill.link}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
