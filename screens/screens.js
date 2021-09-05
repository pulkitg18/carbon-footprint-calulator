import React from "react";
import { Auth, Overview } from "./";
import Calcuate1 from "./calculate/1";
import SliderScreen from "./calculate/slider";
import MCQScreen from "./calculate/mcq";
import caluclateScreens from "../json/calculate";
import useAppContext, { AppContextProvider } from "../context/app";
import Dashboard from "./dashboard";
import Number from "../layout/calculate/number";
import { createStackNavigator } from "@react-navigation/stack";
import Initial from "./inital";
import MyFootprint from "./myFootprint";
import Categories from "./challenges/categories";

const Stack = createStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator initialRouteName={"Inital"}>
      <Stack.Screen
        name="Initial"
        options={{ headerShown: false }}
        component={Initial}
      />
      <Stack.Screen
        name="Overview"
        options={{ headerShown: false }}
        component={Overview}
      />

      <Stack.Screen
        name="Categories"
        options={{ headerShown: false }}
        component={Categories}
      />

      <Stack.Screen
        name="MyFootprint"
        options={{ headerShown: false }}
        component={MyFootprint}
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
      <Stack.Screen
        name="Number"
        options={{ headerShown: false }}
        component={Number}
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
  );
};

export default Screens;
