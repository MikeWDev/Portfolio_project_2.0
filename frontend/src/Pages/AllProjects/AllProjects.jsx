import React from "react";
import ProjectCard from "../../Components/ProjectCard";
import { ArrowBendUpLeft } from "@phosphor-icons/react";
import Button from "../../Components/Button";

const AllProjects = () => {
  return (
    <div className="ani-grad">
      <section className="">
        <div className="all-projects">
          <div className="heading-con">
            <Button
              class="primary"
              text={<ArrowBendUpLeft size={38} color="#fff" />}
            />
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
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
