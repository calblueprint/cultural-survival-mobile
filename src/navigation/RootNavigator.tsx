import { NavigationContainer } from '@react-navigation/native';

import NavigationBar from './NavigationBar';

import { AudioProvider } from '../AudioContext';

export default function RootNavigation() {
  return (
    <AudioProvider>
      <NavigationContainer>
        <NavigationBar />
      </NavigationContainer>
    </AudioProvider>
  );
}
