// Navigation.js
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import BibleScreen from "./components/BibleSelector";
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="bible" component={BibleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
