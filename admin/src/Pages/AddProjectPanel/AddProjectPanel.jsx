import React from "react";
import Button from "../../Components/Button";
import ImageInput from "./ImageInput";

const AddProjectPanel = () => {
  return (
    <div className="add-project-con">
      <div className="heading">
        <h2>Add new project</h2>
      </div>
      <div className="form-con">
        <form action="post">
          <div className="inputs">
            <div className="text-inputs">
              <div className="project-label">
                <label htmlFor="title">Title*</label>
                <input type="text" />
              </div>
              <div className="project-label">
                <label htmlFor="title">Description*</label>
                <textarea rows={8} type="text" />
              </div>
              <div className="project-label">
                <label htmlFor="title">Website link*</label>
                <input type="text" />
              </div>
              <div className="project-label">
                <label htmlFor="title">Git-hub link*</label>
                <input type="text" />
              </div>
            </div>
            <div className="image-inputs">
              <ImageInput />
            </div>
          </div>
          <Button text="Submit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProjectPanel;
