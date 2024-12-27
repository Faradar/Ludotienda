import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

// screens
import Home from "./src/screens/Home";
import ProductsByCategory from "./src/screens/ProductsByCategory";
import ProductDetail from "./src/screens/ProductDetail";

export default function App() {
  const [fontsLoaded] = useFonts({
    josefin: require("./assets/fonts/JosefinSans-Bold.ttf"),
    lobster: require("./assets/fonts/Lobster-Regular.ttf"),
    playfair: require("./assets/fonts/Playfair_144pt-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const product = {
    id: 0,
    title: "Crystal chandelier maria theresa for 12 light",
    description: "Crystal chandelier maria theresa for 12 light",
    price: 47,
    discountPercentage: 16,
    rating: 4.74,
    stock: 133,
    brand: "YIOSI",
    category: "lighting",
    thumbnail: "https://picsum.photos/200/300",
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  };

  return (
    <View style={{ flex: 1 }}>
      <ProductsByCategory category={"lighting"} />
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
