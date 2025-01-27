import { StyleSheet, View, FlatList, Pressable, Text } from "react-native";
// import cart from "../data/cart";
import CardCartProduct from "../components/CardCartProduct";
import colors from "../global/colors";
import Counter from "../components/Counter";
import { usePostOrdersMutation } from "../services/orders";
import { useSelector } from "react-redux";
import { useGetCartQuery } from "../services/cart";
import { useEffect, useState } from "react";

const Cart = () => {
  const localId = useSelector((state) => state.user.localId);
  const [triggerPost] = usePostOrdersMutation();
  const { data: cart } = useGetCartQuery({ localId });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart) {
      setTotal(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
    }
  }, [cart]);

  const confirmCart = () => {
    triggerPost({
      id: "2",
      products: [
        { id: 1, quantity: 2 },
        { id: 2, quantity: 1 },
      ],
      total: 120,
    });
  };
  return (
    <View style={styles.container}>
      {/* <Counter /> */}
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardCartProduct product={item} />}
      />
      <View style={styles.containerTotal}>
        {/* <Text style={styles.text}>Total: ${cart.total} ARG</Text> */}
        <Pressable style={styles.button} onPress={confirmCart}>
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
