import React from "react";
import Aside from "./Aside/Aside";
import MainPanel from "./MainPanel/MainPanel";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const AdminPanel = () => {
  return (
    <>
      <div className="admin-container">
        <Aside />
        <MainPanel />
      </div>
    </>
  );
};

export default AdminPanel;
