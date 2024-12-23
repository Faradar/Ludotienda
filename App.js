import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import ProductsByCategory from "./src/screens/ProductsByCategory";
import ProductDetail from "./src/screens/ProductDetail";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Home />
      <StatusBar style="light" backgroundColor="red" />
    </View>
  );
}

const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
