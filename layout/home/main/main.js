import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width + 200;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.wave} source={require("../../../assets/wave.png")} />

      <View style={styles.body}>
        <Text style={styles.heading}>Lorem ipsum dolor</Text>
        <Text style={styles.subText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostru
        </Text>

        <View style={styles.btmWrap}>
          <View style={styles.dots}>
            <View style={styles.dot} />
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          <View>
            <Pressable
              onPress={() => navigation.push("Auth")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Get started</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.push("Auth")}
              style={[styles.button, { marginTop: 20 }]}
            >
              <Text style={styles.buttonText}>Sign in instead</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#004D3F",
    height: "100%",
    zIndex: -1,
  },
  wave: {
    position: "absolute",
    top: -150,
    width: "100%",
  },
  body: {
    padding: 20,
    paddingLeft: 30,
  },
  heading: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "600",
  },
  subText: {
    color: "#fff",
    width: "90%",
    marginTop: 40,
  },

  btmWrap: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  dots: {
    display: "flex",
    flexDirection: "row",
  },

  dot: {
    marginRight: 10,
    width: 15,
    height: 15,
    borderColor: "#fff",
    borderWidth: 1,
    // backgroundColor: "#fff",
    borderRadius: 100,
  },

  dotActive: {
    backgroundColor: "#34DE8C",
    borderWidth: 0,
  },

  button: {
    backgroundColor: "#34DE8C",
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 50,
    marginRight: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
  },
});
