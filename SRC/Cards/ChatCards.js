import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";

const ChatCards = ({ chat }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: chat.profilepic }} style={styles.profilepic} />
      <View style={styles.recentchat}>
        <Text style={styles.username}>{chat.username}</Text>
        <Text style={styles.lastchat}>{chat.lastmessage}</Text>
      </View>
    </View>
  );
};

export default ChatCards;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
  },
  profilepic: {
    height: 40,
    width: 40,
  },
  recentchat: {
    flexDirection: "column",
    marginLeft: 20,
  },
  lastchat: {
    color: "gray",
    fontStyle: "italic",
  },
  username: {
    fontWeight: "bold",
  },
});
