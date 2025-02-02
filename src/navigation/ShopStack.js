import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";

// Screens
import Home from "../screens/Home";
import ProductsByCategory from "../screens/ProductsByCategory";
import ProductDetail from "../screens/ProductDetail";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return (
            <Header
              title={
                route.name === "ProductsByCategory"
                  ? route.params.category.charAt(0).toUpperCase() +
                    route.params.category.slice(1)
                  : route.name === "ProductDetail"
                  ? route.params.product.brand
                  : route.name
              }
            />
          );
        },
      })}
    >
      <Stack.Screen name="Categorias" component={Home} />
      <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default ShopStack;
