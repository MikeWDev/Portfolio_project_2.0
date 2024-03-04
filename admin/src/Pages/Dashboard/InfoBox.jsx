import React from "react";
import user from "../../assets/user-img.jpg";
const InfoBox = () => {
  return (
    <div>
      <div className="info-box">
        <div className="info-img">
          <img src={user} alt="" />
        </div>
        <div className="info-msg">
          <p>
            Build still in progress
            <br />
            Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
