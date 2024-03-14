import React from "react";

const TechInfo = (props) => {
  return (
    <div className="tech-element">
      <div className="tech-info">
        <h4>{props.name}</h4>
      </div>
    </div>
  );
};

export default TechInfo;
