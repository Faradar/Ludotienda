import { Text, View, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contenedorPartes}>
        <View style={styles.parteUno}>
          <Text style={styles.text}>Parte 1</Text>
        </View>
        <View style={styles.parteDos}>
          <Text style={styles.text}>Parte 2</Text>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "white",
  },
  contenedorPartes: {
    backgroundColor: "yellow",
    width: "80%",
    marginHorizontal: "10%",
  },
  parteUno: {
    backgroundColor: "blue",
    width: "60%",
    padding: 20,
    margin: 10,
    flex: 3, // 3/4 of it's parent containers height
    alignItems: "center",
    justifyContent: "center",
  },
  parteDos: {
    backgroundColor: "green",
    width: "80%",
    padding: 30,
    margin: 10,
    flex: 1, // 1/4 of it's parent containers height
    alignItems: "center",
    justifyContent: "center",
  },
});
