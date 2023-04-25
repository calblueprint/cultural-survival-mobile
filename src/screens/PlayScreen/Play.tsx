import { Easing, Image, Modal, Pressable, Text, View } from 'react-native';
import { useContext, useState } from 'react';
import TextTicker from 'react-native-text-ticker';
import Icon from '../../../assets/icons';
import styles from './styles';
import AudioContext from '../../AudioContext';
import {
  toggleAudio,
  rewindAudio,
  fastforwardAudio,
} from '../../utils/AudioUtils';

function headerText(themeField: string[]) {
  if (themeField.length === 1) {
    return themeField[0];
  }
  if (themeField.length === 2) {
    return `${themeField[0]} & ${themeField[1]}`;
  }
  let returnText = '';
  for (let i = 0; i < themeField.length; i += 1) {
    returnText = `${returnText + themeField[i]}, `;
  }
  return returnText.slice(0, -2);
}

function PlayScreen() {
  // const [playState, setPlayState] = useState({
  //   isPlaying: false,
  //   playbackObject: null,
  //   volume: 1.0,
  //   isBuffering: false,
  //   paused: true,
  //   currentIndex: 0,
  //   durationMillis: 1,
  //   positionMillis: 0,
  //   sliderValue: 0,
  //   isSeeking: false,
  // });

  const { audio, setAudio } = useContext(AudioContext);

  const [audioModalVisible, setAudioModalVisible] = useState(false);
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const [audioSaved, setAudioSaved] = useState(false);

  function toggleAudioModal() {
    setAudioSaved(!audioSaved);
    setAudioModalVisible(!audioModalVisible);
    if (audioSaved) {
      // TODO: remove from LocalStorage
    } else {
      // TODO: add to LocalStorage
    }
  }

  function toggleShareModal() {
    setShareModalVisible(!shareModalVisible);
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent
        visible={audioModalVisible}
        onRequestClose={() => {
          setAudioModalVisible(!audioModalVisible);
        }}
      >
        <View style={styles.modal}>
          <View style={{ alignItems: 'center', marginTop: 305 }}>
            <View style={styles.inset}>
              <Text style={styles.inset_text1}>
                {audioSaved ? 'Saved to Library!' : 'Removed from Library!'}
              </Text>
              <Pressable
                onPress={() => setAudioModalVisible(!audioModalVisible)}
              >
                <Text style={styles.inset_text2}>OK</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent
        visible={shareModalVisible}
        onRequestClose={() => {
          setShareModalVisible(!shareModalVisible);
        }}
      >
        <View style={styles.modal}>
          <View style={{ alignItems: 'center', marginTop: 305 }}>
            <View style={styles.inset}>
              <Text style={styles.inset_text1}>Link Copied to Clipboard!</Text>
              <Pressable
                onPress={() => setShareModalVisible(!shareModalVisible)}
              >
                <Text style={styles.inset_text2}>OK</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          marginTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: 336,
          }}
        >
          <Icon type="dropdown" />
          <View>
            <Text style={styles.header_text1}>
              {audio.theme.length > 1
                ? 'Playing from Collections'
                : 'Playing from Collection'}
              {'\n'}
            </Text>
            <Text style={styles.header_text2}>{headerText(audio.theme)}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          marginTop: 26,
        }}
      >
        <Image
          style={{
            height: 336,
            width: 336,
            backgroundColor: '#D9D9D9',
          }}
          source={{ uri: audio.thumbnail }}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          marginTop: 29,
        }}
      >
        <TextTicker
          style={styles.title_text}
          scrollSpeed={20}
          easing={Easing.linear}
          marqueeDelay={1000}
          bounce={false}
          numberOfLines={1}
        >
          {audio.title}
        </TextTicker>
      </View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          marginTop: 8,
        }}
      >
        <TextTicker
          style={styles.author_text}
          scrollSpeed={20}
          easing={Easing.linear}
          marqueeDelay={1000}
          bounce={false}
          numberOfLines={1}
        >
          {audio.artist}
        </TextTicker>
      </View>

      <View style={{ marginLeft: 30, marginRight: 30, marginTop: 15 }}>
        <View style={styles.audio_container}>
          <Pressable
            onPress={() => rewindAudio(audio)}
            style={{
              paddingRight: 32,
            }}
          >
            <Icon type="audio_back" />
          </Pressable>
          <Pressable onPress={() => toggleAudio(audio, setAudio)}>
            {audio.isPlaying ? <Icon type="pause" /> : <Icon type="play" />}
          </Pressable>
          <Pressable
            onPress={() => fastforwardAudio(audio, setAudio)}
            style={{
              paddingLeft: 32,
            }}
          >
            <Icon type="audio_forward" />
          </Pressable>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          marginTop: 25,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: 336,
            marginBottom: 30,
          }}
        >
          <Pressable onPress={() => toggleShareModal()}>
            <Icon type="share" />
          </Pressable>
          <Pressable
            style={{ paddingLeft: 16 }}
            onPress={() => toggleAudioModal()}
          >
            {audioSaved ? <Icon type="saved" /> : <Icon type="not_saved" />}
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default PlayScreen;
