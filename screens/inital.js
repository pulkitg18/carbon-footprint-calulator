import { View, Text } from "react-native";
import useAppContext from "../context/app";
import React, { useEffect } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import Loader from "../components/loading";

const Initial = ({ navigation }) => {
  const { appState, userDetails, setUserDetails } = useAppContext();
  console.log(userDetails);

  const loading =
    appState === "loading" || (appState === "home" && !userDetails);

  useEffect(() => {
    if (appState === "home" && userDetails?.email) {
      if (!userDetails.score) {
        navigation.push("Calcuate1");
      } else {
        navigation.push("Dashboard");
      }
    }
    if (appState === "login") {
      navigation.push("Overview");
    }
  }, [appState, userDetails]);
  return (
    <View>
      {/* {appState === "home" &&   />} */}
      {/* {appState === "login" && <Overview navigation={navigation} />} */}
      {loading ? <Loader loading={true} /> : <Text>h </Text>}
    </View>
  );
};

export default Initial;
