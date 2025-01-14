import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { useSelector } from "react-redux";

const Navigator = () => {
  const idToken = useSelector((state) => state.user.idToken);

  return (
    <NavigationContainer>
      {idToken ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create();
