import React from "react";
import { StyleSheet, View } from "react-native";
import CalculateSlider from "../../layout/calculate/slider";

const SliderScreen = ({ navigation, route }) => {
  const { screen } = route.params;

  return (
    <View>
      <CalculateSlider navigation={navigation} screen={screen} />
    </View>
  );
};

export default SliderScreen;

const styles = StyleSheet.create({});
