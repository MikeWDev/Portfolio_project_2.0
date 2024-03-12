import React, { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import { PaintBrush } from "@phosphor-icons/react/dist/ssr";
import { CodeBlock, Database, Wrench } from "@phosphor-icons/react";
import SkillBar from "./SkillBar";

const SkillPage = () => {
  const [allSkills, setAllSkills] = useState([]);
  const [category, setCategory] = useState("Web Design");
  const [selectedSkill, setSelectedSkill] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/allskills")
      .then((res) => res.json())
      .then((data) => setAllSkills(data));
  }, []);

  useEffect(() => {
    const filtred = allSkills.filter(
      (item) => {
        return item.category === category;
      },
      [category]
    );

    setSelectedSkill(filtred);
  }, [category]);
  console.log(selectedSkill);
  return (
    <section>
      <div id="skill" className="skill">
        <div className="content-con">
          <div className="skill-con">
            <div className="skill-heading">
              <h2>Technical Proficiency</h2>
            </div>
            <div className="skill-cards">
              <SkillCard
                active={category && category === "Webdesign" ? "active" : " "}
                name="Web Desing"
                svg={<PaintBrush color="#fff" size={25} />}
                click={() => {
                  setCategory("Webdesign");
                }}
              />
              <SkillCard
                active={category && category === "FrontEnd" ? "active" : " "}
                name="Frontend"
                svg={<CodeBlock color="#fff" size={25} />}
                click={() => {
                  setCategory("FrontEnd");
                }}
              />
              <SkillCard
                active={category && category === "BackEnd" ? "active" : " "}
                name="Backend"
                svg={<Database color="#fff" size={25} />}
                click={() => {
                  setCategory("BackEnd");
                }}
              />
              <SkillCard
                active={category && category === "Tools" ? "active" : " "}
                name="Tools"
                svg={<Wrench color="#fff" size={25} />}
                click={() => {
                  setCategory("Tools");
                }}
              />
            </div>
          </div>
          <div className="bar-con">
            <div className="bar-heading">
              <h3>{category}</h3>
            </div>
            <div className="bar-con">
              {selectedSkill &&
                selectedSkill.map((skill, i) => {
                  return (
                    <SkillBar
                      title={skill.name}
                      dataProgress={skill.progress}
                      key={i}
                      dep={selectedSkill}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillPage;
