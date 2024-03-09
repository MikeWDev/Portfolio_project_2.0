import React from "react";

const Button = (props) => {
  return (
    <div className="button-con">
      <button onClick={props.function} className={`${props.class}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
