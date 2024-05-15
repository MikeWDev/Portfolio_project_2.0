import React, { useContext } from "react";
import LoadingGuy from "../LoadingGuy";
import ProjectCard from "../ProjectCard";
import { PortfolioContext } from "../../Context/PortfolioContext";

const AllProjectContainer = () => {
  const { allProjects, loading } = useContext(PortfolioContext);
  return (
    <div className="project-con">
      {loading === false ? (
        <LoadingGuy />
      ) : (
        allProjects &&
        allProjects.map((project, i) => {
          return (
            <ProjectCard
              key={i}
              title={project.title}
              desc={project.desc}
              web_link={project.web_link}
              git_link={project.git_link}
              image_url={project.image_url}
              skills={project.skills}
              build={project.build}
            />
          );
        })
      )}
    </div>
  );
};

export default AllProjectContainer;
