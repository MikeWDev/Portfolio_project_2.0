import { DownloadSimple } from "@phosphor-icons/react";
import React from "react";

const CvDownload = () => {
  return (
    <div className="cv-download">
      <div className="text">CV</div>
      <div className="svg">
        <DownloadSimple size={24} color="#fff" weight="bold" />
      </div>
      <div className="third-ellipse"></div>
    </div>
  );
};

export default CvDownload;
