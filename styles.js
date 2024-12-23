import { StyleSheet } from "react-native";

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
    backgroundColor: "#aaa",
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
  cardTextCompleted: {
    textDecorationLine: "line-through",
    color: "#888",
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

export default styles;
