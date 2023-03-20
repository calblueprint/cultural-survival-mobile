import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GrantsScreen from '../screens/GrantsScreen/Grants';
import { GrantsStackParamList } from '../types/navigation';

const GrantsStack = createNativeStackNavigator<GrantsStackParamList>();

export default function HomeStackNavigator() {
  return (
    <GrantsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <GrantsStack.Screen name="Grants" component={GrantsScreen} />
    </GrantsStack.Navigator>
  );
}
