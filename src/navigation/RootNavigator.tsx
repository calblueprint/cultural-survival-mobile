import { NavigationContainer } from '@react-navigation/native';

import NavigationBar from './NavigationBar';

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <NavigationBar />
    </NavigationContainer>
  );
}
