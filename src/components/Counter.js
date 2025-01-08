import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <View>
        <Pressable onPress={() => setCount(count + 1)} style={styles.button}>
          <Text>Increment</Text>
        </Pressable>
        <Pressable onPress={() => setCount(count - 1)} style={styles.button}>
          <Text>Decrement</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});
