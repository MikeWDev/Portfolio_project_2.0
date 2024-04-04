import { DownloadSimple } from "@phosphor-icons/react";
import React from "react";
import cv from "../../assets/Components/Michał_Kocik_CV.pdf";
const CvDownload = () => {
  return (
    <div className="cv-download">
      <a href={cv} download="Michał_Kocik_CV.pdf">
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
