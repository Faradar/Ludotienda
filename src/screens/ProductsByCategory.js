import { Pressable, StyleSheet, Text, View, FlatList } from "react-native";
import products from "../data/products";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import CardProduct from "../components/CardProduct";

const ProductsByCategory = ({ category }) => {
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
    <View>
      <Header title={category} />
      <Search filterByKeyword={filterByKeyword} />
      <FlatList
        data={productsFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardProduct item={item} />}
      />
    </View>
  );
};

export default ProductsByCategory;

const styles = StyleSheet.create({});
