// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {View, Text} from "react-native"

import HomeScreen from "../screens/HomeScreen/Home";
import AudioScreen from "../screens/AudioScreen/Audio";
import SignInScreen from "../screens/SignInScreen/SignIn";
import GrantsScreen from "../screens/GrantsScreen/Grants";
import { RootStackParamList } from "../types/navigation";

const UserStack = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Audio" component={AudioScreen} />
        <Stack.Screen name="Grants" component={GrantsScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>    
  );
};

export default UserStack;
