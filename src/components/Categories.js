import { StyleSheet, FlatList } from "react-native";
import CardItemCategory from "./CardItemCategory";
import categories from "../data/categories";

const Categories = () => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <CardItemCategory item={item} />}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
