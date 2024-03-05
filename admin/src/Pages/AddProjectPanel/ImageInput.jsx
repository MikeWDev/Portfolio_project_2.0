import React from "react";
import { FileImage } from "@phosphor-icons/react";

const ImageInput = () => {
  return (
    <div className="image-input">
      <input type="file" />
      <FileImage size={48} color="#ada9bb" />
    </div>
  );
};

export default ImageInput;
