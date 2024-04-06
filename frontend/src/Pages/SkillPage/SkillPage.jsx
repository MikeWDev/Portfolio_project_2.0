import React, { useContext, useEffect, useState } from "react";
import SkillBar from "./SkillBar";
import SkillCards from "./SkillCards";
import SkillCardsSlickSlider from "./SkillCardsSlickSlider";
import LoadingGuy from "../../Components/LoadingGuy";
import { PortfolioContext } from "../../Context/PortfolioContext";

const SkillPage = () => {
  const [category, setCategory] = useState("Webdesign");
  const [selectedSkill, setSelectedSkill] = useState([]);
  const { allSkills, loading } = useContext(PortfolioContext);
  useEffect(() => {
    const filtred = allSkills.filter(
      (item) => {
        return item.category === category;
      },
      [category]
    );
    setSelectedSkill(filtred);
  }, [allSkills, category]);

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
              <h3>
                {category === "FrontEnd"
                  ? "Frontend"
                  : category === "BackEnd"
                  ? "BackEnd"
                  : category === "Webdesign"
                  ? "Web design"
                  : category === "SoftSkills"
                  ? "Soft Skills"
                  : ""}
              </h3>
            </div>
            <div className="bar-con">
              {loading === false ? (
                <LoadingGuy />
              ) : (
                selectedSkill &&
                selectedSkill.map((skill, i) => {
                  return (
                    <SkillBar
                      title={skill.name}
                      dataProgress={skill.progress}
                      key={i}
                      dep={selectedSkill}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillPage;
