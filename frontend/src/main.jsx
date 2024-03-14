import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Scss/index.scss";
import PortfolioContextProvider from "./Context/PortfolioContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PortfolioContextProvider>
      <App />
    </PortfolioContextProvider>
  </React.StrictMode>
);
