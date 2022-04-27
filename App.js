import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import loginScreen from "./Screens/loginScreen";
import registerScreen from "./Screens/registerScreen";
const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Login"
          component={loginScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Register"
          component={registerScreen}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
