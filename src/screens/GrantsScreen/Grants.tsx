import { ScrollView, Text, SafeAreaView } from 'react-native';
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
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.titleText}>Grants Available</Text>

        {grants.map(grant => (
          <GrantCard
            key={grant.grant_id}
            grantObj={grant}
            onPress={() =>
              navigation.navigate('GrantInfo', { grantObj: grant })
            }
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default GrantsScreen;
