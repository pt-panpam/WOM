import {
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
  View,
  Image,
} from "react-native";
import React from "react";
import BottomNavBar from "../../Components/BottomNavBar";
import TopNavBar from "../../Components/TopNavBar";
import MeomoriesCard from "../../Cards/MeomoriesCard";

const My_UserProfile = ({ navigation }) => {
  const data = {
    username: "pt_panpam",
    name: "Abhijeet Mishra",
    Subscribers: "1600",
    bio: "hey i am abhijeet mishra developer at codeGOD",
    profilepic: "https://picsum.photos/400/400",
    location: "Lucknow",
    memories: [
      {
        id: "1",
        memories_image: "https://picsum.photos/400/400",
        captured_on: "12/3/12",
        title: "This memories is adroable for me",
        location: "Lucknow",
      },
      {
        id: "2",
        memories_image: "https://picsum.photos/500/500",
        captured_on: "12/3/12",
        title: "This memories is adroable for me",
        location: "Lucknow",
      },
      {
        id: "3",
        memories_image: "https://picsum.photos/200/200",
        captured_on: "12/3/12",
        title: "This memories is adroable for me",
        location: "Lucknow",
      },
      {
        id: "4",
        memories_image: "https://picsum.photos/300/300",
        captured_on: "12/3/12",
        title: "This memories is adroable for me",
        location: "Lucknow",
      },
      {
        id: "5",
        memories_image: "https://picsum.photos/700/700",
        captured_on: "12/3/12",
        title: "This memories is adroable for me",
        location: "Lucknow",
      },
    ],
  };
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation} page={"My_UserProfile"} />
      <BottomNavBar navigation={navigation} />
      <ScrollView>
        <View style={styles.profilecontainer}>
          <Image source={{ uri: data.profilepic }} style={styles.profilepic} />
          <Text style={styles.username}>@{data.username}</Text>
          <Text style={styles.bio}>{data.name}</Text>
          <Text style={styles.bio}>{data.location}</Text>
          <Text style={styles.bio}>{data.bio}</Text>
        </View>
        <View style={styles.profilecontainer2}>
          <View style={styles.profilecontainer21}>
            <Text style={styles.text21}>Memories</Text>
            <Text style={styles.text22}>{data.memories.length}</Text>
          </View>
          <View style={styles.vertline}></View>
          <View style={styles.profilecontainer21}>
            <Text style={styles.text21}>Subscribers</Text>
            <Text style={styles.text22}>{data.Subscribers}</Text>
          </View>
          <View style={styles.vertline}></View>
          <View style={styles.profilecontainer21}>
            <Text style={styles.text21}>Views</Text>
            <Text style={styles.text22}>12M</Text>
          </View>
        </View>
        <View>
          <Text style={styles.text}>Your Memories</Text>
          {/* <View>
            <View style={styles.memories}>
              {data.memories.map((item) => {
                return (
                  <Image
                    key={item.id}
                    source={{ uri: item.memories_image }}
                    style={styles.thumbnail}
                  />
                );
              })}
            </View>
          </View> */}
        </View>
        <View style={styles.chatlist}>
          {data.memories.map((memories) => {
            return <MeomoriesCard key={memories.id} memories={memories} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default My_UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8", 
    paddingTop: 65,
  },
  profilecontainer: {
    alignItems: "center",
  },
  profilepic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 5,
    borderColor: "#333", 
    borderWidth: 2,
  },
  bio: {
    fontSize: 15,
    fontStyle: "italic",
    marginBottom: 2,
    alignSelf: "flex-start",
    marginLeft: 20,
    color: "#555", // Dark gray text
  },
  username: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 10,
    paddingVertical: 5,
    color: "#000", // Black text
  },
  text21: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#555", // Dark gray text
  },
  profilecontainer2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 5,
    marginTop: 15,
  },
  profilecontainer21: {
    alignItems: "center",
  },
  vertline: {
    width: 1,
    height: 50,
    backgroundColor: "#555", // Dark gray line
  },
  text: {
    alignSelf: "center",
    fontSize: 22,
    marginTop: 15,
    fontWeight: "900",
    color: "#333", // Dark gray text
  },
  memories: {
    paddingVertical: 20,
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  thumbnail: {
    height: 120,
    width: "32%",
    borderWidth: 2,
    margin: 2,
    marginBottom: 5,
  },
});
