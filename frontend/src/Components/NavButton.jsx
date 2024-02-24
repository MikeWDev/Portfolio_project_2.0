import React from "react";

const NavButton = (props) => {
  return (
    <div className="nav-button-con">
      <button>{props.text}</button>
    </div>
  );
};

export default NavButton;
