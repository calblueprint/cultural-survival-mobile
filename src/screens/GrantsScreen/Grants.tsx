import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import GrantCard from '../../components/GrantCard';
import ViewContainer from '../../components/ViewContainer';
import globalStyles from '../../globalStyles';
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
    <SafeAreaView style={globalStyles.container}>
      <ScrollView style={styles.container}>
        <ViewContainer>
          <Text style={globalStyles.h2}>Grants Available</Text>
        </ViewContainer>

        {grants.map(grant => (
          <View key={grant.grant_id}>
            <GrantCard
              grantObj={grant}
              onPress={() =>
                navigation.navigate('GrantInfo', { grantObj: grant })
              }
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default GrantsScreen;
