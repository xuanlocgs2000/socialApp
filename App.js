import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import loginScreen from "./Screens/loginScreen";
import registerScreen from "./Screens/registerScreen";
import ButtonTab from "./navigations/ButtonTab";

export default function App() {
  return (
    <NavigationContainer>
      <ButtonTab />
    </NavigationContainer>
  );
}
