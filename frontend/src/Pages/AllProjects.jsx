import React from "react";
import ProjectCard from "../Components/ProjectCard";
import { ArrowBendUpLeft, ArrowUp } from "@phosphor-icons/react";
import Button from "../Components/Button";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";

const AllProjects = () => {
  return (
    <div id="all-p" className="ani-grad">
      <section className="">
        <div className="all-projects">
          <div className="heading-con">
            <NavLink to="/">
              <Button
                class="primary"
                text={<ArrowBendUpLeft size={38} color="#fff" />}
              />
            </NavLink>
            <div>
              <h2>All Projects</h2>
            </div>
            <div></div>
          </div>
          <div className="project-con">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
          <ScrollToTop />
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
