import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./Header";

// Screens
import Home from "../screens/Home";
import ProductsByCategory from "../screens/ProductsByCategory";
import ProductDetail from "../screens/ProductDetail";

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          header: () => {
            return (
              <Header
                title={
                  route.name === "ProductsByCategory"
                    ? route.params.category
                    : route.name === "ProductDetail"
                    ? route.params.product.brand
                    : route.name
                }
              />
            );
          },
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ProductsByCategory"
          component={ProductsByCategory}
        />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
