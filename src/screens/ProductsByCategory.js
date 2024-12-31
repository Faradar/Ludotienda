import { StyleSheet, View, FlatList, useWindowDimensions } from "react-native";
import products from "../data/products";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import CardProduct from "../components/CardProduct";
import NoResults from "../components/NoResults";

const ProductsByCategory = ({ category }) => {
  const [portrait, setPortrait] = useState(true);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (width > height) {
      setPortrait(false);
    } else {
      setPortrait(true);
    }
  }, [width, height]);

  const [productsFiltered, setProductsFiltered] = useState([]);

  useEffect(() => {
    setProductsFiltered(
      products.filter((product) => product.category === category)
    );
  }, [products, category]);

  const filterByKeyword = (keyword) => {
    setProductsFiltered(
      products.filter(
        (product) =>
          product.category === category &&
          product.title.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title={category} />
      <Search filterByKeyword={filterByKeyword} />
      {productsFiltered.length === 0 ? (
        <NoResults message="No products match your search." />
      ) : (
        <FlatList
          data={productsFiltered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardProduct item={item} />}
          contentContainerStyle={portrait ? null : styles.containerLandscape}
        />
      )}
    </View>
  );
};

export default ProductsByCategory;

const styles = StyleSheet.create({
  containerLandscape: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
