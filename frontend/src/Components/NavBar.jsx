import React from "react";
import logo from "../assets/Components/KDev-logo 1.png";
import Button from "./NavButton";
const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo-container">
        <div className="logo-img">
          <img src={logo} alt="Developers logo image " />
        </div>
        <div className="logo-text">
          <h2>K Dev</h2>
        </div>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Contact me</a>
          </li>
        </ul>
      </div>
      <div className="nav-button-container">
        <Button text="Hire me" />
      </div>
    </nav>
  );
};

export default Navbar;
