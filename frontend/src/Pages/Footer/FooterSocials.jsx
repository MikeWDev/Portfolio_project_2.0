import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import logo from "../../assets/Components/KDev-logo 1.png";
const FooterSocials = () => {
  return (
    <div className="logo-con">
      <div className="logo">
        <img src={logo} alt="Developers logo" />
      </div>
      <div className="socials">
        <div className="social">
          <TwitterLogo size={26} color="#fff" />
        </div>
        <div className="social">
          <FacebookLogo size={26} color="#fff" />
        </div>
        <div className="social">
          <InstagramLogo size={26} color="#fff" />
        </div>
      </div>
    </div>
  );
};

export default FooterSocials;
