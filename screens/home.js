import React from "react";
import { View, Text, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Hello</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Overview")}
      />
    </View>
  );
};

export default Home;
