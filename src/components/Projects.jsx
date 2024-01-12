import ProjectsCard from "../utils/ProjectsCard.jsx";
import { projectsData } from "../utils/projectsData.jsx";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import "./Projects.css";

function Projects() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section className="projects" id="projects" ref={ref}>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        data-aos-once="true"
        className="progress"
      >
        <h2>
          My <span>Projects</span>
        </h2>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {projectsData.map(function (project) {
        return (
          <ProjectsCard
            key={project.id}
            image={project.img}
            title={project.title}
            desc={project.desc}
            live={project.live}
            github={project.github}
          />
        );
      })}
      <button className="btn view">
        <a
          href="https://github.com/HKES-04"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More
        </a>
      </button>
    </section>
  );
}

export default Projects;
