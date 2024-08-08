const Message = require("../Models/MessageModel");
const mongoose = require("mongoose");

const getMessages = async (req, res) => {
  let messages = await Message.find({});
  console.log("All messages fetched");
  res.send(messages);
};
const sendMessage = async (req, res) => {
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
};

module.exports = { getMessages, sendMessage };
