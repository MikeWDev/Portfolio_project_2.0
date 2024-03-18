import { createContext, useEffect, useState } from "react";
export const AdminContext = createContext(null);

const AdminContextProvider = (props) => {
  const contextValue = {};

  return (
    <AdminContext.Provider value={contextValue}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
