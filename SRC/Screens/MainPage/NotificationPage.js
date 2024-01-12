import { StyleSheet, StatusBar, Text, View } from "react-native";
import React from "react";
import TopNavBar from "../../Components/TopNavBar";
import BottomNavBar from "../../Components/BottomNavBar";

const NotificationPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation} />
      <BottomNavBar navigation={navigation} page={"NotificationPage"} />
      <View style={styles.c1}>
        <View style={styles.notification}>
          <Text>Some Notification</Text>
        </View>
        <View style={styles.notification}>
          <Text>Some Notification</Text>
        </View>
        <View style={styles.notification}>
          <Text>Some Notification</Text>
        </View>
        <View style={styles.notification}>
          <Text>Some Notification</Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 50,
    borderRadius: 10,
  },
  c1: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  notification: {
    width: "98%",
    height: 50,
    backgroundColor: "white",
    marginTop: 10,
  },
});
