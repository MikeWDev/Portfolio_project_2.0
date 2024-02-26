import React from "react";
import ProjectCard from "../../Components/ProjectCard";

const PortfolioPage = () => {
  return (
    <section>
      <div className="portfolio">
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
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
