import React, { useState } from "react";
import "./Header.css";
import KcsLogo1 from "./images/KCS_Official_Logo.PNG";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={KcsLogo1} alt="Logo" />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <nav className={`menu ${menuOpen ? "show" : ""}`}>
        <ul className="menu-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#trainings">Trainings</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#jobsCarrier">Carriers</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
