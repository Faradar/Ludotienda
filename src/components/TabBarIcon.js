import { StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import colors from "../global/colors";

const TabBarIcon = ({ name, icon }) => {
  return (
    <View style={styles.container}>
      <Entypo name={icon} size={28} color={colors.lightGray} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 50,
  },
  text: {
    fontSize: 12,
    color: colors.lightGray,
  },
});
