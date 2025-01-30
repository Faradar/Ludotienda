import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSession } from "../config/dbSqlite";
import { deleteUser, setUser } from "../features/userSlice";
import { init } from "../config/dbSqlite";

const Navigator = () => {
  const idToken = useSelector((state) => state.user.idToken);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await init();
        dispatch(deleteUser());
        const sessionUser = await fetchSession();
        if (sessionUser) {
          dispatch(setUser(sessionUser));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      {idToken ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigator;
