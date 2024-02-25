import React from "react";
import Navbar from "../../Components/NavBar";
import Button from "../../Components/Button";
import profile from "../../assets/Pages/profile-pic.png";
import NeonLight from "../../Components/NeonLight";
import CvDownload from "./CvDownload";

const HeroPage = () => {
  return (
    <section>
      <Navbar />
      <div className="home">
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
              </div>
              <div className="sub-heading">
                <h4>React / Node.js / Mongo DB</h4>
              </div>
            </div>
            <div className="button-container">
              <Button class="primary" text="See my work" />
              <Button class="secondary" text="Learn more" />
            </div>
          </div>
        </div>
        <div className="image-con">
          <img src={profile} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
