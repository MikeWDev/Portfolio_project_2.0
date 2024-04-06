import { createContext, useEffect, useState } from "react";

export const PortfolioContext = createContext(null);

const PortfolioContextProvider = (props) => {
  const [allProjects, setAllProjects] = useState([]);
  const [allSkills, setAllSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseUrl = `${import.meta.env.VITE_SERVER_URL}`;
    fetch(`${baseUrl}/allprojects`)
      .then((res) => res.json())
      .then((data) => {
        let projects = data.toReversed();
        setAllProjects(projects);
        setLoading(true);
      });
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/allskills`)
      .then((res) => res.json())
      .then((data) => setAllSkills(data), setLoading(true));
  }, []);

  const contextValue = {
    allProjects,
    loading,
    allSkills,
  };

  return (
    <PortfolioContext.Provider value={contextValue}>
      {props.children}
    </PortfolioContext.Provider>
  );
};
export default PortfolioContextProvider;
