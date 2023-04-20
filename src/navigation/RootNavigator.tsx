import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayScreen from '../screens/PlayScreen/Play';
import NavigationBar from './NavigationBar';
import { RootStackParamList } from '../types/navigation';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator  screenOptions={{
        headerShown: false,
      }}>
        <RootStack.Screen name = "NavigationBar" component = {NavigationBar} />
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name = "Play" component = {PlayScreen}/>
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
