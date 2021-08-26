import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/home.png")}
        // height="200"
      />
      {/* <Text style={styles.heading}>Sustainable</Text> */}
      <View style={styles.circle} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 50,
    paddingTop: 80,
    height: "40%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },

  image: {
    position: "absolute",
    width: 250,
    height: 250,
    bottom: 0,
    zIndex: 999,
    right: 10,
  },

  circle: {
    height: 300,
    width: 250,
    backgroundColor: "#34DE8C",
    position: "absolute",
    bottom: 25,
    right: -100,
    borderRadius: 999,
  },
});
