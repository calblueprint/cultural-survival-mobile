// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen/Home";
import AudioScreen from "../screens/AudioScreen/Audio";
<<<<<<< HEAD
import SigninScreen from "../screens/SigninScreen/Signin";
=======
import SignInScreen from "../screens/SignInScreen/SignIn";
>>>>>>> 6874891d30a2d26245381d71d799181ae63eaff3
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
<<<<<<< HEAD
        <Stack.Screen name="Signin" component={SigninScreen} />
=======
        <Stack.Screen name="SignIn" component={SignInScreen} />
>>>>>>> 6874891d30a2d26245381d71d799181ae63eaff3
      </Stack.Navigator>
    </NavigationContainer>
  );
};

<<<<<<< HEAD
export default UserStack;
=======
export default UserStack;
>>>>>>> 6874891d30a2d26245381d71d799181ae63eaff3
