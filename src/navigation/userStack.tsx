// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen/Home";
import AudioScreen from "../screens/AudioScreen/Audio";
import GrantsScreen from "../screens/GrantsScreen/Grants";
import SplashScreen from "../screens/SplashScreen/Splash";
import LoginScreen from "../screens/LoginScreen/Login";
import SignIn1Screen from "../screens/SignIn1Screen/SignIn1";
import SignIn2Screen from "../screens/SignIn2Screen/SignIn2";
import SignUp1Screen from "../screens/SignUp1Screen/SignUp1";
import SignUp2Screen from "../screens/SignUp2Screen/SignUp2";
import SignUp3Screen from "../screens/SignUp3Screen/SignUp3";
import SignUp4Screen from "../screens/SignUp4Screen/SignUp4";

import { RootStackParamList } from "../types/navigation";
import { AuthProvider } from "../../providers/AuthProvider";

const UserStack = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Audio" component={AudioScreen} />
          <Stack.Screen name="Grants" component={GrantsScreen} />
          <Stack.Screen name="SignIn1" component={SignIn1Screen} />
          <Stack.Screen name="SignIn2" component={SignIn2Screen} />
          <Stack.Screen name="SignUp1" component={SignUp1Screen} />
          <Stack.Screen name="SignUp2" component={SignUp2Screen} />
          <Stack.Screen name="SignUp3" component={SignUp3Screen} />
          <Stack.Screen name="SignUp4" component={SignUp4Screen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default UserStack;
