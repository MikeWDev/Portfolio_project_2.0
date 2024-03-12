import React, { useEffect, useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import { ArrowBendUpLeft } from "@phosphor-icons/react";
import Button from "../Components/Button";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";

const AllProjects = () => {
  const [allProjects, setAllProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/allprojects")
      .then((res) => res.json())
      .then((data) => setAllProjects(data));
  }, []);
  return (
    <div id="all-p" className="ani-grad">
      <section>
        <div className="all-projects">
          <div className="heading-con">
            <NavLink to="/">
              <Button class="primary" text={<ArrowBendUpLeft color="#fff" />} />
            </NavLink>
            <div>
              <h2>All Projects</h2>
            </div>
            <div></div>
          </div>
          <div className="project-con">
            {allProjects &&
              allProjects.map((project, i) => {
                return (
                  <ProjectCard
                    title={project.title}
                    desc={project.desc}
                    web_link={project.web_link}
                    git_link={project.git_link}
                    image_url={project.image_url}
                  />
                );
              })}
          </div>
          <ScrollToTop />
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
