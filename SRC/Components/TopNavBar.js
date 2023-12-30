import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import chaticon from "../../assets/chat.png";
import { bottomicon, logo2 } from "../Common CSS/pagescss";
import logo from "../../assets/logo2.png";

const TopNavBar = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={logo2} />
      <Image source={chaticon} style={bottomicon} />
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
    backgroundColor: "black",
  },
});
