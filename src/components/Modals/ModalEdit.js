import { Text, View, Modal, TextInput } from "react-native";
import Buttons from "../Buttons";
import styles from "../../../styles";

const ModalEdit = ({
  editModalVisible,
  itemSelected,
  setEditItemValue,
  onHandlerSaveEdit,
  setEditModalVisible,
}) => {
  return (
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
            <Buttons
              buttonStyle={styles.modalButton}
              onPress={onHandlerSaveEdit}
              textStyle={styles.modalButtonText}
              title="Save"
            />
            <Buttons
              buttonStyle={styles.modalButton}
              onPress={() => setEditModalVisible(false)}
              textStyle={styles.modalButtonText}
              title="Cancel"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalEdit;
