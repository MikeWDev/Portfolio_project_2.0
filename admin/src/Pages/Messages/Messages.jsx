import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <div className="messages-con">
      <div className="heading">
        <h2>Messages</h2>
      </div>
      <div className="messages-con">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  );
};

export default Messages;
