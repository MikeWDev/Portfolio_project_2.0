import React from "react";
import logo from "../assets/Components/KDev-logo 1.png";
import { Link, Element } from "react-scroll";
import Button from "./Button";
import UseIntersecting from "../Hooks/useIntersecting";
const Navbar = () => {
  const { stickyNav, navStyle } = UseIntersecting();
  return (
    <div className={`nav-bar ${navStyle} ${stickyNav} `}>
      <div className={`container `}>
        <nav>
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
                <Link to="home" offset={-1000} smooth={true} duration={1500}>
                  <a href="">Home</a>
                </Link>
              </li>
              <li>
                <Link to="about" offset={-80} smooth={true} duration={1500}>
                  <a href="">About me</a>
                </Link>
              </li>
              <li>
                <Link to="skill" offset={-200} smooth={true} duration={1500}>
                  <a href="">Skills</a>
                </Link>
              </li>
              <li>
                <Link to="portfolio" smooth={true} duration={1500}>
                  <a href="">Portfolio</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-button-container">
            <Link to="contact" offset={-100} smooth={true} duration={1500}>
              <Button text="Hire me" class="primary" />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
