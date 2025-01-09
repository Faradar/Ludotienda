import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counterSlice";
import { TextInput } from "react-native-web";

const Counter = () => {
  // This code below is for redux counter
  const [input, setInput] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // This code below is for non redux counter
  // const [incrementByAmount, setIncrementByAmount] = useState(0);
  // const [counter, setCounter] = useState(0);

  return (
    <View>
      {/* This code below is for redux counter */}
      <Text>{count}</Text>
      <View>
        <Pressable onPress={() => dispatch(increment())} style={styles.button}>
          <Text>Increment</Text>
        </Pressable>
        <Pressable onPress={() => dispatch(decrement())} style={styles.button}>
          <Text>Decrement</Text>
        </Pressable>
        <TextInput value={input} onChangeText={(t) => setInput(parseInt(t))} />
        <Button
          title="Change"
          onPress={() => dispatch(incrementByAmount(input))}
        />
      </View>

      {/* This code below is for non redux counter */}
      {/* <Text>{counter}</Text>
      <View>
        <Pressable
          onPress={() => setCounter(counter + 1)}
          style={styles.button}
        >
          <Text>Increment</Text>
        </Pressable>
        <Pressable
          onPress={() => setCounter(counter - 1)}
          style={styles.button}
        >
          <Text>Decrement</Text>
        </Pressable>
        <TextInput
          value={incrementByAmount}
          onChangeText={(t) => setIncrementByAmount(parseInt(t))}
        />
        <Button
          title="Change"
          onPress={() => setCounter(counter + incrementByAmount)}
        />
      </View> */}
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
