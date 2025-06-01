import { Image, StyleSheet, View, Text } from "react-native";
import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputField from "../components/InputField";
import Button from "../components/Button";

const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../assets/logo.png")} />
        </View>
        <Heading placeholder={`Sign In New\nAccount`} />
        <SubHeading placeholder="Please provide your details" />
        <View style={styles.fieldsContainer}>
          <InputField
            icon="email-outline"
            placeholder="Email or Username"
            secureTextEntry={false}
          />
          <InputField
            icon="lock-outline"
            placeholder="Password"
            secureTextEntry
          />
          <Button placeholder={"Sign In"} />
        </View>
      </View>
      <Text style={styles.belowText}>
        Already have an account?{" "}
        <Text style={styles.highlightedBelowText}>Sign In</Text>
      </Text>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030303",
    paddingHorizontal: 18,
  },
  innerContainer: {
    flex: 1,
  },
  imageContainer: {
    width: 200,
    height: 150,
    marginVertical: 20,
    alignSelf: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  fieldsContainer: {
    marginTop: 60,
  },
  belowText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "inter",
    textAlign: "center",
    marginBottom: 40,
  },
  highlightedBelowText: {
    color: "#3c6cff",
    fontWeight: "bold",
  },
});
