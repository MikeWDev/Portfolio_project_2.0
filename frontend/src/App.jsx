import Navbar from "./Components/NavBar";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Footer from "./Pages/Footer/Footer";
import HeroPage from "./Pages/HeroPage/HeroPage";
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage";
import SkillPage from "./Pages/SkillPage/SkillPage";
import "./Styles/Css/App.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function App() {
  // useEffect(() => {
  //   const registerAnimations = () => {
  //     const sr = ScrollReveal({
  //       origin: "bottom",
  //       distance: "50px",
  //       duration: 1000,
  //       reset: false,
  //     });
  //     sr.reveal(
  //       `

  //     .home,
  //     .about,
  //     .skill,
  //     .portfolio,
  //     .contact-con,

  //     footer
  // `,
  //       {
  //         interval: 500,
  //       }
  //     );
  //   };
  //   registerAnimations();
  // }, []);
  return (
    <>
      <Navbar />
      <HeroPage />
      <AboutPage />
      <SkillPage />
      <PortfolioPage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
