/**
 * Simple demo component that renders a list of all grants.
 */

import { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Grant } from '../types/schema';
import { getAllGrants, getGrantById } from './queries/grantsQueries';

export default function QueriesDemo() {
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
        console.error('(useEffect)[GrantsScreen]', error);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>{`All Grants (${grants.length})`}</Text>
      {grants.map(grant => (
        <View key={grant.grant_id}>
          <Text>{`title: ${grant.title} | id: ${grant.grant_id}`}</Text>
          <Text>{`description: ${grant.description}`}</Text>
          
        </View>
      ))}
      <TextInput placeholder="ID to be queried" onChangeText={setGrantId} />
      <Button title="Submit" onPress={() => handlePress()} />
    </View>
  );
}
