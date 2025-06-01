import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

interface prop {
  placeholder: string;
}

const Button: React.FC<prop> = ({ placeholder }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Text style={styles.txt}>{placeholder}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3c6cff",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderRadius: 9,
    marginVertical: 10,
  },
  txt: {
    fontSize: 17,
    color: "#fff",
    fontFamily: "inter",
  },
});
