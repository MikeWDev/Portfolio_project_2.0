import React, { useState } from "react";
import { FileImage } from "@phosphor-icons/react";

const ImageInput = (props) => {
  const { imageFunction, image } = props;
  return (
    <div className="image-input">
      {image ? (
        <div className="img-field">
          <img src={image} alt="" />
          <span
            onClick={() => {
              imageFunction(null);
            }}
          >
            Remove
          </span>
        </div>
      ) : (
        <div className="file-input">
          <FileImage size={48} color="#ada9bb" />
          <input
            name="image"
            id="file-input"
            onChange={(e) => {
              const img = URL.createObjectURL(e.target.files[0]);
              imageFunction(img);
            }}
            type="file"
          />
        </div>
      )}
    </div>
  );
};

export default ImageInput;
