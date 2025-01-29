import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import colors from "../global/colors";
import { useGetProductCartQuery, usePostCartMutation } from "../services/cart";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Counter from "../components/Counter";
import { useState } from "react";

const ProductDetail = ({
  route: {
    params: { product },
  },
}) => {
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();
  const localId = useSelector((state) => state.user.localId);
  const [triggerAddProduct] = usePostCartMutation();
  const { data: productCart } = useGetProductCartQuery({
    localId,
    productId: product.id,
  });
  const cartQuantity = productCart ? productCart.quantity : 0;
  const totalQuantity = product.stock - cartQuantity;

  const increment = () => {
    if (quantity < totalQuantity) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddProduct = async () => {
    if (quantity > totalQuantity) return;
    const cartProduct = {
      ...product,
      quantity: quantity + cartQuantity,
    };
    await triggerAddProduct({ localId, cartProduct });
    setQuantity(1);
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Price: {product.price} $ ARG</Text>
      {quantity > totalQuantity ? (
        <Text style={styles.price}>Out of Stock!</Text>
      ) : (
        <Counter
          quantity={quantity}
          increment={increment}
          decrement={decrement}
        />
      )}

      <Pressable style={styles.button} onPress={handleAddProduct}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    // gap: 20,
  },
  image: {
    width: "100%",
    height: 200,
    backgroundColor: "red",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
  },
  description: {
    fontSize: 14,
    padding: 20,
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    padding: 20,
  },
  button: {
    backgroundColor: colors.accent,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: colors.lightGray,
    fontSize: 20,
  },
});
