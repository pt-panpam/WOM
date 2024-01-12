import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";
import chaticon from "../../assets/chat.png";
import { bottomicon, logo2 } from "../Common CSS/pagescss";
import logo from "../../assets/logo2.png";
import { Ionicons } from "@expo/vector-icons";

const TopNavBar = ({ navigation, page }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={logo2} />
      {page === "MainPage" && (
        <TouchableOpacity onPress={() => navigation.navigate("AllChats")}>
          <View style={styles.button}>
            <Image source={chaticon} style={bottomicon} />
          </View>
        </TouchableOpacity>
      )}
      {page === "My_UserProfile" && (
        <TouchableOpacity onPress={() => navigation.navigate("Setting1")}>
          <View style={styles.button}>
            <Ionicons name="settings" size={24} color="black" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TopNavBar;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: 15,
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    backgroundColor: "white",
  },
});
