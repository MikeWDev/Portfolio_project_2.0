import { Code, Info, X } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import TechInfo from "./TechInfo";

const ProjectCard = (props) => {
  const [visibleState, setVisibleState] = useState(true);
  const [visibleClass, setVisibleClass] = useState("");

  useEffect(() => {
    if (visibleState === false) {
      setVisibleClass("visible");
    } else {
      setVisibleClass("");
    }
  }, [visibleState]);
  console.log(props.build);
  return (
    <div className="project-card">
      <div className="image-con">
        <div className={`tech-overlap ${visibleClass}`}>
          <div className={`tech-con ${visibleClass}`}>
            {props.skills &&
              props.skills.map((skill, i) => {
                return <TechInfo name={skill.skill} key={i} />;
              })}
          </div>
        </div>
        <div
          className={`info-project ${
            props.build === true ? "info-project-visible" : " "
          } `}
        >
          <div className="svg-con">
            <div className="svg">
              <Info color="#fff" />
            </div>
            <span className="span-delay">Project still in build</span>
          </div>
        </div>
        <img className={`blur ${visibleClass}`} src={props.image_url} alt="" />
      </div>

      <div className={`info-con `}>
        <div className="info">
          <div className="header-con">
            <div className={`heading `}>
              <h4>{props.title}</h4>
              <div className="button-anchor">
                <div className={`tech-info-button `}>
                  <div
                    onClick={() => {
                      setVisibleState(!visibleState);
                    }}
                    className="svg"
                  >
                    {visibleState === true ? (
                      <Code color="#fff" weight="bold" />
                    ) : (
                      <X color="#fff" weight="bold" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`desc-con `}>
            <p>{props.desc}</p>
          </div>
        </div>
        <div className={`button-con `}>
          <a href={props.web_link} target="_blank">
            <Button class="primary" text="Visit website" />
          </a>
          <a href={props.git_link} target="_blank">
            <Button class="secondary" text="See the code" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
