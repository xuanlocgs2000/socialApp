import React, { useRef, useState } from "react";
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import MessageScreen from "../Screens/MessageScreen";
import NotificationScreen from "../Screens/NotificationScreen";
import { Avatar } from "../components/Avatar";

const tab = createBottomTabNavigator();
const ButtonTab = () => {
  const drawer = useRef(null);

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>Hello</Text>
      <Image source={require("../assets/dogo.png")} />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={"left"}
      renderNavigationView={navigationView}
    >
      <tab.Navigator>
        <tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "Home",
            headerLeft: () => (
              <Avatar image={require("../assets/dogo.png")} size={50} />
            ),
          }}
        />
        <tab.Screen name="Message" component={MessageScreen} />
        <tab.Screen name="Notification" component={NotificationScreen} />
      </tab.Navigator>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
});

export default ButtonTab;
