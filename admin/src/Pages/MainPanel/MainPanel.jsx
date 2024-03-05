import React from "react";

import { Outlet } from "react-router-dom";

const MainPanel = () => {
  return (
    <div className="main-panel">
      <Outlet />
    </div>
  );
};

export default MainPanel;
