import React from "react";
import SkillCard from "./SkillCard";
import { PaintBrush } from "@phosphor-icons/react/dist/ssr";
import { CodeBlock, Database, Wrench } from "@phosphor-icons/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SkillCardsSlickSlider = ({ category, setCategory }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="skill-cards">
      <Slider {...settings}>
        <SkillCard
          active={category && category === "Webdesign" ? "active" : " "}
          name="Web Desing"
          svg={<PaintBrush color="#fff" />}
          click={() => {
            setCategory("Webdesign");
          }}
        />

        <SkillCard
          active={category && category === "FrontEnd" ? "active" : " "}
          name="Frontend"
          svg={<CodeBlock color="#fff" />}
          click={() => {
            setCategory("FrontEnd");
          }}
        />

        <SkillCard
          active={category && category === "BackEnd" ? "active" : " "}
          name="Backend"
          svg={<Database color="#fff" />}
          click={() => {
            setCategory("BackEnd");
          }}
        />

        <SkillCard
          active={category && category === "SoftSkills" ? "active" : " "}
          name="Tools"
          svg={<Wrench color="#fff" />}
          click={() => {
            setCategory("SoftSkills");
          }}
        />
      </Slider>
    </div>
  );
};

export default SkillCardsSlickSlider;
