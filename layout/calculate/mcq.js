import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { calculateMCQ } from "../../actions/calculate";
import useScoreContext from "../../context/score";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

const MCQs = ({ navigation, screen }) => {
  const { totalScore, setScore, screenScore, setScreenScore } =
    useScoreContext();

  const [currentClicked, setCurrentClicked] = useState(null);

  const handleOptionClick = (option, push) => {
    if (screen.name === "Transport") return navigation.push(push);

    setCurrentClicked(option);
    calculateMCQ(screen.name, option, setScore, totalScore, screenScore);
  };

  console.log(screenScore);
  const handleNextClick = () => {
    setScreenScore({
      ...screenScore,
      [screen.name]: totalScore.score,
    });

    navigation.push(screen.goTo);
  };

  console.log(currentClicked);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.number}>{totalScore.score}</Text>
          <Text style={styles.subText}>tons C02</Text>
          <Image style={{ marginTop: 15 }} source={screen.image} />
        </View>

        <Image style={styles.wave} source={require("../../assets/wave3.png")} />

        <View style={styles.bottom}>
          <Text style={styles.question}>{screen.question}</Text>

          {screen.options.map((option, key) => {
            console.log("otion", option);
            return (
              <Pressable
                onPress={() => handleOptionClick(option.key, option?.push)}
                style={[
                  styles.option,
                  ,
                  { opacity: option.key === currentClicked ? 1 : 0.5 },
                ]}
                key={key}
              >
                <Text style={styles.optionTxt}>{option.title}</Text>
              </Pressable>
            );
          })}

          {screen.name !== "Transport" && (
            <Pressable onPress={() => handleNextClick()} style={styles.nextBtn}>
              <Text style={styles.nextText}>→</Text>
            </Pressable>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default MCQs;

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
  },

  top: {
    backgroundColor: "#42D4B6",
    padding: 20,
    paddingTop: 50,
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
  },
  question: {
    color: "#79A085",
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
  },
  option: {
    marginTop: 20,
    width: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#42D4B6",
    height: 45,
    borderRadius: 10,
  },
  optionTxt: {
    color: "#fff",
    fontSize: 16,
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
