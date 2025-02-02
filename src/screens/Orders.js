import { FlatList, View } from "react-native";
import CardOrder from "../components/CardOrder";
import { useGetOrdersQuery } from "../services/orders";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyListComponent from "../components/EmptyListComponent";

const Orders = () => {
  const localId = useSelector((state) => state.user.localId);
  const { data: orders, isLoading } = useGetOrdersQuery({ localId });

  if (isLoading) return <LoadingSpinner />;
  if (!orders)
    return <EmptyListComponent message="No tenés ninguna orden todavia" />;
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
