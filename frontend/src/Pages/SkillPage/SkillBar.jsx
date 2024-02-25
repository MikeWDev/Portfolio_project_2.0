import React, { useEffect } from "react";
import $ from "jquery";

const SkillBar = (props) => {
  useEffect(() => {
    $(".skill-bar span").each(function () {
      $(this).animate(
        {
          width: $(this).attr("data-progress") + "%",
        },
        1000
      );
      $(this).text($(this).attr("data-progress") + "%");
    });
  }, []);
  return (
    <div className="skill-bar-con">
      <div className="bar-heading">
        <h4>{props.title}</h4>
        <h4>{props.dataProgress} %</h4>
      </div>
      <div className="skill-bar">
        <span data-progress={`${props.dataProgress}`}></span>
      </div>
    </div>
  );
};

export default SkillBar;
