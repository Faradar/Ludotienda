import { StyleSheet, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import colors from "../global/colors";
import { useNavigation } from "@react-navigation/native";

const ArrowGoBack = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={24} color={colors.lightGray} />
    </Pressable>
  );
};

export default ArrowGoBack;

const styles = StyleSheet.create({
  goBack: {
    position: "absolute",
    left: 10,
  },
});
