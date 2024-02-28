import React from "react";
import profileAbout from "../../assets/Pages/profileAbout.png";
const AboutPage = () => {
  return (
    <section>
      <div id="about" className="about">
        <div className="content-con">
          <div className="image-con">
            <img src={profileAbout} alt="" />
          </div>
          <div className="info-con">
            <div className="heading">
              <h2>About Me</h2>
            </div>
            <div className="desc">
              <p>
                Welcome to my corner of the web! I'm Michał Kocik , a passionate
                full-stack developer with a penchant for crafting robust,
                user-friendly web solutions. With a blend of creativity and
                technical expertise, I thrive on turning ideas into reality
                through elegant code and intuitive design. My journey in the
                world of programming began 5 years ago, and since then, I've
                been on a relentless quest for knowledge and innovation. From
                front-end magic with HTML, CSS, and JavaScript to back-end
                mastery with Node.js and databases like MySQL and MongoDB, I've
                honed my skills across the entire development stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
