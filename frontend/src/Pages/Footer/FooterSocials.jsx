import React from "react";
import logo from "../../assets/Components/KDev-logo.png";
import { Link } from "react-scroll";
const FooterSocials = () => {
  return (
    <div className="logo-con">
      <Link to="home" offset={-1000} smooth={true} duration={1500}>
        <div className="logo">
          <img src={logo} alt="Developers logo" />
        </div>
      </Link>
    </div>
  );
};

export default FooterSocials;
