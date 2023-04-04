import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GrantsScreen from '../screens/GrantsScreen/Grants';
import { GrantsStackParamList } from '../types/navigation';
import GrantInfoScreen from '../screens/GrantInfoScreen/GrantInfo';

const GrantsStack = createNativeStackNavigator<GrantsStackParamList>();

export default function HomeStackNavigator() {
  return (
    <GrantsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <GrantsStack.Screen name="Grants" component={GrantsScreen} />
      <GrantsStack.Screen name="GrantInfo" component={GrantInfoScreen} />
    </GrantsStack.Navigator>
  );
}
