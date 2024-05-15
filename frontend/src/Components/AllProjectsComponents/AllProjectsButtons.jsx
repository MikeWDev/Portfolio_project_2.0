import React from "react";
import { NavLink } from "react-router-dom";
import { CodeBlock, FigmaLogo } from "@phosphor-icons/react";
const AllProjectsButtons = ({ section, setSection }) => {
  return (
    <div className="button-choice-con">
      <NavLink to="code">
        <div
          onClick={() => setSection("code")}
          className={`button ${section && section === "code" ? "active" : ""} `}
        >
          <CodeBlock />
        </div>
      </NavLink>
      <NavLink to="design">
        <div
          onClick={() => setSection("design")}
          className={`button ${
            section && section === "design" ? "active" : ""
          } `}
        >
          <FigmaLogo />
        </div>
      </NavLink>
    </div>
  );
};

export default AllProjectsButtons;
