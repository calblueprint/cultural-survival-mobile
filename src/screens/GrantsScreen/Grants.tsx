import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View, TextInput, Button } from 'react-native';
import GrantCard from '../../components/GrantCard';
import RectButton from '../../components/RectButton';
import ViewContainer from '../../components/ViewContainer';
import globalStyles from '../../globalStyles';
import styles from './styles';
import React, {useEffect, useState} from 'React';
import { Grant } from '../../types/schema'

import '../../i18n/i18n';
import { namespaces } from '../../i18n/i18n.constants';
import Colors from '../../styles/Colors';
import { RootStackScreenProps } from '../../types/navigation';
import { getAllGrants , getGrantById} from '../../firebase/queries/grantsQueries';

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
  const [grants, setGrants] = useState<Grant[]>([]);
  const [grantId, setGrantId] = useState<string>('');

  /* fetch all grants on page load */
  const handlePress = async () => {
    const grant = await getGrantById(grantId);
    // TODO grants-flow: remove this when handling getting grants by ID is done properly.
    // eslint-disable-next-line no-console
    console.log('Received grant: ', grant.title);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allGrants = await getAllGrants();
        setGrants(allGrants);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('(useEffect)[QueriesDemo]', error);
      }
    };
    fetchData();
  }, []);


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
        {grants.map(grant => (
          <View key={grant.grant_id}>
            <GrantCard 
            amount={grant.amount.toString()}
            title={grant.title}
            countries={grant.countries.join(", ")}
            deadline={grant.deadline.toString()} // need to look into this more & extracting date ONLY
            description={grant.description}
            />
          </View>
        ))}
      </ViewContainer>
      <TextInput placeholder="ID to be queried" onChangeText={setGrantId} />
      <Button title="Submit" onPress={() => handlePress()} />
    </ScrollView>
  );
}

export default GrantsScreen;
