// import { Image, Text, View } from 'react-native';
import { useState } from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';
import { getInfoAsync } from 'expo-file-system';
import Icon from '../../../assets/icons';
import Colors from '../../styles/Colors';
import styles from './styles';
import { getAudioID } from '../../firebase/queries/audioQueries';

import {
  downLoadAudio,
  deleteAudio,
} from '../../firebase/queries/audioPlayback';


// export const getImage = async (audioID: string): Promise<string> => {
//   const thumNail = (await getAudioID(audioID)).thumbnail;
  

// }

function PlayScreen() {
  const [audioId, setAudioId] = useState<string>('');
  
  /* fetch all audio on page load */
  const handlePress = async () => {
    const audios = await downLoadAudio(audioId);
    const didItDownload = await getInfoAsync(audios);
    // eslint-disable-next-line no-console
    console.log(didItDownload);

    deleteAudio(audios);
    const didItDelete = await getInfoAsync(audios);
    // eslint-disable-next-line no-console
    console.log(didItDelete);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '80%',
          paddingTop: '5%',
          paddingLeft: '5%',
          alignItems: 'center',
        }}
      >
        <Icon type="dropdown" />
        <Text style={styles.header_text}>
          Green Colonization: An Interview with Maja Kristine Jama
        </Text>
      </View>
      <View style={styles.container2}>
        {/* <Image
          {styles={
            height: 275,
            width: 275,
            backgroundColor: Colors.surfaceGrey,
            borderRadius: 9.5,
            marginTop: '3%',
            marginBottom: '3%',
          }}
          
        /> */}
        <Image
          source = {{}}
          style={{ height: 275,
            width: 275,
            backgroundColor: Colors.surfaceGrey,
            borderRadius: 9.5,
            marginTop: '3%',
            marginBottom: '3%', }}
        />
      </View>
      <Text style={styles.title_text}>
        Green Colonization: An Interview with Maja Kristine Jama
      </Text>
      <Text style={styles.author_text}>Shaldon Ferris</Text>

      <View style={{ paddingLeft: '5%' }}>
        <Icon type="play_bar" />
      </View>
      <View style={styles.audio_container}>
        <Icon type="audio_back" />
        <Icon type="play_button" />
        <Icon type="audio_forward" />
      </View>
      <View
        style={{
          paddingBottom: '7%',
          paddingLeft: '7%',
        }}
      >
        <TextInput placeholder="ID to be queried" onChangeText={setAudioId} />
        <Button title="Download" onPress={() => handlePress()} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          width: '95%',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '20%',
            paddingBottom: '7%',
          }}
        >
          <Icon type="bookmark" />
          <Icon type="options" />
        </View>
      </View>
    </View>
  );
}

export default PlayScreen;
