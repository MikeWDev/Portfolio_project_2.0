import React from "react";

const Button = (props) => {
  return (
    <div className="button-con">
      <button>{props.text}</button>
    </div>
  );
};

export default Button;
