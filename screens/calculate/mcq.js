import React from "react";
import { StyleSheet, View } from "react-native";
import MCQs from "../../layout/calculate/mcq";

const MCQScreen = ({ navigation, route }) => {
  const { screen } = route.params;

  return (
    <View>
      <MCQs navigation={navigation} screen={screen} />
    </View>
  );
};

export default MCQScreen;

const styles = StyleSheet.create({});
