import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface prop {
  placeholder: string;
}

const Heading: React.FC<prop> = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{placeholder}</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    marginBottom:15
  },
  txt: {
    color: "#fff",
    fontFamily: "inter",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
