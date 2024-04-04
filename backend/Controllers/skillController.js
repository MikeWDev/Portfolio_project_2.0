const Skill = require("../Models/SkillModel");
const mongoose = require("mongoose");

//Get skills
const getSkills = async (req, res) => {
  let skills = await Skill.find({});
  console.log("All skills fetched");
  res.send(skills);
};
//Add new skill
const addSkill = async (req, res) => {
  const skill = new Skill({
    name: req.body.name,
    category: req.body.category,
    progress: req.body.progress,
  });
  await skill.save();
  console.log("Saved");
  res.json({
    succes: true,
    name: req.body.name,
  });
};

module.exports = { getSkills, addSkill };
