import { FlatList, StyleSheet, Text, View } from "react-native";
import orders from "../data/orders";
import CardOrder from "../components/CardOrder";

const Orders = () => {
  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardOrder order={item} />}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
