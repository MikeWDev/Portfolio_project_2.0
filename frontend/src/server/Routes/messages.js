const express = require("express");
const router = express.Router();
const {
  getMessages,
  sendMessage,
} = require("../Controllers/messageController");

//Getting all messages
router.get("/allmessages", getMessages);

//Posting new message
router.post("/sendmessage", sendMessage);

module.exports = router;
