import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import homeicon from "../../assets/Home.png";
import profileicon from "../../assets/Profile.png";
import searchicon from "../../assets/search.png";
import addmemoryicon from "../../assets/addmemory.png";
import notifcationicon from "../../assets/notification.png";
import { bottomicon } from "../Common CSS/pagescss";

const BottomNavBar = ({ navigation, page }) => {
  return (
    <View style={styles.container}>
      {page === "MainPage" ? (
        <TouchableOpacity onPress={() => navigation.navigate("MainPage")}>
          <Image source={homeicon} style={activebottomicon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate("MainPage")}>
          <Image source={homeicon} style={bottomicon} />
        </TouchableOpacity>
      )}
      {page === "SearchPage" ? (
        <TouchableOpacity onPress={() => navigation.navigate("SearchPage")}>
          <Image source={searchicon} style={bottomicon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate("SearchPage")}>
          <Image source={searchicon} style={bottomicon} />
        </TouchableOpacity>
      )}
      {page === "AddMemory" ? (
        <TouchableOpacity onPress={() => navigation.navigate("AddMemory")}>
          <Image source={addmemoryicon} style={bottomicon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate("AddMemory")}>
          <Image source={addmemoryicon} style={bottomicon} />
        </TouchableOpacity>
      )}
      {page === "NotificationPage" ? (
        <TouchableOpacity
          onPress={() => navigation.navigate("NotificationPage")}
        >
          <Image source={notifcationicon} style={bottomicon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate("NotificationPage")}
        >
          <Image source={notifcationicon} style={bottomicon} />
        </TouchableOpacity>
      )}
      {page === "My_UserProfile" ? (
        <TouchableOpacity onPress={() => navigation.navigate("My_UserProfile")}>
          <Image source={profileicon} style={bottomicon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate("My_UserProfile")}>
          <Image source={profileicon} style={bottomicon} />
        </TouchableOpacity>
      )}
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
  activebottomicon: {
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
  },
});
