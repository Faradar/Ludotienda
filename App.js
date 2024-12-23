import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  FlatList,
  Modal,
} from "react-native";
import { useState } from "react";
import uuid from "react-native-uuid";

const App = () => {
  const [newItemValue, setNewItemValue] = useState("");
  const [items, setItems] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editItemValue, setEditItemValue] = useState("");

  const addItem = () => {
    const item = {
      id: uuid.v4(),
      value: newItemValue,
    };
    setItems((currentItems) => [...currentItems, item]);
    setNewItemValue("");
  };

  const onHandlerModal = (item) => {
    setItemSelected(item);
    setModalVisible(!modalVisible);
  };

  const onHandlerDelete = (item) => {
    setItems((currentItems) =>
      currentItems.filter((currentItem) => currentItem.id !== item.id)
    );
    setItemSelected({});
    setModalVisible(!modalVisible);
  };

  const onHandlerEditModal = (item) => {
    setItemSelected(item);
    setEditItemValue(item.value);
    setEditModalVisible(!editModalVisible);
  };

  const onHandlerSaveEdit = () => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemSelected.id ? { ...item, value: editItemValue } : item
      )
    );
    setEditModalVisible(!editModalVisible);
    setItemSelected({});
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Add Item"
          placeholderTextColor={"white"}
          onChangeText={(text) => setNewItemValue(text)}
          value={newItemValue}
          style={styles.input}
        ></TextInput>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
            newItemValue.trim() === "" && styles.buttonDisabled,
          ]}
          onPress={addItem}
          disabled={newItemValue === ""}
        >
          <Text style={styles.textButton}>+</Text>
        </Pressable>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.value}</Text>
            <Pressable
              style={styles.button}
              onPress={() => onHandlerEditModal(item)}
            >
              <Text style={styles.textButton}>✎</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => onHandlerModal(item)}
            >
              <Text style={styles.textButton}>-</Text>
            </Pressable>
          </View>
        )}
      />

      {/* Edit Item Modal */}
      <Modal animationType="fade" visible={editModalVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Current Value:</Text>
            <Text style={styles.modalText}>{itemSelected.value}</Text>

            <Text style={styles.modalText}>New Value:</Text>
            <TextInput
              style={styles.modalInput}
              onChangeText={setEditItemValue}
            />

            <View style={styles.modalButtons}>
              <Pressable style={styles.modalButton} onPress={onHandlerSaveEdit}>
                <Text style={styles.modalButtonText}>Save</Text>
              </Pressable>
              <Pressable
                style={styles.modalButton}
                onPress={() => setEditModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal animationType="fade" visible={modalVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to delete {itemSelected.value}?
            </Text>
            <View style={styles.modalButtons}>
              <Pressable
                style={styles.modalButton}
                onPress={() => onHandlerDelete(itemSelected)}
              >
                <Text style={styles.modalButtonText}>Yes</Text>
              </Pressable>
              <Pressable
                style={styles.modalButton}
                onPress={() => onHandlerModal({})}
              >
                <Text style={styles.modalButtonText}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
  card: {
    width: "80%",
    backgroundColor: "#F4012D",
    marginHorizontal: "10%",
    marginVertical: 20,
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    flexDirection: "row",
  },
  cardText: {
    color: "white",
    flex: 1,
    textAlign: "center",
  },
  modalContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
  },
  modalView: {
    width: "80%",
    marginHorizontal: "10%",
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 18,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    gap: 20,
  },
  modalButton: {
    backgroundColor: "#F4012D",
    padding: 10,
    borderRadius: 6,
  },
  modalButtonText: {
    color: "white",
    textAlign: "center",
  },
  modalInput: {
    backgroundColor: "#F4012D",
    borderBottomColor: "white",
    borderBottomWidth: 2,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    color: "white",
  },
});
