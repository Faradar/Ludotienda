import { StyleSheet, View, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import fonts from "./src/global/fonts";
import Navigator from "./src/components/Navigator";
import colors from "./src/global/colors";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

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
    <View style={styless.container}>
      <StatusBar style="light" backgroundColor={colors.accent} />
      <Navigator />
    </View>
  );
}

const styless = StyleSheet.create({
  container: {
    flex: 1,
  },
});
