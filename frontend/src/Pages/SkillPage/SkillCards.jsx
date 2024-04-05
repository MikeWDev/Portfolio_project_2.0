import React from "react";
import SkillCard from "./SkillCard";
import { PaintBrush } from "@phosphor-icons/react/dist/ssr";
import { CodeBlock, Database, Wrench } from "@phosphor-icons/react";
const SkillCards = ({ category, setCategory }) => {
  return (
    <div className="skill-cards">
      <SkillCard
        active={category && category === "Webdesign" ? "active" : " "}
        name="Web Desing"
        svg={<PaintBrush color="#fff" size={25} />}
        click={() => {
          setCategory("Webdesign");
        }}
      />
      <SkillCard
        active={category && category === "FrontEnd" ? "active" : " "}
        name="Frontend"
        svg={<CodeBlock color="#fff" size={25} />}
        click={() => {
          setCategory("FrontEnd");
        }}
      />
      <SkillCard
        active={category && category === "BackEnd" ? "active" : " "}
        name="Backend"
        svg={<Database color="#fff" size={25} />}
        click={() => {
          setCategory("BackEnd");
        }}
      />
      <SkillCard
        active={category && category === "SoftSkills" ? "active" : " "}
        name="Soft skills"
        svg={<Wrench color="#fff" size={25} />}
        click={() => {
          setCategory("Tools");
        }}
      />
    </div>
  );
};

export default SkillCards;
