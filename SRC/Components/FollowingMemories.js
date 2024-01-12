import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import PostBigCard from "../Cards/PostBigCard";

const FollowingMemories = () => {
  let data = [
    {
      id: 1,
      username: "user1",
      memorypost:
        "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      likes: ["user2", "user3"],
      comments: [
        {
          id: 2,
          username: "user2",
          comment: "nice post",
        },
        {
          id: 3,
          username: "user3",
          comment: "nice memories",
        },
      ],
    },
    {
      id: 2,
      username: "user2",
      memorypost:
        "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      likes: ["user2", "user3"],
      comments: [
        {
          id: 1,
          username: "user2",
          comment: "nice post",
        },
        {
          id: 2,
          username: "user3",
          comment: "nice memories",
        },
      ],
    },
    {
      id: 3,
      username: "user3",
      memorypost:
        "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      likes: ["user2", "user3"],
      comments: [
        {
          id: 1,
          username: "user2",
          comment: "nice post",
        },
        {
          id: 2,
          username: "user3",
          comment: "nice memories",
        },
      ],
    },
    {
      id: 4,
      username: "user4",
      memorypost:
        "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      likes: ["user2", "user3"],
      comments: [
        {
          id: 1,
          username: "user2",
          comment: "nice post",
        },
        {
          id: 2,
          username: "user3",
          comment: "nice memories",
        },
      ],
    },
  ];
  //   console.log(data);
  return (
    <ScrollView style={styles.container}>
      {data.map((item) => {
        return (
          <PostBigCard
            key={item.id}
            username={item.username}
            profilepic={item.profilepic}
            memorypost={item.memorypost}
            likes={item.likes}
            comments={item.comments}
          />
        );
      })}
    </ScrollView>
  );
};

export default FollowingMemories;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    flexDirection: "column",
  },
});
