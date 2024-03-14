import { PushPinSimple, Trash } from "@phosphor-icons/react";
import React from "react";

const Message = (props) => {
  return (
    <div className="message-con">
      <div className="name-con">
        <div className="name">
          <h3>{props.name}</h3>
        </div>
        <div className="menage-icons">
          <div className="svg">
            <PushPinSimple size={24} color="#ada9bb" />
          </div>
          <div className="svg">
            <Trash size={24} color="#ada9bb" />
          </div>
        </div>
      </div>
      <div className="email">
        <p>{props.eMail}</p>
      </div>
      <div className="message">
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Message;
