import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import ViewContainer from '../../components/ViewContainer';
import RectButton from '../../components/RectButton';
import globalStyles from '../../globalStyles';

import { namespaces } from '../../i18n/i18n.constants';
import '../../i18n/i18n';
import { RootStackScreenProps } from '../../types/navigation';

let lang = 'en';
function GrantsScreen({ navigation }: RootStackScreenProps<'Grants'>) {
  const { i18n, t } = useTranslation(namespaces.pages.grants);
  function handleClick(newLang: string) {
    i18n.changeLanguage(newLang);
  }
  function toggle(lg: string) {
    lang = lg === 'en' ? 'es' : 'en';
    return lang;
  }

  return (
    <ViewContainer>
      <Text style={globalStyles.h2}>{t('grants_feed')}</Text>
      <RectButton
        text={t('buttons.ok', { ns: namespaces.pages.grants })}
        buttonStyle={{ backgroundColor: 'black' }}
        textStyle={{ color: 'black' }}
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

export default GrantsScreen;
