import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { formHead } from "../../Common CSS/formcss";
import ChatCards from "../../Cards/ChatCards";

const AllChats = ({ navigation }) => {
  let chat = [
    {
      username: "Abhi",
      lastmessage: "Hey How Are You",
      time: "12:00",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "Beta",
      lastmessage: "Hey How Are You",
      time: "12:00",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "Buggu",
      lastmessage: "Hey How Are You",
      time: "12:00",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "Ravi",
      lastmessage: "Hey How Are You",
      time: "12:00",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "Manoj",
      lastmessage: "suno yaar ek kaam h",
      time: "03:00",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "Ankesh",
      lastmessage: "Ka haal h",
      time: "10:00",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "Palak",
      lastmessage: "Ka ho",
      time: "08:00",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "Mai Khud",
      lastmessage: "Namaste",
      time: "02:00",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "Bewkoof",
      lastmessage: "Namaste",
      time: "02:00",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "Moti",
      lastmessage: "Namaste",
      time: "02:00",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "Ullu",
      lastmessage: "Namaste",
      time: "02:00",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "Yass",
      lastmessage: "Namaste",
      time: "02:00",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <Ionicons
        name="chevron-back"
        size={24}
        color="black"
        style={styles.backbutton}
        onPress={() => navigation.navigate("MainPage")}
      />
      <View style={styles.chatcontainer}>
        <Text style={formHead}>All Chats</Text>
        <TextInput style={styles.searchbar} placeholder="Search Chats" />
      </View>
      <View style={styles.chatlist}>
        {chat.map((chat) => {
          return <ChatCards key={chat.username} chat={chat} />;
        })}
      </View>
    </ScrollView>
  );
};

export default AllChats;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 10,
  },
  backbutton: {
    position: "absolute",
    top: 35,
    left: 20,
    zIndex: 100,
    fontSize: 30,
    backgroundColor: "black",
    color: "white",
    borderRadius: 50,
    padding: 2,
  },
  chatcontainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 25,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 1,
  },
  searchbar: {
    width: "90%",
    borderRadius: 30,
    paddingVertical: 8,
    backgroundColor: "white",
    color: "black",
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
    borderWidth: 2,
  },
  chatlist: {
    width: "100%",
    padding: 10,
  },
});
