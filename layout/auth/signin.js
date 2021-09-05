import React, { useState } from "react";
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
import { ScrollView } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { signin } from "../../actions/auth";
import useAppContext from "../../context/app";

const Signin = ({ navigation }) => {
  const form = [
    {
      placeholder: "Name",
      iconName: "user",
      keyboardType: "default",
      secureTextEntry: false,
      key: "name",
    },
    {
      placeholder: "Email",
      iconName: "user",
      keyboardType: "email-address",
      secureTextEntry: false,
      key: "email",
    },

    {
      placeholder: "Password",
      iconName: "lock",
      keyboardType: "visible-password",
      secureTextEntry: true,
      key: "pass",
    },
    {
      placeholder: "Confirm password",
      iconName: "lock",
      keyboardType: "default",
      secureTextEntry: true,
      key: "confirmPass",
    },
  ];

  const initalFormData = { email: "", name: "", pass: "", confirmPass: "" };
  const [formData, setFormData] = useState(initalFormData);

  const initialError = { state: false, key: "", message: "" };
  const [error, setError] = useState(initialError);

  const { setUserDetails } = useAppContext();

  const [loading, setLoading] = useState(false);

  const figureErrors = () => {
    if (formData.pass !== formData.confirmPass) {
      setError({
        state: true,
        key: "confirmPass",
        message: "Passwords do not match",
      });

      return false;
    }

    setError(initialError);
    return true;
  };

  const disabled =
    !formData.email ||
    !formData.pass ||
    !formData.confirmPass ||
    !formData.name;

  const signupUser = async () => {
    const success = figureErrors();
    if (success) {
      setLoading(true);

      const res = await signin(formData, setLoading, setUserDetails);
      if (res?.message?.includes("email")) {
        setError({
          state: true,
          key: "email",
          message: res.message,
        });
      } else {
        setError({
          state: true,
          key: "confirmPass",
          message: res.message,
        });
      }
    }
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
          {form.map((data, i) => (
            <Input
              key={i}
              placeholder={data.placeholder}
              leftIcon={<Icon name={data.iconName} size={24} color="black" />}
              keyboardType={data.keyboardType}
              secureTextEntry={data.secureTextEntry}
              errorMessage={error.key === data.key ? error.message : ""}
              value={formData[data.key]}
              onChangeText={(text) => {
                setFormData({ ...formData, [data.key]: text });
              }}
            />
          ))}
          {/* <View
            style={{ width: "100%", paddingHorizontal: 10 }}
            onPress={showMenu}
          >
            <Menu
              visible={visible}
              anchor={
                <Pressable style={styles.menu}>
                  <Text style={{ fontSize: 18, opacity: 0.5 }}>Show menu</Text>
                </Pressable>
              }
              onRequestClose={hideMenu}
            >
              <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
              <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
              <MenuItem disabled>Disabled item</MenuItem>
              <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
            </Menu>
          </View> */}

          <Pressable
            disabled={disabled}
            onPress={signupUser}
            style={[styles.button, { opacity: disabled ? 0.6 : 1 }]}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </Pressable>
          <Spinner
            visible={loading}
            textContent={"Loading..."}
            textStyle={{ color: "#fff", fontWeight: "400" }}
          />

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

  menu: {
    width: "100%",
    borderBottomColor: "rgba(0,0,0,0.5)",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginTop: 5,
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
