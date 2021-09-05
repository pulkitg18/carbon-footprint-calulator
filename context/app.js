import React, { createContext, useContext, useEffect, useState } from "react";
import API from "../api/axios";
import { auth } from "../lib/firebase";
import { ScoreContextProvider } from "./score";

const AppContext = createContext();

export default function useAppContext() {
  return useContext(AppContext);
}

export const AppContextProvider = ({ children }) => {
  const [appState, setAppState] = useState("loading");
  const [user, setUser] = useState({});
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (user?.email) {
      API.get("/email", { params: { email: user.email } }).then((res) =>
        setUserDetails(res.data)
      );
    }
  }, [user]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAppState("home");
        setUser(user);
        console.log(user);
      } else {
        setAppState("login");
        setUserDetails(null);
        setUser(null);
        console.log("no user");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AppContext.Provider value={{ appState, userDetails, setUserDetails }}>
      <ScoreContextProvider>{children}</ScoreContextProvider>
    </AppContext.Provider>
  );
};
