import { StyleSheet, FlatList, Text, View } from "react-native";
import CardItemCategory from "./CardItemCategory";
import { useGetCategoriesQuery } from "../services/shop";
// import { useEffect } from "react";

const Categories = () => {
  const {
    data: categories,
    isError,
    error,
    isLoading,
  } = useGetCategoriesQuery();

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

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
