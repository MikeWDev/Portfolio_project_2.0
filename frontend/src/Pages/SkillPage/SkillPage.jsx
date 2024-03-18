import React, { useEffect, useState } from "react";

import SkillBar from "./SkillBar";
import SkillCards from "./SkillCards";
import SkillCardsSlickSlider from "./SkillCardsSlickSlider";

const SkillPage = () => {
  const [allSkills, setAllSkills] = useState([]);
  const [category, setCategory] = useState("Web Design");
  const [selectedSkill, setSelectedSkill] = useState([]);

  useEffect(() => {
    const baseUrl = `${import.meta.env.VITE_SERVER_URL}`;
    fetch(`${import.meta.env.VITE_SERVER_URL}/allskills`)
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
  }, [category, allSkills]);

  return (
    <section>
      <div id="skill" className="skill">
        <div className="skill-heading">
          <h2>Technical Proficiency</h2>
        </div>
        <div className="content-con">
          <div className="skill-con">
            <SkillCardsSlickSlider
              category={category}
              setCategory={setCategory}
            />
            <SkillCards category={category} setCategory={setCategory} />
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
