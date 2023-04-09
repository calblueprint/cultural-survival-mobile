/**
 * Simple demo component that renders a list of all grants.
 */

import { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { getInfoAsync } from 'expo-file-system';
import { Audio } from '../types/schema';
import { getAllAudio, getAudioID } from './queries/audioQueries';
import { downLoadAudio, deleteAudio } from './queries/audioPlayback';

export default function QueriesDemo() {
  const [audio, setAudio] = useState<Audio[]>([]);
  // eslint-disable-next-line camelcase
  const [audio_id, setAudioId] = useState<string>('');
  /* fetch all audio on page load */
  const handlePress = async () => {
    const audios = await downLoadAudio(audio_id);
    const didItDownload = await getInfoAsync(audios);
    console.log(didItDownload);

    deleteAudio(audios);
    const didItDelete = await getInfoAsync(audios);
    console.log(didItDelete);
    
    
  };

  // useEffect(() => {
  //   const fetchData2 = async () => {
  //     try {
  //       console.log('hello');
  //       const allAudio1 = await downLoadAudio('1420969939');
  //       console.log(allAudio1);
  //     } catch (error) {
  //       // eslint-disable-next-line no-console
  //       console.error('(useEffect)[AudioDemos]', error);
  //     }
  //   };
  //   fetchData2();
  // }, []);

  return (
    <View>
      <Text>{`All Audio (${audio.length})`}</Text>
      {audio.map(audios => (
        <View key={audios.audio_id}>
          <Text>{`title: ${audios.title} | id: ${audios.audio_id}`}</Text>
          <Text>{`description: ${audios.description}`}</Text>
          <Text>{`link: ${audios.gcsLink}`}</Text>
        </View>
      ))}
      <TextInput placeholder="ID to be queried" onChangeText={setAudioId} />
      <Button title="Download" onPress={() => handlePress()} />
    </View>
  );
}
