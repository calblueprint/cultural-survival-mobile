// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen/Home";
import AudioScreen from "../screens/AudioScreen/Audio";
import GrantsScreen from "../screens/GrantsScreen/Grants";
import SplashScreen from "../screens/SplashScreen/Splash";
import LoginScreen from "../screens/LoginScreen/Login";
import Login1Screen from "../screens/Login1Screen/Login1";
import Login2Screen from "../screens/Login2Screen/Login2";
import Signup1Screen from "../screens/Signup1Screen/Signup1";
import Signup2Screen from "../screens/Signup2Screen/Signup2";
import Signup3Screen from "../screens/Signup3Screen/Signup3";
import Signup4Screen from "../screens/Signup4Screen/Signup4";

import { RootStackParamList } from "../types/navigation";
import { AuthProvider } from "../../providers/AuthProvider";

const UserStack = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Audio" component={AudioScreen} />
          <Stack.Screen name="Grants" component={GrantsScreen} />
          <Stack.Screen name="Login1" component={Login1Screen} />
          <Stack.Screen name="Login2" component={Login2Screen} />
          <Stack.Screen name="Signup1" component={Signup1Screen} />
          <Stack.Screen name="Signup2" component={Signup2Screen} />
          <Stack.Screen name="Signup3" component={Signup3Screen} />
          <Stack.Screen name="Signup4" component={Signup4Screen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default UserStack;
