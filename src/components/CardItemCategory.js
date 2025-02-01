import { StyleSheet, Image, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../global/colors";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const { width: viewWidth } = Dimensions.get("window");

const CardItemCategory = ({ item: category }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("ProductsByCategory", { category });
      }}
      style={styles.container}
    >
      {loading && <LoadingSpinner />}
      <Image
        source={{ uri: category.image }}
        style={styles.image}
        onLoadStart={() => setLoading(true)}
        onLoad={() => setLoading(false)}
      ></Image>
    </Pressable>
  );
};

export default CardItemCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accent,
    marginHorizontal: "auto",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    width: viewWidth * 0.9,
    height: viewWidth * 0.9,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
