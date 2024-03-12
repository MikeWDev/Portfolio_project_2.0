import { Code, X } from "@phosphor-icons/react";
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

  console.log(visibleClass);
  return (
    <div className="project-card">
      <div className="image-con">
        <div className={`tech-overlap ${visibleClass}`}>
          <div className={`tech-con ${visibleClass}`}>
            <TechInfo />
            <TechInfo />
            <TechInfo />
            <TechInfo />
            <TechInfo />
            <TechInfo />
            <TechInfo />
            <TechInfo />
            <TechInfo />
            <TechInfo />
            <TechInfo />
            <TechInfo />
            <TechInfo />
            <TechInfo />
            <TechInfo />
            <TechInfo />
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
          <Button
            web_link={props.web_link}
            class="primary"
            text="Visit website"
          />
          <Button
            web_link={props.web_link}
            class="secondary"
            text="See the code"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
