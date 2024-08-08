const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
require("dotenv").config();
//Routes
const messageRoutes = require("./Routes/messages");
const projectRoutes = require("./Routes/projects");
const skillRoutes = require("./Routes/skills");
//Server setup
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

//Multer disk storage
const TimeElapsed = Date.now();
const today = new Date(TimeElapsed).toLocaleDateString();
console.log(today);
const storage = multer.diskStorage({
  destination: "./upload/projectImages",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.originalname.replace(/\.[^/.]+$/, "")}${path.extname(
        file.originalname
      )}`
    );
  },
});

const upload = multer({ storage: storage });
app.use("/projectImages", express.static("upload/projectImages"));
app.post("/upload", upload.single("project"), (req, res) => {
  res.json({
    success: 1,
    image_url: `${process.env.SERVER_URL}/projectImages/${req.file.filename}`,
  });
});
//Routes
app.use("/", messageRoutes);
app.use("/", projectRoutes);
app.use("/", skillRoutes);
