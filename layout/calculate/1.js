import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

const Calc1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/footprint.png")}
      />

      <View style={styles.content}>
        <Text style={styles.heading}>
          First we need to calculate your footprint
        </Text>

        <Text style={styles.subText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore{" "}
        </Text>

        <Pressable
          onPress={() => navigation.push("Food")}
          style={styles.button}
        >
          <Text style={styles.btnText}>CONTINUE</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Calc1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5FDDA0",
    paddingTop: 50,
    height: "100%",
  },
  image: {
    width: "100%",
    height: SCREEN_HEIGHT >= 900 ? 440 : 350,
  },

  content: {
    marginTop: 80,
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  heading: {
    fontSize: SCREEN_WIDTH >= 428 ? 36 : 30,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  subText: {
    marginTop: 20,
    color: "#FAE8E8",
    maxWidth: "95%",
    textAlign: "center",
    fontSize: 17,
  },

  button: {
    marginTop: 30,
    backgroundColor: "#4B34DE",
    borderRadius: 10,
    width: "80%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 17,
  },
});
