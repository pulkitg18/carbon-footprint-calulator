import React, { createContext, useContext } from "react";
import { ScoreContextProvider } from "./score";

const AppContext = createContext();

export default function useAppContext() {
  return useContext(AppContext);
}

export const AppContextProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{}}>
      <ScoreContextProvider>{children}</ScoreContextProvider>
    </AppContext.Provider>
  );
};
