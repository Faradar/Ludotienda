import { Text, View, Modal } from "react-native";
import Buttons from "../Buttons";
import styles from "../../../styles";

const ModalDelete = ({
  deleteModalVisible,
  itemSelected,
  onHandlerDelete,
  onHandlerModal,
}) => {
  return (
    <Modal animationType="fade" visible={deleteModalVisible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Are you sure you want to delete {itemSelected.value}?
          </Text>
          <View style={styles.modalButtons}>
            <Buttons
              buttonStyle={styles.modalButton}
              onPress={() => onHandlerDelete(itemSelected)}
              textStyle={styles.modalButtonText}
              title="Yes"
            />
            <Buttons
              buttonStyle={styles.modalButton}
              onPress={() => onHandlerModal({})}
              textStyle={styles.modalButtonText}
              title="No"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDelete;
