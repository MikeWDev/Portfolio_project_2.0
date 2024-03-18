import { createContext, useEffect, useState } from "react";

export const PortfolioContext = createContext(null);

const PortfolioContextProvider = (props) => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    const baseUrl = `${import.meta.env.VITE_SERVER_URL}`;
    fetch(`${baseUrl}/allprojects`)
      .then((res) => res.json())
      .then((data) => setAllProjects(data));
  }, []);
  const contextValue = {
    allProjects,
  };

  return (
    <PortfolioContext.Provider value={contextValue}>
      {props.children}
    </PortfolioContext.Provider>
  );
};
export default PortfolioContextProvider;
