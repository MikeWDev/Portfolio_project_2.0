import React from "react";
import { FileImage } from "@phosphor-icons/react";
import ImageInput from "./ImageInput";
import SkillInput from "./SkillInput";
const ProjectInputs = ({
  changeHandler,
  projectData,
  image_url,
  setImage_url,
  addProject,
  dataSucces,
  setDataSucces,
}) => {
  return (
    <div className="inputs">
      <div className="text-inputs">
        <div className="add-label">
          <label htmlFor="title">Title*</label>
          <input
            value={projectData.title}
            onChange={changeHandler}
            name="title"
            type="text"
          />
        </div>
        <div className="add-label">
          <label htmlFor="title">Description*</label>
          <textarea
            value={projectData.desc}
            onChange={changeHandler}
            name="desc"
            rows={6}
            type="text"
          />
        </div>
        <div className="add-label">
          <label htmlFor="title">Website link*</label>
          <input
            value={projectData.web_link}
            onChange={changeHandler}
            type="text"
            name="web_link"
          />
        </div>
        <div className="add-label">
          <label htmlFor="title">Git-hub link*</label>
          <input
            value={projectData.git_link}
            onChange={changeHandler}
            name="git_link"
            type="text"
          />
          <div
            onClick={() => {
              addProject();
            }}
            className="button-con"
          >
            <button>Sumbit</button>
          </div>
        </div>
      </div>
      <div className="image-inputs">
        <div className="image-skill-input">
          <div className="image-input">
            {image_url ? (
              <div className="img-field">
                <img src={URL.createObjectURL(image_url)} alt="" />
                <span
                  onClick={() => {
                    setImage_url(null);
                  }}
                >
                  Remove
                </span>
              </div>
            ) : (
              <div className="file-input">
                <FileImage size={48} color="#ada9bb" />
                <input
                  onChange={(e) => {
                    setImage_url(e.target.files[0]);
                  }}
                  type="file"
                  name="image"
                  id="file-input"
                />
              </div>
            )}
          </div>
          <SkillInput
            dataSucces={dataSucces}
            setDataSucces={setDataSucces}
            changeHandler={changeHandler}
            projectData={projectData}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectInputs;
