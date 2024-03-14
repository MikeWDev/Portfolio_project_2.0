import React from "react";

const PopUp = (props) => {
  return (
    <div className={`pop-up ${props.visClass}`}>
      <span className={`${props.aniClass}`}></span>
      <p>{props.text}</p>
    </div>
  );
};

export default PopUp;
