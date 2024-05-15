import React, { useState } from "react";
import logo from "../../assets/Components/KDev-logo.png";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import UseIntersecting from "../../Hooks/useIntersecting";
import { List } from "@phosphor-icons/react/dist/ssr";
import NavSm from "./NavSm";
const Navbar = () => {
  const { stickyNav, navStyle } = UseIntersecting();
  const [navSmVisible, setNavSmVisible] = useState({
    nav: "nav-sm-hidden",
    glass: "",
  });

  const handleOpen = () => {
    setNavSmVisible({
      nav: "",
    });
    setTimeout(() => {
      setNavSmVisible({
        glass: "nav-sm-glass",
      });
    }, 500);
  };

  return (
    <>
      <div id="nav" className={`nav-bar ${navStyle} ${stickyNav} `}>
        <NavSm navOpen={navSmVisible} navOpenFunction={setNavSmVisible} />
        <div className={`container `}>
          <nav>
            <div className="logo-container">
              <Link to="home" offset={-1000} smooth={true} duration={1500}>
                <div className="logo-img">
                  <img src={logo} alt="Developers logo image " />
                </div>
              </Link>
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
                    to="/all-projects/code"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Portfolio
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav-sm-hamburger">
              <div
                onClick={() => {
                  handleOpen();
                }}
                className="svg"
              >
                <List size={32} color="#fff" />
              </div>
            </div>
            <div className="nav-button-container">
              <Link to="contact" offset={-100} smooth={true} duration={1500}>
                <Button text="Hire me" class="primary" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
