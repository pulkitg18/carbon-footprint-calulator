import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { signin } from "../../actions/auth";
import { ScrollView } from "react-native";

const Signin = ({ navigation }) => {
  const signupUser = () => {
    // signin({ email: "gpulkit712@gmail.com", pass: "pulkit" });
    navigation.push("Calcuate1");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.logo}>Sustainable</Text>
        <Text style={styles.heading}> Let's get started.</Text>
        <Text style={styles.subheading}>
          Lorem ipsum dolor sit amet, consectetur{" "}
        </Text>

        <View style={styles.inputs}>
          <Input
            style={styles.input}
            placeholder="Email"
            leftIcon={<Icon name="user" size={24} color="black" />}
            keyboardType="email-address"
            type="email"
          />

          <Input
            style={styles.input}
            placeholder="Username"
            leftIcon={<Icon name="user" size={24} color="black" />}
          />

          <Input
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            type="password"
            keyboardType="visible-password"
            leftIcon={<Icon name="lock" size={24} color="black" />}
          />

          <Input
            style={styles.input}
            placeholder="Confirm password"
            leftIcon={<Icon name="lock" size={24} color="black" />}
            secureTextEntry
          />

          <Pressable onPress={signupUser} style={styles.button}>
            <Text style={styles.buttonText}>Sign up</Text>
          </Pressable>

          <View style={styles.or}>
            <View style={styles.line} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.social}>
            <Pressable style={styles.googleBtn}>
              <Image source={require("../../assets/google.png")} />
            </Pressable>

            <Pressable style={[styles.googleBtn, styles.facebookBtn]}>
              <Icon name="facebook-f" size={24} color="white" />
            </Pressable>
          </View>
        </View>

        <Image style={styles.wave} source={require("../../assets/wave2.png")} />
      </View>
    </ScrollView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    fontSize: 25,
  },
  heading: {
    fontSize: 34,
    fontWeight: "700",
    marginTop: 14,
    color: "#34DE8C",
  },
  subheading: {
    marginTop: 7,
    maxWidth: "60%",
    textAlign: "center",
    color: "#797992",
  },

  inputs: {
    width: "100%",
    marginTop: 30,
    display: "flex",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#34DE8C",
    padding: 10,
    borderRadius: 999,
    paddingHorizontal: 50,
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
  },

  or: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    height: 1,
    width: Dimensions.get("window").width / 2 - 40,
    backgroundColor: "#000",
  },

  orText: {
    marginHorizontal: 10,
    color: "#524A4A",
    fontWeight: "600",
    fontSize: 15,
  },

  social: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },

  googleBtn: {
    backgroundColor: "#fff",
    padding: 10,
    paddingHorizontal: 60,
    borderRadius: 10,
  },
  facebookBtn: {
    backgroundColor: "#3A5C9F",
  },

  wave: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    top:
      Dimensions.get("window").height > 900
        ? Dimensions.get("window").height - 90
        : Dimensions.get("window").height - 40,
  },
});
