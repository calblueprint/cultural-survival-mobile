import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import { GrantCard } from '../../components/GrantCard';
import RectButton from '../../components/RectButton';
import ViewContainer from '../../components/ViewContainer';
import globalStyles from '../../globalStyles';
import styles from './styles';

import '../../i18n/i18n';
import { namespaces } from '../../i18n/i18n.constants';
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
    <ScrollView style={styles.container}>
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

      <View style={styles.grantsText}>
        <Text style={globalStyles.h1}>Grants Available</Text>
      </View>

      <ViewContainer>
        <GrantCard />
        <GrantCard />
        <GrantCard />
        <GrantCard />
        <GrantCard />
        <GrantCard />
        <GrantCard />
        <GrantCard />

        {/* <RectButton
          text="Back"
          buttonStyle={{ marginTop: "5%", backgroundColor: "#253C85" }}
          textStyle={{ color: "#FFF" }}
          onPress={() => navigation.navigate("Home")}
        /> */}
      </ViewContainer>
    </ScrollView>
  );
}

export default GrantsScreen;
