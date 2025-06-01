import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface prop {
  placeholder: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  secureTextEntry: boolean;
}

const InputField: React.FC<prop> = ({ placeholder, icon, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={22} color="#848484" />
      <TextInput
        style={styles.imp}
        placeholder={placeholder}
        placeholderTextColor={"#848484"}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#272727",
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 8,
    alignItems: "center",
    borderRadius: 9,
    marginVertical: 10,
  },
  imp: {
    flex: 1,
    marginHorizontal: 14,
    fontSize: 17,
    color: "#cecece",
    fontFamily: "inter",
  },
});
