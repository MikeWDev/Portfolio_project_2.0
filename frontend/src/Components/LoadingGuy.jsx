import React from "react";
import macarenaGuy from "../assets/Components/macarena-gif.gif";
const LoadingGuy = () => {
  return (
    <div className="loading-guy-con">
      <div className="loading-guy-img">
        <img src={macarenaGuy} alt="" />
        <p>
          Fetching data...
          <br />
          Meanwhile enjoy the show!
        </p>
      </div>
    </div>
  );
};

export default LoadingGuy;
