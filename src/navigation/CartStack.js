import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";

// Screens
import Cart from "../screens/Cart";

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return <Header title={route.name} />;
        },
      })}
    >
      <Stack.Screen name="Carrito" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartStack;
