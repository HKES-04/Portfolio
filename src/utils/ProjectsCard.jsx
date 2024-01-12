import PropTypes from "prop-types";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../components/Projects.css";

function ProjectsCard({ image, title, desc, live, github }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section className="projectsCard">
      <div className="container">
        <div className="wrapper">
          <div data-aos-once="true" className="imageContainer" ref={ref}>
            <img src={image} alt="" />
          </div>
          <motion.div className="textContainer">
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="links">
              <a href={live} target="_blank" rel="noopener noreferrer">
                <i className="bx bx-link"></i>
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-github"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

ProjectsCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ProjectsCard;
