import React from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import useAppContext from "../context/app";
import { auth } from "../lib/firebase";

const Dashboard = ({ navigation }) => {
  const { userDetails } = useAppContext();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profile}>
            <Text style={styles.plus}>+</Text>
          </View>

          <View style={styles.headText}>
            <Text style={{ color: "#ffff", fontWeight: "600", fontSize: 18 }}>
              Total Earth points
            </Text>
            <Text
              style={{
                color: "#ffff",
                fontWeight: "600",
                fontSize: 35,
                marginTop: 10,
              }}
            >
              70
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: 35,
            marginTop: 20,
            color: "#fff",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Hello, {userDetails.name}
        </Text>

        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            marginTop: 20,
            color: "#fff",
          }}
        >
          YOUR IMPACT
        </Text>

        <View style={styles.boxes}>
          <View style={styles.box}>
            <Text style={styles.boxMainTxt}>5</Text>
            <Text style={styles.boxUnit}>KGS</Text>
            <Text style={styles.boxType}>C03 Saved</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxMainTxt}>5</Text>
            <Text style={styles.boxUnit}>KGS</Text>
            <Text style={styles.boxType}>C03 Saved</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxMainTxt}>5</Text>
            <Text style={styles.boxUnit}>KGS</Text>
            <Text style={styles.boxType}>C03 Saved</Text>
          </View>
        </View>

        <View style={styles.links}>
          <View style={styles.link}>
            <Text style={styles.linkTxt}>My footprint</Text>

            <Pressable
              onPress={() => navigation.navigate("/footprint")}
              style={styles.nextBtn}
            >
              <Text style={styles.nextText}>→</Text>
            </Pressable>
          </View>
          <View style={styles.link}>
            <Text style={styles.linkTxt}>History</Text>

            <Pressable style={styles.nextBtn}>
              <Text style={styles.nextText}>→</Text>
            </Pressable>
          </View>
          <View style={styles.link}>
            <Text style={styles.linkTxt}>Settings</Text>

            <Pressable style={styles.nextBtn}>
              <Text style={styles.nextText}>→</Text>
            </Pressable>
          </View>
        </View>

        <Pressable
          onPress={() => auth.signOut()}
          style={[
            styles.nextBtn,
            { alignSelf: "center", padding: 13, marginTop: 40 },
          ]}
        >
          <Text style={styles.signoutTxt}>Sign Out</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => navigation.push("Categories")}>
        <Text>Challenges</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingVertical: 100,
    backgroundColor: "#65D3BC",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    height: Dimensions.get("window").height - 100,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  profile: {
    backgroundColor: "#C4C4C4",
    borderRadius: 999,
    width: 80,
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  plus: {
    fontSize: 40,
  },
  headText: {
    display: "flex",
    alignItems: "flex-end",
  },

  boxes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },

  box: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#77CAB9",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 24,
  },

  boxMainTxt: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "600",
  },

  boxUnit: {
    color: "#fff",
    marginTop: 5,
    fontWeight: "600",
    fontSize: 19,
  },

  boxType: {
    color: "#fff",
  },

  nextBtn: {
    backgroundColor: "#000000",
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 11,
  },

  nextText: {
    color: "#fff",
    fontSize: 20,
  },

  links: {
    marginTop: 20,
  },
  link: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },

  linkTxt: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 25,
  },

  signoutTxt: {
    color: "#fff",
    fontSize: 15,
  },
});
