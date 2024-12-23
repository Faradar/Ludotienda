import { View, TextInput } from "react-native";
import Buttons from "./Buttons";
import styles from "../../styles";

const ContainerAddItem = ({ setNewItemValue, newItemValue, addItem }) => {
  return (
    <View style={styles.containerInput}>
      <TextInput
        placeholder="Add Item"
        placeholderTextColor={"white"}
        onChangeText={(text) => setNewItemValue(text)}
        value={newItemValue}
        style={styles.input}
      ></TextInput>

      <Buttons
        onPress={addItem}
        title="+"
        buttonStyle={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
          newItemValue.trim() === "" && styles.buttonDisabled,
        ]}
        textStyle={styles.textButton}
        disabled={newItemValue.trim() === ""}
      />
    </View>
  );
};

export default ContainerAddItem;
