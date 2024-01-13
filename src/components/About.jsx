import { aboutImg } from "../assets";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div data-aos="fade-right" data-aos-once="true" className="about-img">
        <img src={aboutImg} alt="Header Profile" />
      </div>
      <div data-aos="fade-left" data-aos-once="true" className="about-section">
        <h2 className="allheading">
          About <span>Me</span>
        </h2>
        <h3>Frontend Developer</h3>
        <p>
          {`I'm a 21-year-old senior at UMass Boston, passionately pursuing my BS
          in Computer Science. My journey in tech has been marked by a deep
          fascination with frontend development, where I combine creativity with
          technical expertise to craft engaging and user-friendly digital
          experiences. I thrive on the challenge of translating complex ideas
          into visually appealing and intuitive interfaces. I'm eager to bring
          my skills and fresh perspectives to a dynamic team, where I can
          contribute to impactful projects and continue to grow as a frontend
          developer.`}
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
    </section>
  );
}

export default About;
