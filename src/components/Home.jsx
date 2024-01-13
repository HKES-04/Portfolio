import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Slide } from "react-awesome-reveal";
import "./Home.css";
import { mainLogo } from "../assets";

function Home() {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "Web Developer", "React Developer"],
    loop: {},
  });

  return (
    <section className="home" id="home">
      <Slide triggerOnce>
        <div className="home-detail">
          <h3>{`Hello It's Me`}</h3>
          <h1>Hussein Sultan</h1>
          <h3>
            {`And I'm a`}
            <span> {text}</span>
            <span className="cursor">
              <Cursor />
            </span>
          </h3>
          <p>
            {`I'm passionate with a keen eye for crafting interactive and
            user-friendly experiences. My journey in the world of web
            development is driven by a deep love for creating seamless,
            cutting-edge solutions.`}
          </p>
          <div className="social-media">
            <a
              href="https://github.com/HKES-04"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/hussein-khawal-el-sultan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <button className="btn download">
            <a href="../assets/Resume.docx (2).pdf" download>
              Download Resume
            </a>
          </button>
        </div>
      </Slide>
      <div className="home-img">
        <img src={mainLogo} alt="Computer Image" />
      </div>
    </section>
  );
}

export default Home;
