/**
 * Simple demo component that renders a list of all grants.
 */

import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Grant } from '../types/schema';
import { getAllGrants } from './queries/grantsQueries';

export default function QueriesDemo() {
  const [grants, setGrants] = useState<Grant[]>([]);

  /* fetch all vendors on page load */
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
    <View>
      <Text>{`All Vendors (${grants.length})`}</Text>
      {grants.map(grant => (
        <View key={grant.grant_id}>
          <Text>{`title: ${grant.title} | id: ${grant.grant_id}`}</Text>
          <Text>{`description: ${grant.description}`}</Text>
        </View>
      ))}
    </View>
  );
}
