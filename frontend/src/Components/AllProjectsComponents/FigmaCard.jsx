import React, { useState } from "react";
import img from "/prototype.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
const FigmaCard = () => {
  const [isActive, setIsActive] = useState(false);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CaretRight size={84} color="#fff" weight="bold" />,
    prevArrow: <CaretLeft size={84} color="#fff" weight="bold" />,
  };
  return (
    <div className="figma-card">
      <div className="figma-card-heading">
        <h4>Section still in build stay tuned!</h4>
      </div>
      <div className={`front-img `}>
        <Slider {...settings}>
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="img">
            <img src={img} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default FigmaCard;
