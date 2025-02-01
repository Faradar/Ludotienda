import { StyleSheet, View, FlatList, Pressable, Text } from "react-native";
import CardCartProduct from "../components/CardCartProduct";
import colors from "../global/colors";
import { usePostOrdersMutation } from "../services/orders";
import { useSelector } from "react-redux";
import { useDeleteCartMutation, useGetCartQuery } from "../services/cart";
import { useEffect, useState } from "react";
import EmptyListComponent from "../components/EmptyListComponent";
import LoadingSpinner from "../components/LoadingSpinner";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const navigation = useNavigation();
  const localId = useSelector((state) => state.user.localId);
  const [triggerPost] = usePostOrdersMutation();
  const [triggerDeleteCart] = useDeleteCartMutation();
  const { data: cart, isLoading, error } = useGetCartQuery({ localId });
  const [total, setTotal] = useState(0);

  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(total);

  useEffect(() => {
    if (cart) {
      setTotal(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
    }
  }, [cart]);

  const confirmCart = () => {
    const order = {
      products: cart,
      createdAt: new Date().toLocaleString(),
      total,
    };
    triggerPost({ order, localId });
    triggerDeleteCart({ localId });
    navigation.navigate("Orders");
  };

  if (isLoading) return <LoadingSpinner />;
  if (!cart) return <EmptyListComponent message="Your cart is empty" />;

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardCartProduct product={item} />}
      />
      <View style={styles.containerTotal}>
        <Text style={styles.text}>{formattedPrice} ARG</Text>
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
    color: colors.darkGray,
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
