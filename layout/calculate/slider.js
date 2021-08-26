import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import Slider from "@react-native-community/slider";
import useScoreContext from "../../context/score";

const CalculateSlider = ({ navigation, screen }) => {
  const [value, setValue] = useState(0);
  const { setSliderScore } = useScoreContext();

  const handleNext = () => {
    const score = Math.round(value) * screen.value * 52;

    setSliderScore(score);

    navigation.push("Dashboard");
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.question}>{screen.question}</Text>

        {screen.name === "t_car" ? (
          <Image
            style={[
              {
                position: "absolute",
                left: "-78%",
                top: "10%",
                zIndex: 1,
              },
            ]}
            source={screen.image}
          />
        ) : (
          <Image
            style={[
              {
                position: "absolute",
                left: 0,
                top: "25%",
                width: Dimensions.get("window").width,
                zIndex: 1,
              },
            ]}
            source={screen.image}
          />
        )}

        <View style={styles.bottom}>
          <View style={styles.content}>
            <Text style={styles.hours}>{Math.round(value)} h</Text>
            <Text style={styles.subtxt}>Hours per day</Text>
            <Slider
              style={{ width: "100%", marginTop: 100 }}
              minimumTrackTintColor="#FFFFFF"
              thumbTintColor="#ffffff"
              value={value}
              maximumValue={100}
              onValueChange={(val) => setValue(val)}
            />

            {/* <Input placeholder="Hours" style={{ marginTop: 150 }} /> */}

            <Pressable onPress={handleNext} style={styles.button}>
              <Text style={styles.btnText}>Next</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

export default CalculateSlider;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 60,
    position: "absolute",
    height: Dimensions.get("screen").height,
    backgroundColor: "#fff",
  },

  question: {
    fontSize: 26,
    color: "#7B7373",
    fontWeight: "600",
  },

  image: {
    position: "absolute",
    left: "-78%",
    top: "10%",
    zIndex: 1,
  },

  bottom: {
    position: "absolute",
    top: "54%",
    height: "100%",
    backgroundColor: "#79A085",
    width: Dimensions.get("screen").width,
    padding: 40,
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  hours: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "600",
  },
  subtxt: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 28,
  },

  button: {
    backgroundColor: "#fff",
    width: "100%",
    height: 60,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
  btnText: {
    color: "#79A085",
    fontSize: 20,
  },
});
