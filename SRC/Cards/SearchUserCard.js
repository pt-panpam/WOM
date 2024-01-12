import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const SearchUserCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: data.profilepic }} style={styles.profilepic} />
      <View style={styles.recentchat}>
        <Text style={styles.username}>{data.username}</Text>
        <Text style={styles.lastchat}>{data.name}</Text>
      </View>
    </View>
  );
};

export default SearchUserCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
  },
  profilepic: {
    height: 50,
    width: 50,
  },
  recentchat: {
    flexDirection: "column",
    marginLeft: 10,
  },
  lastchat: {
    color: "gray",
  },
  username: {
    fontWeight: "bold",
  },
});
