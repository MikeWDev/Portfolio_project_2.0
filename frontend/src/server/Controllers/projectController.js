const Project = require("../Models/ProjectModel");
const mongoose = require("mongoose");

//Get all projects
const getProjects = async (req, res) => {
  let projects = await Project.find({});
  console.log("All projects fetched");
  res.send(projects);
};

//Add new project
const addProject = async (req, res) => {
  let projects = await Project.find({});
  let id;
  if (projects.length > 0) {
    let lastProjectArray = projects.slice(-1);
    let lastProject = lastProjectArray[0];
    id = lastProject.id + 1;
  } else {
    id = 1;
  }
  const project = new Project({
    id: id,
    title: req.body.title,
    desc: req.body.desc,
    web_link: req.body.web_link,
    git_link: req.body.git_link,
    image_url: req.body.image_url,
    skills: req.body.skills,
  });

  await project.save();
  console.log("Saved");
  res.json({
    success: true,
    name: req.body.name,
  });
};
//Multer storage for project images

module.exports = { getProjects, addProject };
