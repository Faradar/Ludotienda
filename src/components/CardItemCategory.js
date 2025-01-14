import { StyleSheet, Text, Pressable } from "react-native";
import ShadowCard from "./wrappers/ShadowCard";
import { useNavigation } from "@react-navigation/native";
import colors from "../global/colors";

const CardItemCategory = ({ item: category }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("ProductsByCategory", { category });
      }}
    >
      <ShadowCard style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </ShadowCard>
    </Pressable>
  );
};

export default CardItemCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accent,
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
