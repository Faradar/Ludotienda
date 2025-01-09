import { StyleSheet, View, FlatList, useWindowDimensions } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Search from "../components/Search";
import CardProduct from "../components/CardProduct";
import NoResults from "../components/NoResults";

const ProductsByCategory = () => {
  const [portrait, setPortrait] = useState(true);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (width > height) {
      setPortrait(false);
    } else {
      setPortrait(true);
    }
  }, [width, height]);

  const { productsFilteredByCategory } = useSelector((state) => state.shop);

  return (
    <View style={{ flex: 1 }}>
      <Search />
      {productsFilteredByCategory.length === 0 ? (
        <NoResults message="No products match your search." />
      ) : (
        <FlatList
          data={productsFilteredByCategory}
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
