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

const ForgotPassword_ChangePassword = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <Image source={logo} style={logo1} />
      <Text style={formHead}>SignUp</Text>
      <TextInput placeholder="New Password" style={formInput}></TextInput>
      <Text
        style={formButton}
        onPress={() => navigation.navigate("ForgotPassword_AccountRecovered")}
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

export default ForgotPassword_ChangePassword;

const styles = StyleSheet.create({});
