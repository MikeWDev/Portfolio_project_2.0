import { MapPinLine } from "@phosphor-icons/react";
import React from "react";

const SocialElement = (props) => {
  return (
    <div className="social">
      <div className="social-icon">{props.svg}</div>
      <div className="social-info">
        <p>{props.data}</p>
      </div>
    </div>
  );
};

export default SocialElement;
