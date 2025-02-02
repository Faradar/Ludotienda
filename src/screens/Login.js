import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import colors from "../global/colors";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import { useLoginMutation } from "../services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";
import loginSchema from "../validations/loginSchema";
import { deleteSession, insertSession } from "../config/dbSqlite";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigation();
  const [triggerLogin] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      loginSchema.validateSync({ email, password });
      const response = await triggerLogin({ email, password });

      if (response.error && response.error.data && response.error.data.error) {
        if (response.error.data.error.message === "INVALID_LOGIN_CREDENTIALS") {
          setEmailError(
            "El email o la contraseña son incorrectos. Por favor, intente nuevamente."
          );
          return;
        }
      }

      const user = {
        email: response.data.email,
        idToken: response.data.idToken,
        localId: response.data.localId,
      };
      dispatch(setUser(user));
      await deleteSession();
      await insertSession(user.localId, user.email, user.idToken);
    } catch (error) {
      switch (error.path) {
        case "email":
          setEmailError(error.message);
          setPasswordError("");
          break;
        case "password":
          setPasswordError(error.message);
          setEmailError("");
          break;
      }
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Ingresá</Text>
        <InputForm
          label="E-mail"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error={emailError}
        />
        <InputForm
          label="Contraseña"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error={passwordError}
        />
        <SubmitButton onPress={onSubmit} title="Iniciar Sesión" />
        <Text style={styles.sub}>¿No tienes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.subLink}>Regístrate</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: colors.primary,
    gap: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: "Lobster",
    color: colors.lightGray,
  },
  sub: {
    fontSize: 14,
    fontFamily: "Josefin",
    color: colors.lightGray,
  },
  subLink: {
    fontSize: 14,
    fontFamily: "Josefin",
    color: colors.lightGray,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});
