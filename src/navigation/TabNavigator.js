import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../global/colors";
import TabBarIcon from "../components/TabBarIcon";

// Stacks
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import OrderStack from "./OrderStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Shop"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="Shop" icon="shop" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="Cart" icon="shopping-cart" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="Orders" icon="list" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.primary,
    borderTopWidth: 0,
    height: 60,
  },
});
