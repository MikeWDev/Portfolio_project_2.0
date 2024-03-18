import React, { useState } from "react";
import PopUp from "../../Components/PopUp";
import UsePopUp from "../../hooks/UsePopUp";
import ProjectInputs from "./ProjectInputs";
const AddProjectPanel = () => {
  const [image_url, setImage_url] = useState(null);
  const [dataSucces, setDataSucces] = useState(false);
  const { setPopUp, setVisible, popUp, visible } = UsePopUp();
  const [projectData, setProjectData] = useState({
    title: "",
    desc: "",
    web_link: "",
    git_link: "",
    image_url: "",
    skills: [],
  });
  const changeHandler = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };
  const serverUrl = `${import.meta.env.VITE_SERVER_URL}`;

  const addProject = async () => {
    let responseData;
    let project = projectData;
    let formData = new FormData();
    formData.append("project", image_url);
    await fetch(`${serverUrl}/upload`, {
      method: "POST",
      headers: {
        Accept: "aplication/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });

    function handlePopUp() {
      setVisible("visible-pop-up");
      setPopUp("ani");

      setTimeout(() => {
        setPopUp("");
        setVisible("opacity-pop-up");
      }, 4000);
    }
    if (responseData.success) {
      project.image_url = responseData.image_url;
      console.log(project);
      await fetch(`${serverUrl}/addproject`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(project),
      })
        .then((res) => res.json())
        .then((data) => {
          data.success ? handlePopUp() : alert("Nje");
          setProjectData({
            title: "",
            desc: "",
            web_link: "",
            git_link: "",
            image_url: "",
          });
          setImage_url(null);
          setDataSucces(true);
        });
    }
  };

  return (
    <div className="add-con">
      <PopUp text="Project added" aniClass={popUp} visClass={visible} />
      <div className="heading">
        <h2>Add new project</h2>
      </div>
      <div className="form-con">
        <div className="form">
          <ProjectInputs
            changeHandler={changeHandler}
            projectData={projectData}
            image_url={image_url}
            setImage_url={setImage_url}
            addProject={addProject}
            dataSucces={dataSucces}
            setDataSucces={setDataSucces}
          />
        </div>
      </div>
    </div>
  );
};

export default AddProjectPanel;
