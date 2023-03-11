import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QueriesDemo from '../firebase/QueriesDemo';

import AudioScreen from '../screens/AudioScreen/Audio';
import GrantsScreen from '../screens/GrantsScreen/Grants';
import HomeScreen from '../screens/HomeScreen/Home';
import PlayScreen from '../screens/PlayScreen/Play';
import WelcomeScreen from '../screens/WelcomeScreen/Welcome';

import { RootStackParamList } from '../types/navigation';
import NavigationBar from '../components/NavigationBar';

function UserStack() {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
        <Stack.Screen name="Home" component={NavigationBar} />
        {/* <Stack.Screen name="Audio" component={AudioScreen} />
        <Stack.Screen name="Grants" component={GrantsScreen} />
        <Stack.Screen name="Play" component={PlayScreen} /> */}
      </Stack.Navigator>
      {/* <NavigationBar /> */}
    </NavigationContainer>
  );
}

export default UserStack;
