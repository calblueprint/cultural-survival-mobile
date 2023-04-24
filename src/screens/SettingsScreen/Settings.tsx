import { View, Button, Text } from 'react-native';
import { useContext } from 'react';

import { HomeStackScreenProps } from '../../types/navigation';

import LanguageContext from '../../LanguageContext';
import globalStyles from '../../globalStyles';
import styles from './styles';

function SettingsScreen({ navigation }: HomeStackScreenProps<'Settings'>) {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <View>
      <Text style={[globalStyles.h4, styles.subheading]}>
        language: {language}
      </Text>
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
