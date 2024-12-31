import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import colors from "../global/colors";

const CardProduct = ({ item }) => {
  return (
    <Pressable style={styles.container}>
      <Image
        source={{ uri: item.thumbnail }}
        style={styles.image}
        resizeMode="cover"
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Text style={styles.description}>Descripcion: {item.description}</Text> */}
        <View style={styles.containerText}>
          <Text style={styles.text}>Precio: ${item.price}</Text>
          <Text style={styles.text}>Stock: {item.stock}</Text>
        </View>
      </View>
      {/* <Pressable>
        <Text>Carrito</Text>
      </Pressable> */}
    </Pressable>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    margin: 10,
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  image: {
    width: "20vw",
    height: "20vw",
    backgroundColor: "red",
  },
  title: {
    color: colors.lightGray,
    fontSize: 14,
    padding: 5,
  },
  description: {
    fontSize: 15,
  },
  containerText: {
    flexDirection: "row",
    gap: 20,
    padding: 10,
  },
  text: {
    fontSize: 12,
    color: colors.lightGray,
  },
});
