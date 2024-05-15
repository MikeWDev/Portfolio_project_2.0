import React from "react";
import figmaLogo from "../../../public/figmalogo.svg";
const AllProjectsHeading = ({ section }) => {
  return (
    <>
      {section && section === "code" ? (
        <div className="all-p-heading">
          <span>Coding</span>
          <h2>projects</h2>
        </div>
      ) : section === "design" ? (
        <div className="all-p-heading">
          <img src={figmaLogo} alt="" />
          <span className="figma-span">projects</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AllProjectsHeading;
