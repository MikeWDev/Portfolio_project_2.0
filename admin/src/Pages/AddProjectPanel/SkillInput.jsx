import React, { useState } from "react";
import { useEffect } from "react";

let id = 1;
const SkillInput = ({ projectData, dataSucces, setDataSucces }) => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      skills.push({
        skill: skill,
      });
      setSkill("");
    }
  };
  useEffect(() => {
    if (dataSucces === true) {
      setSkills([]);
      setDataSucces(false);
    }
  }, [dataSucces]);

  return (
    <div className="skill-input">
      <div className="input">
        <label htmlFor="skill">Add skill</label>
        <input
          onKeyDown={handleKeyDown}
          value={skill}
          onChange={(e) => {
            setSkill(e.target.value);
          }}
          name="skill"
          type="text"
        />
        <button
          onClick={() => {
            skills.push({
              skill: skill,
            });
            setSkill("");
            projectData.skills = skills;
          }}
        >
          Add
        </button>
      </div>
      <div className="display">
        {skills &&
          skills.map((singleSkill, i) => {
            return (
              <p
                key={i}
                onClick={() => {
                  setSkills(
                    skills.filter((a) => a.skill !== singleSkill.skill)
                  );
                }}
              >
                {singleSkill.skill}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default SkillInput;
