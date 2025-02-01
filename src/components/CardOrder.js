import { StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import colors from "../global/colors";

const CardOrder = ({ order }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{order.createdAt}</Text>
        <Text style={styles.text}>Total: ${order.total} ARG</Text>
      </View>
      <AntDesign name="search1" size={30} color={colors.darkGray} />
    </View>
  );
};

export default CardOrder;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accent,
    margin: 10,
    padding: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    gap: 10,
  },
  text: {
    color: colors.darkGray,
    fontSize: 16,
  },
});
