import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { containerFull } from "../../Common CSS/pagescss";
import { formHead } from "../../Common CSS/formcss";
import BottomNavBar from "../../Components/BottomNavBar";
import TopNavBar from "../../Components/TopNavBar";
import FollowingMemories from "../../Components/FollowingMemories";

const MainPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation} page={"MainPage"} />
      <BottomNavBar navigation={navigation} />
      <FollowingMemories />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingVertical: 65,
  },
});
