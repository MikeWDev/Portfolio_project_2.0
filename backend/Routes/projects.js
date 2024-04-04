const express = require("express");
const router = express.Router();
const { getProjects, addProject } = require("../Controllers/projectController");

//Get all projects
router.get("/allprojects", getProjects);
//Add new project
router.get("/addproject", addProject);

module.exports = router;
