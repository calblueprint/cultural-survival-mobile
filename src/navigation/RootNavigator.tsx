import { NavigationContainer } from '@react-navigation/native';
import { LanguageProvider } from '../LanguageContext';

import NavigationBar from './NavigationBar';

export default function RootNavigation() {
  return (
    <LanguageProvider>
      <NavigationContainer>
        <NavigationBar />
      </NavigationContainer>
    </LanguageProvider>
  );
}
