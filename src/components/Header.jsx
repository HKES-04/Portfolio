import Navbar from "./Navbar";
import "./Header.css";
import { useState } from "react";
import { logo } from "../assets";

function Header() {
  const [clicked, setClicked] = useState(false);

  function handleClicked() {
    setClicked(!clicked);
  }

  return (
    <header className="header">
      <div className="hussein">
        <img src={logo} alt="HTML Icon" />
        <a href="#" className="logo">
          Hussein.dev
        </a>
      </div>
      <div className="mobile" onClick={handleClicked}>
        {clicked ? <i className="bx bx-x"></i> : <i className="bx bx-menu"></i>}
      </div>

      <Navbar clicked={clicked} />
    </header>
  );
}

export default Header;
