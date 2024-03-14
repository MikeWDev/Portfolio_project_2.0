import { DownloadSimple } from "@phosphor-icons/react";
import React from "react";

const CvDownload = () => {
  return (
    <div className="cv-download">
      <a
        href="frontend\src\assets\Components\KDev-logo.png"
        download="user-img.jpg"
      >
        <div className="text">
          CV
          <div className="svg">
            <DownloadSimple color="#fff" weight="bold" />
          </div>
        </div>
      </a>
      <div className="third-ellipse"></div>
    </div>
  );
};

export default CvDownload;
