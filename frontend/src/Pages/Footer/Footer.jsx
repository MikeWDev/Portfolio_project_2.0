import React from "react";

import FooterSocials from "./FooterSocials";
const Footer = () => {
  return (
    <>
      <hr />
      <section>
        <footer>
          <FooterSocials />

          <div className="slogan-con">
            <div className="heading-con">
              <h3>K Development</h3>
            </div>
            <div className="desc-con">
              <p>
                Web development turns ideas into immersive online experiences,
                blending artistry and technology to build the future of the
                internet!
              </p>
            </div>
          </div>
        </footer>
        <div className="cp-rg">
          <p>Copyright © 2024 KDevelopment. All Rights Reserved</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
