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

const ForgotPassword_EnterVerificationCode = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <Image source={logo} style={logo1} />
      <Text style={formHead}>SignUp</Text>
      <TextInput placeholder="6-digit code" style={formInput}></TextInput>
      <Text
        style={formButton}
        onPress={() => navigation.navigate("ForgotPassword_ChangePassword")}
      >
        Next
      </Text>
      <Text
        style={formTextLinkLeft}
        onPress={() => navigation.navigate("ForgotPassword_EnterEmail")}
      >
        Back
      </Text>
    </View>
  );
};

export default ForgotPassword_EnterVerificationCode;

const styles = StyleSheet.create({});
