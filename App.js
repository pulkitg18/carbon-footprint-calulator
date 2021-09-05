import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { AppContextProvider } from "./context/app";
import Screens from "./screens/screens";

export default function App() {
  return (
    <NavigationContainer>
      <AppContextProvider>
        <Screens />
      </AppContextProvider>
    </NavigationContainer>
  );
}
