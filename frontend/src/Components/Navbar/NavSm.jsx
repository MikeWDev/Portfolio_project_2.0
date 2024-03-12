import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { X } from "@phosphor-icons/react/dist/ssr";
const NavSm = ({ navOpen, navOpenFunction }) => {
  const handleClose = () => {
    navOpenFunction({
      nav: "nav-sm-hidden",
    });
  };

  return (
    <>
      <div className={`${navOpen.glass} glass`}></div>
      <div className={`nav-sm ${navOpen.nav} `}>
        <nav>
          <div onClick={handleClose} className="nav-sm-svg">
            <X color="#fff" size={32} />
          </div>
          <div className="nav-sm-links">
            <ul>
              <Link to="home" offset={-1000} smooth={true} duration={1500}>
                <li onClick={handleClose}>Home</li>
              </Link>
              <Link to="about" offset={-80} smooth={true} duration={1500}>
                <li onClick={handleClose}>About me</li>
              </Link>
              <Link to="skill" offset={-200} smooth={true} duration={1500}>
                <li onClick={handleClose}>Skills</li>
              </Link>
              <NavLink
                to="/all-projects"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li>Portfolio</li>
              </NavLink>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavSm;
