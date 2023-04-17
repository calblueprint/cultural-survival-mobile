import { View, Button } from 'react-native';
import { useContext } from 'react';

import { RootStackScreenProps } from '../../types/navigation';
import styles from './styles';

import { LanguageContext } from '../../LanguageContext';

function SettingsScreen({ navigation }: RootStackScreenProps<'Home'>) {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <View style={styles.view}>
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
