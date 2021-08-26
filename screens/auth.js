import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Signin from "../layout/auth/signin";

export default function Auth({ navigation }) {
  return (
    <View>
      <Signin navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
