const multer = require("multer");
const path = require("path");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const Project = require("./Models/ProjectModel");
const Message = require("./Models/MessageModel");
const Skill = require("./Models/SkillModel");
require("dotenv").config();
const functions = require("firebase-functions");
//Models

const app = express();

app.use(express.json());
app.use(cors());

//Db connection
mongoose.connect(process.env.MONGO_URI);

//Api
const port = process.env.PORT;
app.listen(port, (err) => {
  if (!err) {
    console.log("Server running");
  } else {
    console.log("An error has occured during connection process" + err);
  }
});
//Image storage engine
const storage = multer.diskStorage({
  destination: "./upload/project-images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });
app.use("/project-images", express.static("upload/project-images"));
app.post("/upload", upload.single("project"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/project-images/${req.file.filename}`,
  });
});
// Adding new project
app.post("/addproject", async (req, res) => {
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
});
//Getting all projects
app.get("/allprojects", async (req, res) => {
  let projects = await Project.find({});
  console.log("All projects fetched");
  res.send(projects);
});

//Adding a new message

app.post("/sendmessage", async (req, res) => {
  const message = new Message({
    name: req.body.name,
    eMail: req.body.eMail,
    message: req.body.message,
  });
  await message.save();
  console.log("Saved");
  res.json({
    succes: true,
    name: req.body.name,
  });
});
//Getting all messages
app.get("/allmessages", async (req, res) => {
  let messages = await Message.find({});
  console.log("All messages fetched");
  res.send(messages);
});
//Skill
app.get("/allskills", async (req, res) => {
  let skills = await Skill.find({});
  console.log("All skills fetched");
  res.send(skills);
});
app.post("/addskill", async (req, res) => {
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
});

exports.app = functions.https.onRequest(app);
