import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen/Home';
import SettingsScreen from '../screens/SettingsScreen/Settings';
import { HomeStackParamList } from '../types/navigation';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Settings" component={SettingsScreen} />
    </HomeStack.Navigator>
  );
}
