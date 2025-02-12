import { StyleSheet, Text, View } from "react-native";
import SubmitButton from "../components/SubmitButton";
import MapPreview from "../components/MapPreview";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { google_api_key } from "../config/database";
import { useSelector } from "react-redux";
import { usePatchLocationMutation } from "../services/user";
import { useNavigation } from "@react-navigation/native";
import LoadingSpinner from "../components/LoadingSpinner";
import colors from "../global/colors";

const LocationSelector = () => {
  const navigation = useNavigation();
  const localId = useSelector((state) => state.user.localId);
  const [triggerLocation] = usePatchLocationMutation();
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState({
    lat: "",
    long: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status != "granted") return;
        const newLocation = await Location.getCurrentPositionAsync();
        setLocation({
          lat: newLocation.coords.latitude,
          long: newLocation.coords.longitude,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (location.lat) {
        const urlReverseGeocoding = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.long}&key=${google_api_key}`;
        try {
          const response = await fetch(urlReverseGeocoding);
          const data = await response.json();
          setAddress(data.results[0].formatted_address);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [location]);

  const handleConfirmLocation = () => {
    triggerLocation({ localId, address, location });
    navigation.navigate("MyProfile");
  };

  if (location.lat === "") return <LoadingSpinner />;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Direccion: {address}</Text>
      <MapPreview location={location} />
      <SubmitButton
        title="Confirmar Ubicacion"
        onPress={handleConfirmLocation}
      />
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
    gap: 15,
  },
  text: {
    color: colors.darkGray,
    fontSize: 14,
    padding: 5,
  },
});
