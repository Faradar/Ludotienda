import { Pressable, StyleSheet, View, TextInput } from "react-native";
import { useState } from "react";
import colors from "../global/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Search = ({ products, onFilter }) => {
  const [textInput, setTextInput] = useState("");

  const filterByKeyword = (keyword) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(keyword.toLowerCase())
    );
    onFilter(filtered);
  };

  const cancel = () => {
    setTextInput("");
    onFilter(products);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={textInput}
        onChangeText={setTextInput}
        placeholder="Buscar"
        placeholderTextColor={colors.darkGray}
      />
      <Pressable
        style={styles.button}
        onPress={() => filterByKeyword(textInput)}
      >
        <FontAwesome name="search" size={30} color="black" />
      </Pressable>
      <Pressable style={styles.button} onPress={cancel}>
        <MaterialIcons name="cancel" size={30} color="black" />
      </Pressable>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    backgroundColor: colors.accent,
    borderRadius: 4,
    marginRight: 10,
    paddingHorizontal: 10,
    color: colors.darkGray,
  },
  button: {
    margin: 5,
  },
});
