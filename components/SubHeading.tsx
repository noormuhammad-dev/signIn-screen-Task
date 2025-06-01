import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface prop {
  placeholder: string;
}

const SubHeading: React.FC<prop> = ({ placeholder }) => {
  return (
    <View>
      <Text style={styles.txt}>{placeholder}</Text>
    </View>
  );
};

export default SubHeading;

const styles = StyleSheet.create({
  txt: {
    color: "#fff",
    fontFamily: "inter",
    fontSize: 14,
    textAlign: "center",
  },
});
