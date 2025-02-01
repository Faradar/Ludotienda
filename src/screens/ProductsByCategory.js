import { StyleSheet, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import CardProduct from "../components/CardProduct";
import NoResults from "../components/NoResults";
import { useGetProductsQuery } from "../services/shop";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyListComponent from "../components/EmptyListComponent";

const ProductsByCategory = ({ route }) => {
  const { category } = route.params;
  const {
    data: productsData,
    isError,
    error,
    isLoading,
  } = useGetProductsQuery(category);
  const productsFilteredByCategory = productsData
    ? Object.values(productsData)
    : [];
  const [filteredProducts, setFilteredProducts] = useState(
    productsFilteredByCategory
  );

  useEffect(() => {
    setFilteredProducts(productsFilteredByCategory);
  }, [productsData]);

  if (isError) {
    return <EmptyListComponent message={`Error: ${error.message}`} />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <View style={styles.container}>
      <Search
        products={productsFilteredByCategory}
        onFilter={setFilteredProducts}
      />
      {filteredProducts.length === 0 ? (
        <NoResults message="No products match your search." />
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardProduct item={item} />}
          contentContainerStyle={styles.containerCard}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default ProductsByCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCard: {
    paddingBottom: 60,
  },
});
