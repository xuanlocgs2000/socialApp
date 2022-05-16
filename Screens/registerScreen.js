import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
function loginScreen(navigation) {
  const [email, setemail] = useState();
  return (
    <View style={style.container}>
      <View style={style.wrapper}>
        <TextInput placeholder="enter name" style={style.input}></TextInput>
        <TextInput placeholder="enter email" style={style.input}></TextInput>
        <TextInput placeholder="enter password" style={style.input}></TextInput>
        <Button title="Sign Up!"></Button>
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text>already have an account ?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigation.navigate("Login")}
        >
          <Text style={style.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#bbb",
    paddingHorizontal: 14,
  },
  link: {
    color: "blue",
  },
});

export default loginScreen;
