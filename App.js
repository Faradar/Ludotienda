import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View, Text, Pressable } from "react-native";
import { useState } from "react";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState(["Coca cola", "Pepsi"]);

  // const addItem = () => {
  //   setItems((prevItems) => prevItems.map((item) => item + 1));
  // };

  const addItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Add Item"
          placeholderTextColor={"white"}
          onChangeText={(text) => setNewItem(text)}
          value={newItem}
          style={styles.input}
        ></TextInput>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
            newItem.trim() === "" && styles.buttonDisabled, // Apply disabled style
          ]}
          onPress={addItem}
          disabled={newItem === ""}
        >
          <Text style={styles.textButton}>+</Text>
        </Pressable>
      </View>

      <View style={styles.containerCards}>
        {items.map((item, index) => (
          <View style={styles.card}>
            <Text key={index} style={styles.cardText}>
              {item}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
  },
  containerInput: {
    backgroundColor: "#F4012D",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  input: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    flex: 1,
    margin: 10,
    color: "white",
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    width: 40,
    height: 40,
    margin: 10,
    borderRadius: 3,
    alignItems: "center",
  },
  buttonPressed: {
    backgroundColor: "#ddd",
  },
  buttonDisabled: {
    backgroundColor: "#aaa", // Greyed-out button when disabled
  },
  textButton: {
    color: "red",
  },
  containerCards: {
    alignItems: "center",
  },
  card: {
    width: "80%",
    backgroundColor: "#F4012D",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  cardText: {
    color: "white",
  },
});
