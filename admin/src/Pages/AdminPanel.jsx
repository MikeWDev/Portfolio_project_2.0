import React from "react";
import Aside from "./Aside/Aside";
import MainPanel from "./MainPanel/MainPanel";

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
