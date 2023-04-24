import { Image, Text, View, Pressable } from 'react-native';
import { Audio } from "expo-av";
import React from 'react';
import Icon from '../../../assets/icons';
import Colors from '../../styles/Colors';
import { RootStackScreenProps} from '../../types/navigation';
import styles from './styles';

// TODO: Use toggleAudio when it is necessary, may be fixed in later PRs.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function toggleAudio(
  sound: React.MutableRefObject<Audio.Sound>,
  url: string,
) {
  try {
    const result = await sound.current.getStatusAsync();
    if (result.isLoaded) {
      if (result.isPlaying === false) {
        sound.current.playAsync();
      } else {
        sound.current.pauseAsync();
      }
    } else {
      await sound.current.loadAsync({
        uri: url,
      });
      sound.current.playAsync();
    }
  } catch (error) {
    /* empty */
  }
}

function PlayScreen({ navigation }: RootStackScreenProps<'Play'>) {
  // TODO: Use sound when it is necessary, may be fixed in later PRs.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sound = React.useRef(new Audio.Sound());

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
        <Pressable onPress={() => navigation.goBack()}>
          <Icon type="dropdown" />
        </Pressable>
        <Text style={styles.header_text}>
          Green Colonization: An Interview with Maja Kristine Jama
        </Text>
      </View>
      <View style={styles.container2}>
        <Image
          style={{
            height: 275,
            width: 275,
            backgroundColor: Colors.surfaceGrey,
            borderRadius: 9.5,
            marginTop: '3%',
            marginBottom: '3%',
          }}
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
