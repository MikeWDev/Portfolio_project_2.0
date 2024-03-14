import React from "react";
import PopUp from "../../Components/PopUp";
import UsePopUp from "../../hooks/UsePopUp";
import { useState, useEffect } from "react";
const AddSkill = () => {
  const { setPopUp, setVisible, popUp, visible } = UsePopUp();
  const [skillData, setSkillData] = useState({
    name: "",
    category: "",
    progress: "",
  });
  const changeHandler = (e) => {
    setSkillData({ ...skillData, [e.target.name]: e.target.value });
  };

  const addSkill = async () => {
    let skill = skillData;
    await fetch("http://localhost:3000/addskill", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(skill),
    })
      .then((res) => res.json())
      .then((data) => {
        data.success ? alert("Nje") : handlePopUp();
        setSkillData({
          name: "",
          // category: "",
          progress: "",
        });
      });
  };
  function handlePopUp() {
    setVisible("visible-pop-up");
    setPopUp("ani");

    setTimeout(() => {
      setPopUp("");
      setVisible("opacity-pop-up");
    }, 4000);
  }
  console.log(skillData.category);
  console.log(skillData.category);
  return (
    <div className="add-con">
      <PopUp text="Skill added" aniClass={popUp} visClass={visible} />
      <div className="heading">
        <h2>Add new skill</h2>
      </div>
      <div className="form-con">
        <div className="form">
          <div className="inputs">
            <div className="text-inputs">
              <div className="add-label">
                <label htmlFor="name">Name*</label>
                <input
                  value={skillData.name}
                  onChange={changeHandler}
                  name="name"
                  type="text"
                />
              </div>

              <div className="add-label">
                <label htmlFor="category">Category</label>
                <select
                  value={skillData.category}
                  onChange={changeHandler}
                  name="category"
                >
                  <option value="Webdesign">Web Design</option>
                  <option value="FrontEnd">FrontEnd</option>
                  <option value="BackEnd">Backend</option>
                  <option value="Tools">Tools</option>
                </select>
              </div>
              <div className="add-label">
                <label htmlFor="progress">Progress</label>
                <input
                  value={skillData.progress}
                  onChange={changeHandler}
                  name="progress"
                />
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              addSkill();
            }}
            className="button-con"
          >
            <button>Sumbit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSkill;
