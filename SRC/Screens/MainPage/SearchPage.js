import {
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import TopNavBar from "../../Components/TopNavBar";
import BottomNavBar from "../../Components/BottomNavBar";
import SearchUserCard from "../../Cards/SearchUserCard";

const SearchPage = ({ navigation }) => {
  let data = [
    {
      username: "Abhi",
      name: "Abhijeet Mishra",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "navya_01",
      name: "Navya Mishra",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "ram_234",
      name: "Ram lal",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "ravi_321",
      name: "Ravi Maurya",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "Manoj",
      name: "Manoj Kumar",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "Ankesh",
      name: "Ankesh Kumar",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "Palak",
      name: "Ravi Maurya",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "Mai Khud",
      name: "Ravi Maurya",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "Bewkoof",
      name: "Ravi Maurya",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "Moti",
      name: "Ravi Maurya",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "Ullu",
      name: "Ravi Maurya",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      username: "Yass",
      name: "Ravi Maurya",
      profilepic: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
  ];
  const [keyword, setKeyword] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar />
      <BottomNavBar navigation={navigation} />
      <TopNavBar navigation={navigation} />
      <TextInput
        style={styles.searchbar}
        placeholder="Search Users"
        onChangeText={(text) => {
          setKeyword(text);
        }}
      />
      <ScrollView>
        {data
          .filter((user) => {
            if (keyword === "") {
              return null;
            } else if (
              user.username.toLowerCase().includes(keyword.toLowerCase())
            ) {
              return user;
            } else {
              return false;
            }
          })
          .map((data) => {
            return <SearchUserCard key={data.username} data={data} />;
          })}
      </ScrollView>
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingVertical: 80,
  },
  searchbar: {
    width: "90%",
    borderRadius: 20,
    paddingVertical: 7,
    backgroundColor: "white",
    color: "black",
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
    borderWidth: 2,
    alignSelf: "center",
  },
});
