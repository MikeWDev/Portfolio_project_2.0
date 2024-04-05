const express = require("express");
const router = express.Router();
const {
  getProjects,
  addProject,
  uploadImage,
} = require("../Controllers/projectController");

//Get all projects
router.get("/allprojects", getProjects);
//Add new project
router.post("/addproject", addProject);

module.exports = router;
