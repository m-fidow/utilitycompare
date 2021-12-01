import React, { useContext, useState } from "react";
const url = "https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals";
const AppContext = React.createContext();
function AppProvider({ children }) {
  return <AppContext.Provider value="">{children}</AppContext.Provider>;
}
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
