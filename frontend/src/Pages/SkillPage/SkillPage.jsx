import React from "react";
import SkillCard from "./SkillCard";
import { PaintBrush } from "@phosphor-icons/react/dist/ssr";
import { CodeBlock, Database, Wrench } from "@phosphor-icons/react";
import SkillBar from "./SkillBar";

const SkillPage = () => {
  return (
    <section>
      <div className="skill">
        <div className="content-con">
          <div className="skill-con">
            <div className="skill-heading">
              <h2>Technical Proficiency</h2>
            </div>
            <div className="skill-cards">
              <SkillCard
                name="Web Desing"
                svg={<PaintBrush color="#fff" size={25} />}
              />
              <SkillCard
                name="Frontend"
                svg={<CodeBlock color="#fff" size={25} />}
              />
              <SkillCard
                name="Backend"
                svg={<Database color="#fff" size={25} />}
              />
              <SkillCard name="Tools" svg={<Wrench color="#fff" size={25} />} />
            </div>
          </div>
          <div className="bar-con">
            <div className="bar-heading">
              <h3>Backend</h3>
            </div>
            <div className="bar-con">
              <SkillBar title="Node.js" dataProgress="90" />
              <SkillBar title="Express.js" dataProgress="70" />
              <SkillBar title="Mongo DB" dataProgress="60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillPage;
