import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import GrantCard from '../../components/GrantCard';
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
        <GrantCard
          amount="$4059"
          title="Indigenous Community Media Youth Fellowship"
          countries="Bolivia, Ecuador, and Guatemala"
          deadline="10/22/2023"
          description="Brief: Providing opportunities for international Indigenous radio stations to strengthen their broadcast infrastructure and systems. The Indigenous Community /Media Fund also provides training opportunities in journalism, broadcasting."
        />
        <GrantCard
          amount="$3000"
          title="Keepers of the Earth Fund"
          countries="Bolivia, Ecuador, and Peru"
          deadline="1/18/2023"
          description="Brief: KOEF provides small grants ranging between $500 and $5,000 USD to grassroots Indigenous-led organizations, collectives, and traditional governments in their self-determined development projects based on their Indigenous values."
        />
        <GrantCard
          amount="$3050"
          title="Indigenous Community Media Fund"
          countries="Mexico, Nicaragua, Panama, and Guatemala"
          deadline="08/13/2024"
          description="Brief: Providing opportunities for international Indigenous radio stations to strengthen their broadcast infrastructure and systems. The Indigenous Community /Media Fund also provides training opportunities in journalism, broadcasting."
        />
        <GrantCard
          amount="$2500"
          title="Keepers of the Earth Fund"
          countries="Puerto Rico, Haiti, and Guatemala"
          deadline="07/26/2023"
          description="Brief: KOEF provides small grants ranging between $500 and $5,000 USD to grassroots Indigenous-led organizations, collectives, and traditional governments in their self-determined development projects based on their Indigenous values."
        />
        <GrantCard
          amount="$2000"
          title="Indigenous Community Media Youth Fellowship"
          countries="Nicaragua, Ecuador, and Guatemala"
          deadline="05/09/2023"
          description="Brief: Providing opportunities for international Indigenous radio stations to strengthen their broadcast infrastructure and systems. The Indigenous Community /Media Fund also provides training opportunities in journalism, broadcasting."
        />
      </ViewContainer>
    </ScrollView>
  );
}

export default GrantsScreen;
