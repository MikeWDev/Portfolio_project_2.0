import React, { useState } from "react";
import { FileImage } from "@phosphor-icons/react";
import dummyimg from "../../assets/user-img.jpg";
const ImageInput = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="image-input">
      {selectedImg ? (
        <div className="img-field">
          <img src={selectedImg} alt="" />
          <span
            onClick={() => {
              setSelectedImg(null);
            }}
          >
            Remove
          </span>
        </div>
      ) : (
        <div className="file-input">
          <FileImage size={48} color="#ada9bb" />
          <input
            onChange={(e) => {
              const img = URL.createObjectURL(e.target.files[0]);
              setSelectedImg(img);
            }}
            type="file"
          />
        </div>
      )}
    </div>
  );
};

export default ImageInput;
