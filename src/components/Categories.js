import { StyleSheet, FlatList } from "react-native";
import CardItemCategory from "./CardItemCategory";
import { useSelector } from "react-redux";

const Categories = () => {
  const categories = useSelector((state) => state.shop.categories);

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <CardItemCategory item={item} />}
      contentContainerStyle={styles.containerCard}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  containerCard: {
    paddingBottom: 60,
  },
});
