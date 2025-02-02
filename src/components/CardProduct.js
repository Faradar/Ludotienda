import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import colors from "../global/colors";
import { useNavigation } from "@react-navigation/native";
import LoadingSpinner from "./LoadingSpinner";
import { useState } from "react";
import { formatCurrency } from "../utils/formatCurrency";

const { width: viewWidth } = Dimensions.get("window");

const CardProduct = ({ item }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    >
      {loading && <LoadingSpinner />}
      <Image
        source={{ uri: item.thumbnail }}
        style={styles.image}
        resizeMode="contain"
        onLoadStart={() => setLoading(true)}
        onLoad={() => setLoading(false)}
      />
      <View style={styles.containerText}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{formatCurrency(item.price)}</Text>
        <Text style={styles.stock}>Stock: {item.stock}</Text>
      </View>
    </Pressable>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "auto",
    marginVertical: 50,
    borderRadius: 5,
    padding: 10,
    gap: 10,
    flexDirection: "column",
    alignItems: "center",
    width: viewWidth * 0.5,
    height: viewWidth * 0.5,
  },
  image: {
    width: viewWidth * 0.45,
    height: viewWidth * 0.45,
    resizeMode: "cover",
  },
  containerText: {
    gap: 5,
  },
  title: {
    color: colors.darkGray,
    textAlign: "center",
    fontSize: 14,
  },
  price: {
    color: colors.darkGray,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  stock: {
    textAlign: "center",
    fontSize: 14,
    color: colors.darkGray,
  },
});
