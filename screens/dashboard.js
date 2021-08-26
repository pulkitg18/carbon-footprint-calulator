import React from "react";
import { Dimensions, Text, View } from "react-native";
import useScoreContext from "../context/score";

const Dashboard = () => {
  const { totalScore, sliderScore } = useScoreContext();
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get("window").height,
      }}
    >
      <Text style={{ fontSize: 20 }}>Your Carbon Score is</Text>
      <Text style={{ fontSize: 40 }}>{totalScore.score + sliderScore}</Text>
      <Text style={{ fontSize: 20 }}>Tons CO2</Text>
    </View>
  );
};

export default Dashboard;
