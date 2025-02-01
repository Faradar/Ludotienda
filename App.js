import { View, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import fonts from "./src/global/fonts";
import Navigator from "./src/navigation/Navigator";
import colors from "./src/global/colors";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor={colors.primary} />
      <Provider store={store}>
        <Navigator />
      </Provider>
    </View>
  );
}
