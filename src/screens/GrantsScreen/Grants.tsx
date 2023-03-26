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
import { RootStackScreenProps } from '../../types/navigation';
import { getAllGrants , getGrantById} from '../../firebase/queries/grantsQueries';


function GrantsScreen({ navigation }: RootStackScreenProps<'Grants'>) {

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
