import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Scss/style.scss";
import AdminContextProvider from "./context/AdminContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdminContextProvider>
      <App />
    </AdminContextProvider>
  </React.StrictMode>
);
