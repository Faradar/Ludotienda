import { View, Text, FlatList } from "react-native";
import { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Buttons from "./Buttons";
import styles from "../../styles";

const ListItems = ({
  items,
  onHandlerEditModal,
  onHandlerModal,
  onToggleComplete,
}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <BouncyCheckbox
            isChecked={item.completed}
            onPress={() => onToggleComplete(item.id)}
            fillColor="white"
            iconStyle={{ backgroundColor: "red" }}
            innerIconStyle={{ borderWidth: 2 }}
          />

          <Text
            style={[
              styles.cardText,
              item.completed && styles.cardTextCompleted,
            ]}
          >
            {item.value}
          </Text>
          <Buttons
            buttonStyle={styles.button}
            onPress={() => onHandlerEditModal(item)}
            textStyle={styles.textButton}
            title="✎"
          />

          <Buttons
            buttonStyle={styles.button}
            onPress={() => onHandlerModal(item)}
            textStyle={styles.textButton}
            title="-"
          />
        </View>
      )}
    />
  );
};

export default ListItems;
