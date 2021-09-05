import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useScoreContext from "../../context/score";

const SCREEN_HEIGHT = Dimensions.get("screen").height;
const SCREEN_WIDTH = Dimensions.get("screen").width;

const Number = ({ navigation }) => {
  const { totalScore, numberScore, setNumberScore, sliderScore } =
    useScoreContext();

  const form = [
    {
      text: "Short",
      subHead: "Up to 3 hours long",
      key: "short",
    },
    {
      text: "Medium",
      subHead: "3-6 hours long",
      key: "medium",
    },
    {
      text: "Long",
      subHead: "6+ hours",
      key: "long",
    },
  ];

  const [formData, setFormData] = useState({ short: 0, medium: 0, long: 0 });

  const handleIncrement = (key) => {
    setFormData((prev) => {
      return { ...formData, [key]: prev[key] + 1 };
    });
    changeScore();
  };
  const handleDecrement = (key) => {
    setFormData((prev) => {
      if (prev[key] === 0) {
        Alert.alert("Cannot select negative flights");
        return prev;
      }
      return { ...formData, [key]: prev[key] - 1 };
    });

    changeScore();
  };

  const changeScore = () => {
    const score = formData.short * 1 + formData.medium * 2 + formData.long * 3;
    setNumberScore(score);
  };

  const handleNext = () => {
    navigation.push("MyFootprint");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.number}>
            {totalScore.score + numberScore + sliderScore}
          </Text>
          <Text style={styles.subText}>tons C02</Text>
          <Image source={require("../../assets/plane.png")} />
        </View>

        <Image style={styles.wave} source={require("../../assets/wave3.png")} />

        <View style={styles.bottom}>
          <Text style={styles.question}>
            How many one-way flights do you take during the year? (Double-tap
            for round trips!)
          </Text>

          <View style={{ marginTop: 40 }}>
            {form.map((data, i) => (
              <View style={styles.contentCont} key={i}>
                <View>
                  <Text style={styles.aboutTxt}>{data.text}</Text>
                  <Text style={{ fontSize: 14 }}>{data.subHead}</Text>
                </View>

                <View style={styles.actionsWrap}>
                  <Pressable
                    style={styles.actionCont}
                    onPress={() => handleIncrement(data.key)}
                  >
                    <Text style={styles.actionTxt}>+</Text>
                  </Pressable>
                  <Text style={[styles.actionTxt, { marginHorizontal: 10 }]}>
                    {formData[data.key]}
                  </Text>
                  <Pressable
                    style={styles.actionCont}
                    onPress={() => handleDecrement(data.key)}
                  >
                    <Text style={styles.actionTxt}>-</Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </View>

          <Pressable style={styles.nextBtn} onPress={handleNext}>
            <Text style={styles.nextText}>→</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Number;

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
  },

  contentCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: SCREEN_WIDTH,
    paddingHorizontal: 40,
    alignItems: "center",
    marginBottom: 30,
  },
  aboutTxt: {
    fontSize: 24,
    color: "#076969",
    fontWeight: "600",
  },
  actionsWrap: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  actionTxt: {
    fontSize: 25,
    fontWeight: "700",
    color: "#076969",
  },
  actionCont: {
    backgroundColor: "#3ACEAF",
    width: 35,
    height: 35,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  top: {
    backgroundColor: "#42D4B6",
    padding: 20,
    paddingTop: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  wave: {
    width: "100%",
    position: "absolute",
    top: SCREEN_HEIGHT > 900 ? 265 : "33%",
    zIndex: -1,
  },
  number: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "600",
  },
  subText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  bottom: {
    top: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  question: {
    color: "#79A085",
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 40,
  },

  nextBtn: {
    marginTop: 25,
    backgroundColor: "#000000",
    padding: 10,
    paddingHorizontal: 25,
    opacity: 0.5,
    borderRadius: 11,
  },

  nextText: {
    color: "#fff",
    fontSize: 20,
  },
});
