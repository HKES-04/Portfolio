import PropTypes from "prop-types";

function SkillsCard({ icon, skillName, link }) {
  return (
    <div
      data-aos="flip-left"
      data-aos-delay="300"
      data-aos-duration="4000"
      data-aos-once="true"
      className="service-box"
    >
      <i className={icon}></i>
      <h3>{skillName}</h3>
      <a href={link} className="btn" target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </div>
  );
}

SkillsCard.propTypes = {
  icon: PropTypes.string.isRequired,
  skillName: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SkillsCard;
