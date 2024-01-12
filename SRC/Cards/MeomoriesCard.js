import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const MeomoriesCard = ({ memories }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: memories.memories_image }}
        style={styles.profilepic}
      />
      <View style={styles.description}>
        <Text style={styles.username}>{memories.title}</Text>
        <Text style={styles.lastchat}>Captured on:{memories.captured_on}</Text>
        <Text style={styles.lastchat}>Captured on:{memories.location}</Text>
      </View>
    </View>
  );
};

export default MeomoriesCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    marginTop: 15,
  },
  profilepic: {
    height: 130,
    width: 130,
    borderRadius: 10,
    margin: 4,
  },
  description: {
    flexDirection: "column",
    marginLeft: 20,
  },
  lastchat: {
    color: "gray",
    fontStyle: "italic",
  },
  username: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
