import React from "react";
import { useState } from "react";
const usePopUp = () => {
  const [popUp, setPopUp] = useState("");
  const [visible, setVisible] = useState("");

  return { popUp, setPopUp, visible, setVisible };
};

export default usePopUp;
