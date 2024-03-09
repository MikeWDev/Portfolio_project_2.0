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
          <a href="https://twitter.com/mKocikDev" target="_blank">
            <TwitterLogo size={26} color="#fff" />
          </a>
        </div>
        <div className="social">
          <a
            href="https://www.facebook.com/profile.php?id=100012762481414"
            target="_blank"
          >
            <FacebookLogo size={26} color="#fff" />
          </a>
        </div>
        <div className="social">
          <a href="https://www.instagram.com/mikekdevv/" target="_blank">
            <InstagramLogo size={26} color="#fff" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterSocials;
