const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
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
//Routes
app.use("/", messageRoutes);
app.use("/", projectRoutes);
app.use("/", skillRoutes);
