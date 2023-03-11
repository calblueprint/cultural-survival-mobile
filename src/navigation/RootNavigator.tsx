import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationBar from '../components/NavigationBar';
import HomeScreen from '../screens/HomeScreen/Home';
//import UserStack from './userStack';

const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={NavigationBar} />
        <Stack.Screen name="Audio" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
