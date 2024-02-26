import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactForm from "./Pages/ContactPage/ContactForm";
import ContactPage from "./Pages/ContactPage/ContactPage";
import HeroPage from "./Pages/HeroPage/HeroPage";
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage";
import SkillPage from "./Pages/SkillPage/SkillPage";
import "./Styles/Css/App.css";

function App() {
  return (
    <>
      <HeroPage />
      <AboutPage />
      <SkillPage />
      <PortfolioPage />
      <ContactPage />
    </>
  );
}

export default App;
