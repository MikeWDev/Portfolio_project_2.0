import React from "react";
import HeroPage from "./HeroPage/HeroPage";
import PortfolioPage from "./PortfolioPage/PortfolioPage";
import SkillPage from "./SkillPage/SkillPage";
import Navbar from "../Components/Navbar/NavBar";
import AboutPage from "./AboutPage/AboutPage";
import ContactPage from "./ContactPage/ContactPage";
const MainPage = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <AboutPage />
      <SkillPage />
      <PortfolioPage />
      <ContactPage />
    </>
  );
};

export default MainPage;
