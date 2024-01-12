import PropTypes from "prop-types";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar({ clicked }) {
  return (
    <nav className={clicked ? "navbar" : "navbar active"}>
      <Link
        activeClass="active"
        to="home"
        smooth={true}
        offset={0}
        duration={500}
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="about"
        smooth={true}
        offset={-10}
        duration={500}
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="skills"
        smooth={true}
        offset={0}
        duration={500}
      >
        Skills
      </Link>
      <Link
        activeClass="active"
        to="projects"
        smooth={true}
        offset={0}
        duration={500}
      >
        Projects
      </Link>
      <Link
        activeClass="active"
        to="contact"
        smooth={true}
        offset={0}
        duration={500}
      >
        Contact
      </Link>
    </nav>
  );
}

Navbar.propTypes = {
  clicked: PropTypes.bool.isRequired,
};

export default Navbar;
