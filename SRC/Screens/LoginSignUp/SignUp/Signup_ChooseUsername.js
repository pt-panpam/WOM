import { StyleSheet, Text, TextInput, Image, View } from "react-native";
import React from "react";
import logo from "../../../../assets/Logo.png";
import { containerFull, logo1 } from "../../../Common CSS/pagescss";
import {
  formButton,
  formHead,
  formInput,
  formTextLinkLeft,
} from "../../../Common CSS/formcss";

const Signup_ChooseUsername = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <Image source={logo} style={logo1} />
      <Text style={formHead}>SignUp</Text>
      <TextInput placeholder="Choose Username" style={formInput}></TextInput>
      <Text
        style={formButton}
        onPress={() => navigation.navigate("Signup_ChoosePassword")}
      >
        Next
      </Text>
      <Text
        style={formTextLinkLeft}
        onPress={() => navigation.navigate("Signup_EnterEmail")}
      >
        Back
      </Text>
    </View>
  );
};

export default Signup_ChooseUsername;

const styles = StyleSheet.create({});
