import react from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import { Avatar } from "./Avatar";
import { Entypo } from "@expo/vector-icons";
export const Posts = ({
  username,
  tag,
  createAt,
  content,
  image,
  avatar,
  comments,
  likes,
}) => (
  <View style={styles.container}>
    <Avatar image={avatar} size={70} />
    <View style={styles.rightWrap}>
      <View style={styles.contentWrap1}>
        <View style={styles.usernameWrap}>
          <Text style={styles.name}>{username}</Text>
          <Text style={styles.tag}>{tag}</Text>
          <Text style={styles.createAt}>{createAt}</Text>
        </View>
        <Entypo
          name={"chevron-down"}
          size={16}
          color={"grey"}
          style={styles.icon}
        />
      </View>
      <View style={styles.contentWrap2}>
        <View style={styles.contentWrap}>
          <Text>{content}</Text>
          {/* {image ? (
          <Image source={image} style={{ height: 200, width: 150 }} />
        ) : null} */}
        </View>
        <Text>{likes}</Text>
        <Text>{comments}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    flexDirection: "row",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  rightWrap: {
    margin: 5,
  },
  name: {
    marginRight: 5,
    fontWeight: "bold",
  },
  tag: {
    color: "grey",
    marginRight: 5,
  },
  createAt: {
    marginRight: 5,
  },
  icon: {
    alignSelf: "flex-end",
  },
  contentWrap: {
    marginRight: 5,
  },
  usernameWrap: {
    flexDirection: "row",
  },
  contentWrap1: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "79%",
  },
  contentWrap2: {
    width: "79%",
  },
  contentWrap3: {},
});
