import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { containerFull } from "../../Common CSS/pagescss";
import { formHead } from "../../Common CSS/formcss";
import BottomNavBar from "../../Components/BottomNavBar";
import TopNavBar from "../../Components/TopNavBar";

const MainPage = () => {
  return (
    <View style={containerFull}>
      <StatusBar />
      <TopNavBar />
      <BottomNavBar />
      <Text style={formHead}>MainPage</Text>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({});
