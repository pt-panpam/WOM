import { StyleSheet, Text, TextInput, Image, View, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import logo from "../../../../assets/Logo.png";
import { containerFull, logo1 } from "../../../Common CSS/pagescss";
import {
  formButton,
  formHead,
  formInput,
  formTextLinkLeft,
} from "../../../Common CSS/formcss";

const Signup_EnterEmail = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmail = async () => {
    try {
      if (email === '') {
        alert("Please Enter Email");
      } else {
        setLoading(true);

        const response = await fetch('http://10.0.2.2:3000/verify', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
          }),
        });

        const data = await response.json();

        if (data.error === "Already Registered") {
          alert("Already Registered");
        }

        setLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <View style={containerFull}>
      <Image source={logo} style={logo1} />
      <Text style={formHead}>SignUp</Text>
      <TextInput
        placeholder="Enter Your Email"
        style={formInput}
        onChangeText={(text) => setEmail(text)}
      />
      {loading ? (
        <ActivityIndicator size={"large"} color={"black"} />
      ) : (
        <Text style={formButton} onPress={() => handleEmail()}>
          Next
        </Text>
      )}
      <Text
        style={formTextLinkLeft}
        onPress={() => navigation.navigate("Login")}
      >
        Back
      </Text>
    </View>
  );
};


export default Signup_EnterEmail;

const styles = StyleSheet.create({});
