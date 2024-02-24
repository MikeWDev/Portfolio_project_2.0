import React, { Profiler } from "react";
import Navbar from "../../Components/NavBar";
import Button from "../../Components/Button";
import profile from "../../assets/Pages/profile-pic.png";
import { DownloadSimple } from "@phosphor-icons/react";
import NeonLight from "../../Components/NeonLight";

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
                <div className="cv-download">
                  <div className="text">CV</div>
                  <div className="svg">
                    <DownloadSimple size={24} color="#fff" weight="bold" />
                  </div>
                  <div className="third-ellipse"></div>
                </div>
              </div>
              <div className="sub-heading">
                <h2>React / Node.js / Mongo DB</h2>
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
