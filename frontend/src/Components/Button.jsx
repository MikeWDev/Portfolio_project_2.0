import React from "react";

const Button = (props) => {
  return (
    <div className="button-con">
      <button className={`${props.class}`}>
        <a href="">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {props.text}
        </a>
      </button>
    </div>
  );
};

export default Button;
