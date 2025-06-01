import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import Constants from "expo-constants";
import SigninScreen from "./screens/SigninScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    inter: require("./assets/fonts/Inter_28pt-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <SigninScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#030303",
  },
});
