import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View, TextInput, Button } from 'react-native';
import React, {useEffect, useState} from 'react';
import GrantCard from '../../components/GrantCard';
import RectButton from '../../components/RectButton';
import ViewContainer from '../../components/ViewContainer';
import globalStyles from '../../globalStyles';
import styles from './styles';
import { Grant } from '../../types/schema'

import '../../i18n/i18n';
import { namespaces } from '../../i18n/i18n.constants';
import Colors from '../../styles/Colors';
import { RootStackScreenProps } from '../../types/navigation';
import { getAllGrants , getGrantById} from '../../firebase/queries/grantsQueries';


const defaultGrant: Grant = {
  grant_id: "",
  amount: 0,
  countries: [],
  deadline: new Date(),
  description: "",
  duration: "",
  image_link: "",
  share_link: "",
  title: "",

}

// let lang = 'en';
function GrantsScreen({ navigation }: RootStackScreenProps<'Grants'>) {
  // const { i18n, t } = useTranslation(namespaces.pages.grants);
  // function handleClick(newLang: string) {
  //   i18n.changeLanguage(newLang);
  // }
  // function toggle(lg: string) {
  //   lang = lg === 'en' ? 'es' : 'en';
  //   return lang;
  // }
  const [grants, setGrants] = useState<Grant[]>([]);
  const [grantId, setGrantId] = useState<string>('');
  // const [grantObj, setGrantObj] = useState<Grant>(defaultGrant);

  // const getGrantObj = async (grantID : string) => {
  //   const grant = await getGrantById(grantID);
  //   setGrantObj(grant);

  // }


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
        console.error('(useEffect)[Grants]', error);
      }
    };
    fetchData();
  }, []);


  return (
    <ScrollView style={styles.container}>
      <ViewContainer>
          <Text style={globalStyles.h2}>Grants Available</Text>
      </ViewContainer>

      {grants.map(grant => (
          <View key={grant.grant_id}>
            <GrantCard 
            grantObj={grant}
            onPress={() => navigation.navigate('GrantInfo', {grantObj : grant})}
            />
          </View>
        ))}

    </ScrollView>
  );
}

export default GrantsScreen;
