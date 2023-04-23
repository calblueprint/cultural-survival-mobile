import { NavigationContainer } from '@react-navigation/native';
import { useState, useMemo } from 'react';
import LanguageContext from '../LanguageContext';

import NavigationBar from './NavigationBar';

export default function RootNavigation() {
  const [language, setLanguage] = useState('en');
  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage],
  );
  return (
    <LanguageContext.Provider value={value}>
      <NavigationContainer>
        <NavigationBar />
      </NavigationContainer>
    </LanguageContext.Provider>
  );
}
