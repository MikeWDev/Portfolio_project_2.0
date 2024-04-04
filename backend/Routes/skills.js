const express = require("express");
const router = express.Router();
const { getSkills, addSkill } = require("../Controllers/skillController");

//Getting all skills
router.get("/allskills", getSkills);
//Adding new skill
router.post("/addskill", addSkill);
