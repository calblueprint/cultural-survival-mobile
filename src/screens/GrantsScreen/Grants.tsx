import { ScrollView, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import GrantCard from '../../components/GrantCard';
import styles from './styles';
import { Grant } from '../../types/schema';

import '../../i18n/i18n';
import { GrantsStackScreensProps } from '../../types/navigation';
import { getAllGrants } from '../../firebase/queries/grantsQueries';

function GrantsScreen({ navigation }: GrantsStackScreensProps<'Grants'>) {
  const [grants, setGrants] = useState<Grant[]>([]);

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
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Grants Available</Text>
      </View>

      {grants.map(grant => (
        <View key={grant.grant_id} style={styles.grantCardContainer}>
          <GrantCard
            grantObj={grant}
            onPress={() =>
              navigation.navigate('GrantInfo', { grantObj: grant })
            }
          />
        </View>
      ))}
    </ScrollView>
  );
}

export default GrantsScreen;
