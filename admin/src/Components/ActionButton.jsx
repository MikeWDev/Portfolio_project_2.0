import React from "react";
import { HouseSimple } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
const Actionbutton = (props) => {
  return (
    <div className="action-btn">
      <NavLink to={props.to}>
        <div className="action-svg">{props.icon}</div>
        <div className="action-name">
          <p>{props.name}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Actionbutton;
