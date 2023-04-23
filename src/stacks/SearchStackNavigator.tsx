import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AudioScreen from '../screens/AudioScreen/Audio';
import PlayScreen from '../screens/PlayScreen/Play';
import AudioInfoScreen from '../screens/AudioInfoScreen/AudioInfo';
import { SearchStackParamList } from '../types/navigation';

const SearchStack = createNativeStackNavigator<SearchStackParamList>();

export default function SearchStackNavigator() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SearchStack.Screen name="Audio" component={AudioScreen} />
      <SearchStack.Screen name="Play" component={PlayScreen} />
      <SearchStack.Screen name="AudioInfo" component={AudioInfoScreen} />
    </SearchStack.Navigator>
  );
}
