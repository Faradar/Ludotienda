import { StyleSheet, View, FlatList, useWindowDimensions } from "react-native";
import { useEffect, useState } from "react";
import products from "../data/products";
import Search from "../components/Search";
import CardProduct from "../components/CardProduct";
import NoResults from "../components/NoResults";

const ProductsByCategory = ({
  route: {
    params: { category },
  },
}) => {
  // const {category} = route.params; // this is another way to get the category

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
