import { StyleSheet, View, FlatList, Pressable, Text } from "react-native";
import cart from "../data/cart";
import CardCartProduct from "../components/CardCartProduct";
import colors from "../global/colors";
import Counter from "../components/Counter";

const Cart = () => {
  return (
    <View style={styles.container}>
      <Counter />
      <FlatList
        data={cart.products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardCartProduct product={item} />}
      />
      <View style={styles.containerTotal}>
        <Text style={styles.text}>Total: ${cart.total} ARG</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  containerTotal: {
    width: "100%",
    backgroundColor: colors.accent,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,
    position: "absolute",
    bottom: 0,
  },
  text: {
    fontSize: 16,
    color: colors.lightGray,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.lightGray,
  },
});
