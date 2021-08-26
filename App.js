import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Auth, Overview } from "./screens";
import Calcuate1 from "./screens/calculate/1";
import SliderScreen from "./screens/calculate/slider";
import MCQScreen from "./screens/calculate/mcq";
import caluclateScreens from "./json/calculate";
import { AppContextProvider } from "./context/app";
import Dashboard from "./screens/dashboard";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppContextProvider>
        <Stack.Navigator initialRouteName="Overview">
          <Stack.Screen
            name="Overview"
            options={{ headerShown: false }}
            component={Overview}
          />

          <Stack.Screen
            name="Auth"
            options={{ headerShown: false }}
            component={Auth}
          />
          <Stack.Screen
            name="Dashboard"
            options={{ headerShown: false }}
            component={Dashboard}
          />

          <Stack.Screen
            name="Calcuate1"
            options={{ headerShown: false }}
            component={Calcuate1}
          />

          {caluclateScreens.mcq.map((screen, i) => (
            <Stack.Screen
              key={i}
              name={screen.name}
              options={{ headerShown: false }}
              component={MCQScreen}
              initialParams={{ screen }}
            />
          ))}

          {caluclateScreens.slider.map((screen, i) => (
            <Stack.Screen
              key={i}
              name={screen.name}
              options={{ headerShown: false }}
              component={SliderScreen}
              initialParams={{ screen }}
            />
          ))}
        </Stack.Navigator>
      </AppContextProvider>
    </NavigationContainer>
  );
}
