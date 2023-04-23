import { View, Button } from 'react-native';
import { useContext } from 'react';

import { HomeStackScreenProps } from '../../types/navigation';

import LanguageContext from '../../LanguageContext';

function SettingsScreen({ navigation }: HomeStackScreenProps<'Settings'>) {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <View>
      <Button onPress={() => setLanguage('en')} title="English" color="#000" />
      <Button onPress={() => setLanguage('es')} title="Español" color="#000" />
      <Button
        onPress={() => setLanguage('pt')}
        title="Português"
        color="#000"
      />
    </View>
  );
}

export default SettingsScreen;
