/**
 * Simple demo component that renders a list of all grants.
 */

import { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Audio } from '../types/schema';
import { getAllAudio, getAudioID } from './queries/audioQueries';
import { downLoadAudio } from './queries/audioPlayback';

export default function QueriesDemo() {
  const [audio, setAudio] = useState<Audio[]>([]);
  // eslint-disable-next-line camelcase
  const [audio_id, setAudioId] = useState<string>('');
  /* fetch all audio on page load */
  const handlePress = async () => {
    const audios = await getAudioID(audio_id);
    // TODO grants-flow: remove this when handling getting grants by ID is done properly.
    // eslint-disable-next-line no-console
    console.log('Received audio: ', audios.title);
    
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const allAudio = await getAllAudio();
  //       setAudio(allAudio);
  //     } catch (error) {
  //       // eslint-disable-next-line no-console
  //       console.error('(useEffect)[AudioDemos]', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        console.log("hello");
        const allAudio1 = await downLoadAudio("1420969939");
        console.log(allAudio1);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('(useEffect)[AudioDemos]', error);
      } 
    };
    fetchData2();
  }, []);

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
      <Button title="Submit" onPress={() => handlePress()} />
    </View>
  );
}
