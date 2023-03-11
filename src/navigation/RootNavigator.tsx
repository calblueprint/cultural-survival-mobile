import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationBar from '../components/NavigationBar';
import HomeScreen from '../screens/HomeScreen/Home';
import PlayScreen from '../screens/PlayScreen/Play';

const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={NavigationBar} />
        <Stack.Screen name="Audio" component={HomeScreen} />
        <Stack.Screen name="Play" component={PlayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
