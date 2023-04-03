import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QueriesDemo from '../firebase/QueriesDemo';

import AudioScreen from '../screens/AudioScreen/Audio';
import GrantsScreen from '../screens/GrantsScreen/Grants';
import HomeScreen from '../screens/HomeScreen/Home';
import PlayScreen from '../screens/PlayScreen/Play';
import WelcomeScreen from '../screens/WelcomeScreen/Welcome';
import GrantInfoScreen from '../screens/GrantInfoScreen/GrantInfo';

import { RootStackParamList } from '../types/navigation';

function UserStack() {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Audio" component={AudioScreen} />
        <Stack.Screen name="Grants" component={GrantsScreen} />
        <Stack.Screen name="GrantInfo" component={GrantInfoScreen} />
        <Stack.Screen name="Play" component={PlayScreen} />
        <Stack.Screen name="QueriesDemo" component={QueriesDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default UserStack;
