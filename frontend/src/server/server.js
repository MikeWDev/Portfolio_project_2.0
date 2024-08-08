const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const functions = require("firebase-functions");

//Routes
const messageRoutes = require("./Routes/messages");
const projectRoutes = require("./Routes/projects");
const skillRoutes = require("./Routes/skills");

// Server setup
const app = express();
app.use(express.json());
app.use(cors());

// Database connection
const mongoUri = functions.config().mongo_uri.key;
mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Multer disk storage
// const storage = multer.diskStorage({
//   destination: "./upload/projectImages",
//   filename: (req, file, cb) => {
//     return cb(
//       null,
//       `${file.originalname.replace(/\.[^/.]+$/, "")}${path.extname(
//         file.originalname
//       )}`
//     );
//   },
// });

// const upload = multer({ storage: storage });
app.use("/projectImages", express.static("upload/projectImages"));

// app.post("/upload", upload.single("project"), (req, res) => {
//   res.json({
//     success: 1,
//     image_url: `${functions.config().server.url}/projectImages/${
//       req.file.filename
//     }`, // Change to functions.config().server.url
//   });
// });
// comment
// Routes
app.use("/", messageRoutes);
app.use("/", projectRoutes);
app.use("/", skillRoutes);

// Export the Express app as a Firebase Function
exports.api = functions.https.onRequest(app);
