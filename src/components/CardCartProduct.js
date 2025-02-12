import { Pressable, StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import colors from "../global/colors";
import { useDeleteCartProductMutation } from "../services/cart";
import { useSelector } from "react-redux";
import { formatCurrency } from "../utils/formatCurrency";

const CardCartProduct = ({ product }) => {
  const { title, price, description, quantity } = product;
  const localId = useSelector((state) => state.user.localId);
  const [triggerDeleteItemCart] = useDeleteCartProductMutation();

  const deleteItemCart = () => {
    triggerDeleteItemCart({ localId, productId: product.id });
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.containerText}>
          <Text style={styles.text}>{formatCurrency(price)} ARG</Text>
          <Text style={styles.text}>Cantidad: {quantity}</Text>
        </View>
      </View>
      <Pressable onPress={deleteItemCart}>
        <Entypo name="trash" size={30} color={colors.lightGray} />
      </Pressable>
    </View>
  );
};

export default CardCartProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    margin: 10,
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  content: {
    width: "80%",
    gap: 15,
  },
  title: {
    fontSize: 20,
    color: colors.lightGray,
  },
  description: {
    color: colors.lightGray,
  },
  containerText: {
    flexDirection: "row",
    gap: 20,
  },
  text: {
    color: colors.lightGray,
    fontSize: 16,
  },
});
