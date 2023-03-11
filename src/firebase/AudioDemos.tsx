/**
 * Simple demo component that renders a list of all grants.
 */

import { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Audio } from '../types/schema';
import { getAllAudio, getAudioID } from './queries/grantsAudio';

export default function QueriesDemo() {
  const [audio, setAudio] = useState<Audio[]>([]);
  const [audio_id, setAudioId] = useState<string>('');
  /* fetch all grants on page load */
  const handlePress = async () => {
    const grant = await getAudioID(audio_id);
    // TODO grants-flow: remove this when handling getting grants by ID is done properly.
    // eslint-disable-next-line no-console
    console.log('Received grant: ', audio.title);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allAudio = await getAllAudio();
        setAudio(allAudio);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('(useEffect)[AudioDemos]', error);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>{`All Audio (${audio.length})`}</Text>
      {audio.map(audio => (
        <View key={audio.audio_id}>
          <Text>{`title: ${audio.title} | id: ${audio.audio_id}`}</Text>
          <Text>{`description: ${audio.description}`}</Text>
        </View>
      ))}
      <TextInput placeholder="ID to be queried" onChangeText={setAudioId} />
      <Button title="Submit" onPress={() => handlePress()} />
    </View>
  );
}
