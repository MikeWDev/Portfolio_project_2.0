import { DownloadSimple } from "@phosphor-icons/react";
import React from "react";
import cv from "../../assets/Components/Michal_Kocik_CV_EN.pdf";
const CvDownload = () => {
  return (
    <div className="cv-download">
      <a href={cv} download="Michał_Kocik_CV_EN.pdf">
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
