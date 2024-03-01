import React from "react";
import ProjectCard from "../../Components/ProjectCard";
import Button from "../../Components/Button";
import { NavLink } from "react-router-dom";
const PortfolioPage = () => {
  return (
    <section>
      <div id="portfolio" className="portfolio">
        <div className="content-con">
          <div className="header-container">
            <div className="heading">
              <h2>
                My <span>Latest</span> Projects
              </h2>
            </div>
            <div className="sub-heading">
              <p>Greeting, fellow digital explorers. Enjoy my recent work!</p>
            </div>
          </div>
          <div className="project-con">
            <ProjectCard />
          </div>
          <div className="button-con">
            <NavLink to="/all-projects">
              <Button text="Check all projects" class="primary" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
