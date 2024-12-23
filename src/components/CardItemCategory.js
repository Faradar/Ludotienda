import { StyleSheet, Text } from "react-native";
import ShadowCard from "./wrappers/ShadowCard";

const CardItemCategory = ({ item }) => {
  return (
    <ShadowCard style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </ShadowCard>
  );
};

export default CardItemCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  text: {
    color: "white",
  },
});
