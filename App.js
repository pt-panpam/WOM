import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./SRC/Screens/LoginSignUp/Login/Login";
import Signup_EnterEmail from "./SRC/Screens/LoginSignUp/SignUp/Signup_EnterEmail";
import Signup_EnterVerificationCode from "./SRC/Screens/LoginSignUp/SignUp/Signup_EnterVerificationCode";
import Signup_ChoosePassword from "./SRC/Screens/LoginSignUp/SignUp/Signup_ChoosePassword";
import Signup_ChooseUsername from "./SRC/Screens/LoginSignUp/SignUp/Signup_ChooseUsername";
import Signup_AccountCreated from "./SRC/Screens/LoginSignUp/SignUp/Signup_AccountCreated";
import ForgotPassword_AccountRecoverd from "./SRC/Screens/LoginSignUp/ForgotPassword/ForgotPassword_AccountRecovered";
import ForgotPassword_ChangePassword from "./SRC/Screens/LoginSignUp/ForgotPassword/ForgotPassword_ChangePassword";
import ForgotPassword_EnterEmail from "./SRC/Screens/LoginSignUp/ForgotPassword/ForgotPassword_EnterEmail";
import ForgotPassword_EnterVerificationCode from "./SRC/Screens/LoginSignUp/ForgotPassword/ForgotPassword_EnterVerificationCode";
import MainPage from "./SRC/Screens/MainPage/MainPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup_EnterEmail" component={Signup_EnterEmail} />
        <Stack.Screen
          name="Signup_EnterVerificationCode"
          component={Signup_EnterVerificationCode}
        />
        <Stack.Screen
          name="Signup_ChoosePassword"
          component={Signup_ChoosePassword}
        />
        <Stack.Screen
          name="Signup_ChooseUsername"
          component={Signup_ChooseUsername}
        />
        <Stack.Screen
          name="Signup_AccountCreated"
          component={Signup_AccountCreated}
        />
        <Stack.Screen
          name="ForgotPassword_EnterVerificationCode"
          component={ForgotPassword_EnterVerificationCode}
        />
        <Stack.Screen
          name="ForgotPassword_EnterEmail"
          component={ForgotPassword_EnterEmail}
        />
        <Stack.Screen
          name="ForgotPassword_ChangePassword"
          component={ForgotPassword_ChangePassword}
        />
        <Stack.Screen
          name="ForgotPassword_AccountRecovered"
          component={ForgotPassword_AccountRecoverd}
        />
        <Stack.Screen name="MainPage" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
