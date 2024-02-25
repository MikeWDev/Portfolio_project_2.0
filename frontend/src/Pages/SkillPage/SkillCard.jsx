import React from "react";

const SkillCard = (props) => {
  return (
    <div className="skill-card-con">
      <div className="skill-name">
        <div className="skill-svg">
          <div className="svg">{props.svg}</div>
        </div>
        <h4>{props.name}</h4>
      </div>
    </div>
  );
};

export default SkillCard;
