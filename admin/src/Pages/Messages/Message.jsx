import { PushPinSimple, Trash } from "@phosphor-icons/react";
import React from "react";

const Message = () => {
  return (
    <div className="message-con">
      <div className="name-con">
        <div className="name">
          <h3>Gosia Zwierzyńska</h3>
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
        <p>gosia.zwierzyńska@gmail.com</p>
      </div>
      <div className="message">
        <p>
          Hi Michal, Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Animi assumenda rem quaerat delectus nemo unde consequuntur numquam
          est fuga tenetur! est fuga tenetur! est fuga tenetur! est fuga
          tenetur! est fuga tenetur! tenetur! est fuga tenetur! tenetur! est
          fuga tenetur! tenetur! est fuga tenetur! tenetur! est fuga tenetur!
          tenetur! est fuga tenetur! tenetur! est fuga tenetur! tenetur! est
          fuga tenetur! tenetur! est fuga tenetur! tenetur! est fuga tenetur!
          tenetur! est fuga tenetur! tenetur! est fuga tenetur!
        </p>
      </div>
    </div>
  );
};

export default Message;
