import { View } from "react-native";
import { useState } from "react";
import uuid from "react-native-uuid";
import styles from "./styles";
import ContainerAddItem from "./src/components/ContainerAddItem";
import ListItems from "./src/components/ListItems";
import ModalDelete from "./src/components/Modals/ModalDelete";
import ModalEdit from "./src/components/Modals/ModalEdit";

const App = () => {
  const [newItemValue, setNewItemValue] = useState("");
  const [items, setItems] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editItemValue, setEditItemValue] = useState("");

  const addItem = () => {
    const item = {
      id: uuid.v4(),
      value: newItemValue,
      completed: false,
    };
    setItems((currentItems) => [...currentItems, item]);
    setNewItemValue("");
  };

  const onToggleComplete = (id) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const onHandlerModal = (item) => {
    setItemSelected(item);
    setDeleteModalVisible(!deleteModalVisible);
  };

  const onHandlerDelete = (item) => {
    setItems((currentItems) =>
      currentItems.filter((currentItem) => currentItem.id !== item.id)
    );
    setItemSelected({});
    setDeleteModalVisible(!deleteModalVisible);
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
      <ContainerAddItem
        setNewItemValue={setNewItemValue}
        newItemValue={newItemValue}
        addItem={addItem}
      />

      <ListItems
        items={items}
        onHandlerEditModal={onHandlerEditModal}
        onHandlerModal={onHandlerModal}
        onToggleComplete={onToggleComplete}
      />

      <ModalEdit
        editModalVisible={editModalVisible}
        itemSelected={itemSelected}
        setEditItemValue={setEditItemValue}
        onHandlerSaveEdit={onHandlerSaveEdit}
        setEditModalVisible={setEditModalVisible}
      />

      <ModalDelete
        deleteModalVisible={deleteModalVisible}
        itemSelected={itemSelected}
        onHandlerDelete={onHandlerDelete}
        onHandlerModal={onHandlerModal}
      />
    </View>
  );
};

export default App;
