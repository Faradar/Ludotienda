import { View, Text, StyleSheet } from "react-native";

const NoResults = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message || "No results found."}</Text>
    </View>
  );
};

export default NoResults;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
  },
});
