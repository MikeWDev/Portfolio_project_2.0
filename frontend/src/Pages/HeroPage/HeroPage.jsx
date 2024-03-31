import React from "react";
import Button from "../../Components/Button";
import profile from "../../assets/Pages/profile-pic.png";
import NeonLight from "../../Components/NeonLight";
import CvDownload from "./CvDownload";
import UseIntersecting from "../../Hooks/useIntersecting";
import { NavLink } from "react-router-dom";
const HeroPage = () => {
  const { homePadding } = UseIntersecting();
  return (
    <section>
      <div id="home" className={`home ${homePadding}`}>
        <div className="content-con">
          <NeonLight />
          <div className="slogans-container">
            <div className="slogans">
              <div className="big-slogans">
                <h1>
                  Hi, <br />
                  I'm Michał,
                  <br />
                  Web Developer
                </h1>
                <CvDownload />
                <img src={profile} alt="" />
              </div>
              <div className="sub-heading">
                <h4>React / Node.js / Mongo DB</h4>
              </div>
            </div>
            <div className="button-container">
              <NavLink to="/all-projects">
                <Button class="primary" text="See my work" />
              </NavLink>
              <Button class="secondary" text="Learn more" />
            </div>
          </div>
        </div>
        <div className="image-con"></div>
      </div>
    </section>
  );
};

export default HeroPage;
