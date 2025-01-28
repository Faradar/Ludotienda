import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../global/colors";
import ArrowGoBack from "./ArrowGoBack";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { deleteUser } from "../features/userSlice";
import { deleteSession } from "../config/dbSqlite";

const Header = ({ title }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    deleteSession();
    dispatch(deleteUser());
  };

  return (
    <View style={styles.container}>
      {title !== "Home" && <ArrowGoBack />}
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={onLogout} style={styles.logout}>
        <AntDesign name="logout" size={20} color={colors.lightGray} />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
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
  logout: {
    position: "absolute",
    right: 10,
  },
});
