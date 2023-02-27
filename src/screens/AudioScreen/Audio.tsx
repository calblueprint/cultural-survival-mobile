import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import ViewContainer from '../../components/ViewContainer';
import RectButton from '../../components/RectButton';
import globalStyles from '../../globalStyles';
import styles from './styles';
import { namespaces } from '../../i18n/i18n.constants';
import { RootStackScreenProps } from '../../types/navigation';
import '../../i18n/i18n';

let lang = 'en';

function AudioScreen({ navigation }: RootStackScreenProps<'Audio'>) {
  const { i18n, t } = useTranslation(namespaces.pages.audio);

  function handleClick(newLang: string) {
    i18n.changeLanguage(newLang);
  }
  function toggle(lg: string) {
    lang = lg === 'en' ? 'es' : 'en';
    return lang;
  }
  return (
    <ViewContainer>
      <Text style={globalStyles.h2}>{t('audio_feed')}</Text>
      <RectButton
        text="toggle"
        {...t('buttons.ok', { ns: namespaces.pages.audio })}
        onPress={() => handleClick(toggle(lang))}
      />
      <RectButton
        text="Back"
        buttonStyle={{ marginTop: '5%', backgroundColor: '#253C85' }}
        textStyle={{ color: '#FFF' }}
        onPress={() => navigation.navigate('Home')}
      />
    </ViewContainer>
  );
}

export default AudioScreen;
