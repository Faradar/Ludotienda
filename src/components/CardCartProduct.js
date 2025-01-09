import { StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import colors from "../global/colors";

const CardCartProduct = ({ product }) => {
  const { title, price, description } = product;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.containerText}>
          <Text style={styles.text}>Price: ${price} ARG</Text>
          <Text style={styles.text}>Quantity: 1</Text>
        </View>
      </View>
      <Entypo name="trash" size={30} color={colors.lightGray} />
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
