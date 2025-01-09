import { StyleSheet, Text, View } from "react-native";
import ArrowGoBack from "./ArrowGoBack";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      {title !== "Home" && <ArrowGoBack />}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  title: {
    fontSize: 20,
    color: "white",
    fontFamily: "josefin",
  },
});
