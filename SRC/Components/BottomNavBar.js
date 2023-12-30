import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import homeicon from "../../assets/Home.png";
import profileicon from "../../assets/Profile.png";
import searchicon from "../../assets/search.png";
import addmemoryicon from "../../assets/addmemory.png";
import notifcationicon from "../../assets/notification.png";
import { bottomicon } from "../Common CSS/pagescss";

const BottomNavBar = () => {
  return (
    <View style={styles.container}>
      <Image source={homeicon} style={bottomicon} />
      <Image source={searchicon} style={bottomicon} />
      <Image source={addmemoryicon} style={bottomicon} />
      <Image source={notifcationicon} style={bottomicon} />
      <Image source={profileicon} style={bottomicon} />
    </View>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderTopColor: "black",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 20,
    borderTopWidth: 1,
    backgroundColor: "black",
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 100,
    padding: 15,
  },
});
