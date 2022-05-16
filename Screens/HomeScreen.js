import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../components/Avatar";
import { Posts } from "../components/Post";
import { data } from "../data/test";
function HomeScreen() {
  console.log(data[0]);

  return (
    <View>
      <Posts
        avatar={data[0].user.avatar}
        username={data[0].user.username}
        tag={data[0].user.tag}
        createAt={data[0].createAt}
        content={data[0].content}
        image={data[0].image}
        likes={data[0].likes}
        comments={data[0].comments}
      />
    </View>
  );
}

export default HomeScreen;
