import { Code } from "@phosphor-icons/react";
import React from "react";
import Button from "./Button";
import MyWarsaw from "../assets/Pages/MyWarsawProject.png";
const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="image-con">
        <img src={MyWarsaw} alt="" />
      </div>
      <div className="info-con">
        <div className="info">
          <div className="header-con">
            <div className="heading">
              <h4>My Warsaw</h4>
            </div>
            <div className="tech-info">
              <div className="svg">
                <Code size={35} color="#fff" weight="bold" />
              </div>
            </div>
          </div>
          <div className="desc-con">
            <p>
              My Warsaw is a website created for the one of the best polish
              street food restaurants in United Kingdom
            </p>
          </div>
        </div>
        <div className="button-con">
          <Button class="primary" text="Visit website" />
          <Button class="secondary" text="See the code" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
