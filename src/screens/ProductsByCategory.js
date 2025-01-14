import {
  StyleSheet,
  View,
  FlatList,
  useWindowDimensions,
  Text,
} from "react-native";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import CardProduct from "../components/CardProduct";
import NoResults from "../components/NoResults";
import { useGetProductsQuery } from "../services/shop";

const ProductsByCategory = ({ route }) => {
  const { category } = route.params;
  const { data, isSuccess, isError, error, isLoading } =
    useGetProductsQuery(category);
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);

  const [portrait, setPortrait] = useState(true);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (width > height) {
      setPortrait(false);
    } else {
      setPortrait(true);
    }
  }, [width, height]);

  useEffect(() => {
    if (isSuccess) {
      setProducts(Object.values(data));
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isSuccess) {
      setProducts(
        Object.values(data).filter((product) => product.title.includes(keyword))
      );
    }
  }, [keyword, isSuccess]);

  if (isError) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Search onChangeKeyword={(t) => setKeyword(t)} />
      {products.length === 0 ? (
        <NoResults message="No products match your search." />
      ) : (
        <FlatList
          data={products}
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
