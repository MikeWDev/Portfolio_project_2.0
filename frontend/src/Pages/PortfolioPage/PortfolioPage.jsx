import React, { useContext, useEffect, useState } from "react";
import ProjectCard from "../../Components/ProjectCard";
import Button from "../../Components/Button";
import { NavLink } from "react-router-dom";
import { PortfolioContext } from "../../Context/PortfolioContext";
import LoadingGuy from "../../Components/LoadingGuy";
const PortfolioPage = () => {
  const { allProjects, loading } = useContext(PortfolioContext);
  const [slicedContent, setSlicedContent] = useState([]);
  useEffect(() => {
    const slicedArray = allProjects.slice(0, 3);
    setSlicedContent(slicedArray);
  }, [allProjects]);
  console.log(allProjects);
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
            {loading === false ? (
              <LoadingGuy />
            ) : (
              slicedContent &&
              slicedContent.map((project, i) => {
                return (
                  <ProjectCard
                    skills={project.skills}
                    title={project.title}
                    desc={project.desc}
                    web_link={project.web_link}
                    git_link={project.git_link}
                    image_url={project.image_url}
                    build={project.build}
                  />
                );
              })
            )}
            {}
          </div>
          <div className="button-con">
            <NavLink to="/all-projects/code">
              <Button text="Check all projects" class="primary" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
