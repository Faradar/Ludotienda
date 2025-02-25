import { StyleSheet, Text, View, Pressable } from "react-native";
import colors from "../global/colors";

const Counter = ({ quantity, totalQuantity, increment, decrement }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={decrement}>
        <Text style={styles.textButton}>-</Text>
      </Pressable>
      <Text style={styles.text}>
        {quantity}/{totalQuantity}
      </Text>
      <Pressable style={styles.button} onPress={increment}>
        <Text style={styles.textButton}>+</Text>
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: 10,
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: colors.accent,
    width: 50,
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: colors.darkGray,
    fontSize: 20,
  },
  text: {
    color: colors.darkGray,
    fontSize: 20,
  },
});
