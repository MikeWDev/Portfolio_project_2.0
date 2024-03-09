import React, { useState } from "react";
import logo from "../assets/Components/KDev-logo 1.png";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import UseIntersecting from "../Hooks/useIntersecting";

import usePopUp from "../Hooks/usePopUp";
const Navbar = () => {
  const { stickyNav, navStyle } = UseIntersecting();
  const { popUp, handlePopUp, visible } = usePopUp();
  console.log(visible);
  console.log(popUp);
  return (
    <div id="nav" className={`nav-bar ${navStyle} ${stickyNav} `}>
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
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" offset={-80} smooth={true} duration={1500}>
                  About me
                </Link>
              </li>
              <li>
                <Link to="skill" offset={-200} smooth={true} duration={1500}>
                  Skills
                </Link>
              </li>
              <li>
                <NavLink
                  to="/all-projects"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Portfolio
                </NavLink>
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
