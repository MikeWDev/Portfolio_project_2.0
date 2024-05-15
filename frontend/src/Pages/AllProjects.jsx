import React, { useContext, useState } from "react";
import { ArrowBendUpLeft } from "@phosphor-icons/react";
import Button from "../Components/Button";
import { NavLink, Outlet } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import AllProjectsButtons from "../Components/AllProjectsComponents/AllProjectsButtons";
import AllProjectsHeading from "../Components/AllProjectsComponents/AllProjectsHeading";

const AllProjects = () => {
  const [section, setSection] = useState("code");
  return (
    <div id="all-p" className="ani-grad">
      <section>
        <div className="all-projects">
          <div className="heading-con">
            <NavLink to="/">
              <div className="button">
                <ArrowBendUpLeft />
              </div>
            </NavLink>
            <div>
              <h2>All Projects</h2>
            </div>
            <div></div>
          </div>
          <AllProjectsButtons section={section} setSection={setSection} />

          <Outlet />
          <ScrollToTop />
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
