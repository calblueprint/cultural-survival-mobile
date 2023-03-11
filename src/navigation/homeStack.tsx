import { createStackNavigator } from '@react-navigation/stack';
import GrantsScreen from '../screens/GrantsScreen/Grants';
import HomeScreen from '../screens/HomeScreen/Home';

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
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
