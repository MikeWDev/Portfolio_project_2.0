import React from "react";

const SkillCard = (props) => {
  return (
    <div onClick={props.click} className={`skill-card-con ${props.active}`}>
      <div className="skill-name">
        <div className="skill-svg">
          <div className="svg">{props.svg}</div>
        </div>
        <h4 className={props.active}>{props.name}</h4>
      </div>
    </div>
  );
};

export default SkillCard;
