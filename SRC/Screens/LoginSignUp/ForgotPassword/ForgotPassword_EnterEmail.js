import { StyleSheet, Image, TextInput, Text, View } from "react-native";
import React from "react";
import logo from "../../../../assets/Logo.png";
import { containerFull, logo1 } from "../../../Common CSS/pagescss";
import {
  formButton,
  formHead,
  formInput,
  formTextLinkLeft,
} from "../../../Common CSS/formcss";

const ForgotPassword_EnterEmail = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <Image source={logo} style={logo1} />
      <Text style={formHead}>SignUp</Text>
      <TextInput placeholder="Email" style={formInput}></TextInput>
      <Text
        style={formButton}
        onPress={() =>
          navigation.navigate("ForgotPassword_EnterVerificationCode")
        }
      >
        Next
      </Text>
      <Text
        style={formTextLinkLeft}
        onPress={() => navigation.navigate("Login")}
      >
        Back
      </Text>
    </View>
  );
};

export default ForgotPassword_EnterEmail;

const styles = StyleSheet.create({});
