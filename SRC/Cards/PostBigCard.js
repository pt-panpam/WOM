import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import beforelike from "../../assets/beforelike.png";
import afterlike from "../../assets/afterlike.png";
import commenticon from "../../assets/commenticon.png";
import shareicon from "../../assets/shareicon.png"; // Add your share icon

const PostBigCard = ({ username, profilepic, memorypost, likes, comments }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
  };

  const handleCommentPress = () => {
    setShowComments(!showComments);
  };

  const handleSharePress = () => {
    // Implement share functionality here
    console.log("Share button pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <Image source={{ uri: profilepic }} style={styles.postprofilepic} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <View>
        <Image source={{ uri: memorypost }} style={styles.memorypost} />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleLikePress}>
          <View style={styles.button}>
            {isLiked ? (
              <>
                <Image source={afterlike} style={styles.likeicon} />
                <Text style={styles.likecount}>{likes.length + 1}</Text>
              </>
            ) : (
              <>
                <Image source={beforelike} style={styles.likeicon} />
                <Text style={styles.likecount}>{likes.length}</Text>
              </>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCommentPress}>
          <View style={styles.button}>
            <Image source={commenticon} style={styles.commenticon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSharePress}>
          <View style={styles.button}>
            <Image source={shareicon} style={styles.shareicon} />
          </View>
        </TouchableOpacity>
      </View>
      {showComments && (
        <View style={styles.commentcontainer}>
          {comments.map((item, index) => (
            <View style={styles.commentline} key={item.id}>
              <Text style={styles.username2}>{item.username}</Text>
              <Text style={styles.commenttext}>{item.comment}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default PostBigCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "white",
    borderTopColor: "black",
    borderBottomColor: "black",
    borderRadius: 15,
    borderWidth: 2,
    paddingVertical: 10,
  },
  c1: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
  postprofilepic: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderColor: "blue",
    borderWidth: 3,
  },
  username: {
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 17,
    color: "black",
  },
  memorypost: {
    width: "100%",
    aspectRatio: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 5,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    // padding: 5,
  },
  likeicon: {
    height: 35,
    width: 30,
    marginLeft: 5,
  },
  commenticon: {
    height: 30,
    width: 30,
    marginLeft: 20,
    marginVertical: 5,
  },
  shareicon: {
    height: 30,
    width: 30,
    marginLeft: 20,
    marginVertical: 5,
  },
  likecount: {
    fontSize: 20,
    fontWeight: "400",
    marginLeft: 5,
    marginTop: 12,
  },
  commentcontainer: {
    width: "100%",
    backgroundColor: "white",
  },
  commentline: {
    flexDirection: "row",
    padding: 5,
  },
  commenttext: {
    marginLeft: 10,
  },
  username2: {
    fontWeight: "bold",
  },
});
