import { StyleSheet, View, Image, Text } from "react-native";
import SubmitButton from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../services/user";
import LoadingSpinner from "../components/LoadingSpinner";
import colors from "../global/colors";

const MyProfile = () => {
  const navigation = useNavigation();
  const localId = useSelector((state) => state.user.localId);
  const { data: user, isLoading } = useGetUserQuery({ localId });

  if (isLoading) return <LoadingSpinner />;

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={
            user?.image
              ? { uri: user.image }
              : require("../../assets/profile_default.png")
          }
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <SubmitButton
        title="Add profile image"
        onPress={() => navigation.navigate("ImageSelector")}
      />
      <SubmitButton
        title="Add location"
        onPress={() => navigation.navigate("LocationSelector")}
      />
      <View style={styles.containerText}>
        <Text style={styles.text}>{user?.address}</Text>
      </View>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    alignItems: "center",
    gap: 20,
  },
  containerImage: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    overflow: "hidden",
  },
  image: {
    width: 150,
    height: 150,
  },
  containerText: {
    flexDirection: "row",
    gap: 20,
    padding: 10,
  },
  text: {
    color: colors.darkGray,
    fontSize: 14,
    padding: 5,
  },
});
