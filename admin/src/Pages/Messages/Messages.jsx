import React from "react";
import Message from "./Message";
import { useState } from "react";
import { useEffect } from "react";

const Messages = () => {
  const [allMessages, setAllMessages] = useState([]);
  useEffect(() => {
    const serverUrl = `${import.meta.env.VITE_SERVER_URL}`;
    fetch(`${serverUrl}/allmessages`)
      .then((res) => res.json())
      .then((data) => setAllMessages(data));
  }, []);
  console.log(allMessages);
  return (
    <div className="messages-con">
      <div className="heading">
        <h2>Messages</h2>
      </div>
      <div className="messages-con">
        {allMessages &&
          allMessages.map((mess, i) => {
            return (
              <Message
                name={mess.name}
                eMail={mess.eMail}
                message={mess.message}
                key={i}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Messages;
