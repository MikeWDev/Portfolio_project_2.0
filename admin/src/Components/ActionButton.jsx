import React from "react";
import { HouseSimple } from "@phosphor-icons/react";
const Actionbutton = (props) => {
  return (
    <div className="action-btn">
      <div className="action-svg">{props.icon}</div>
      <div className="action-name">
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default Actionbutton;
