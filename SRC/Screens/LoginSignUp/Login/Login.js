import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import logo from "../../../../assets/Logo.png";
import { containerFull, hr80, logo1 } from "../../../Common CSS/pagescss";
import {
  formButton,
  formHead,
  formInput,
  formTextLinkCenter,
  formTextLinkRight,
} from "../../../Common CSS/formcss";

const Login = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <Image source={logo} style={logo1} />
      <Text style={formHead}>Login</Text>
      <TextInput placeholder="Email" style={formInput}></TextInput>
      <TextInput
        placeholder="Password"
        style={formInput}
        secureTextEntry={true}
      ></TextInput>
      <Text
        style={formTextLinkRight}
        onPress={() => navigation.navigate("ForgotPassword_EnterEmail")}
      >
        Forgot Password?
      </Text>
      <Text style={formButton} onPress={() => navigation.navigate("MainPage")}>
        Sign In
      </Text>
      <View style={hr80}></View>

      <Text style={formTextLinkCenter}>
        Don't have an account?{" "}
        <Text
          style={{ color: "blue" }}
          onPress={() => navigation.navigate("Signup_EnterEmail")}
        >
          Signup
        </Text>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
