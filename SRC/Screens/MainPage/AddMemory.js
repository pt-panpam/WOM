import { StyleSheet, StatusBar, Text, View } from "react-native";
import React from "react";
import TopNavBar from "../../Components/TopNavBar";
import BottomNavBar from "../../Components/BottomNavBar";

const AddMemory = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation} />
      <BottomNavBar navigation={navigation} />
    </View>
  );
};

export default AddMemory;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingVertical: 65,
  },
});
