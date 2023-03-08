import { createStackNavigator } from '@react-navigation/stack';
import GrantsScreen from '../screens/GrantsScreen/Grants';
 import HomeScreen from "../screens/HomeScreen/Home"
import SignIn1Screen from '../screens/SignIn1Screen/SignIn1';

 const HomeStack = createStackNavigator();

 /**
  * Stack navigator for the scanner screens.
  */
 export default function HomeStackNavigator() {
   return (
     <HomeStack.Navigator
       screenOptions={{
         headerShown: false,
       }}
     >
       <HomeStack.Screen name="Home" component={SignIn1Screen} />
     </HomeStack.Navigator>
   );
 }