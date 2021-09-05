import React, { useState } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import useScoreContext from "../context/score";
import { ProgressChart } from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";
import useAppContext from "../context/app";
import API from "../api/axios";
import Loader from "../components/loading";

const MyFootprint = ({ navigation }) => {
  const { totalScore, sliderScore, numberScore } = useScoreContext();
  const { userDetails } = useAppContext();

  const calculated =
    Math.round((totalScore.score + sliderScore + numberScore) * 100) / 100;

  const score = calculated ? calculated : userDetails.score;

  const [loading, setLoading] = useState(false);

  const data = {
    labels: ["🍴", "🚗", "⚡", "🛍"], // optional
    data: [0.3, 0.3, 0.5, 0.9],
  };

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(7, 130, 130, ${opacity})`,
    useShadowColorFromDataset: false, // optional
  };

  const handleClick = () => {
    setLoading(true);
    API.post("/score", { email: userDetails.email, score })
      .then(() => {
        setLoading(false);
        navigation.push("Dashboard");
      })
      .catch(() => {
        setLoading(false);
      });
  };
  return (
    <ScrollView>
      <Loader loading={loading} />
      <View
        // onPress={() => auth.signOut()}
        style={styles.container}
      >
        <Text style={styles.heading}>
          Here’s what your footprint looks like
        </Text>
        <View style={styles.scoreWrap}>
          <View style={styles.scoreTxtWrap}>
            <Text style={styles.scoreTxt}>{score}</Text>
            <Text style={styles.scoreSubTxt}>tons CO2</Text>
          </View>
          <ProgressChart
            data={data}
            width={Dimensions.get("screen").width}
            height={220}
            strokeWidth={12}
            radius={32}
            chartConfig={chartConfig}
            // hideLegend
          />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 40,
            }}
          >
            <View
              style={{
                display: "flex",
                marginRight: 50,
                alignItems: "center",
                maxWidth: 180,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "600",
                  color: "#565656",
                }}
              >
                India's Footprint average
              </Text>
              <Text style={{ color: "#565656", fontSize: 38, marginTop: 5 }}>
                20
              </Text>
              <Text style={{ color: "#565656" }}>tons CO2</Text>
            </View>
            <View
              style={{ display: "flex", alignItems: "center", maxWidth: 180 }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "600",
                  color: "#565656",
                }}
              >
                India's Footprint average
              </Text>
              <Text style={{ color: "#565656", fontSize: 38, marginTop: 5 }}>
                20
              </Text>
              <Text style={{ color: "#565656" }}>tons CO2</Text>
            </View>
          </View>
          <Pressable style={styles.nextBtn} onPress={handleClick}>
            <Text style={styles.nextText}>Reduce my footprint! </Text>
          </Pressable>
        </View>

        {/* <Text style={{ fontSize: 20 }}>Your Carbon Score is</Text>
      <Text style={{ fontSize: 40 }}>
        {totalScore.score + sliderScore + numberScore}
      </Text>

      <Text style={{ fontSize: 20 }}>Tons CO2</Text> */}
      </View>
    </ScrollView>
  );
};

export default MyFootprint;

const styles = {
  container: {
    display: "flex",
    // justifyContent: "center",
    paddingTop: 70,
    alignItems: "center",
    height: Dimensions.get("window").height,
    backgroundColor: "#BCD9D3",
    paddingHorizontal: 15,
    paddingVertical: 20,
  },

  heading: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "600",
    color: "#565656",
    marginBottom: 45,
  },
  scoreWrap: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },

  scoreTxtWrap: {
    display: "flex",
    marginBottom: 40,
    alignItems: "center",
  },

  scoreTxt: {
    color: "#686868",
    fontSize: 58,
    fontWeight: "500",
  },

  scoreSubTxt: {
    fontSize: 24,
    fontWeight: "300",
  },
  nextBtn: {
    marginTop: 40,
    backgroundColor: "#000000",
    padding: 10,
    paddingHorizontal: 30,
    opacity: 0.5,
    borderRadius: 11,
  },

  nextText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
};
