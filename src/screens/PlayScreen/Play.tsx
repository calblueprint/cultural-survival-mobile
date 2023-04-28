import {
  Easing,
  Image,
  Modal,
  Pressable,
  Share,
  Text,
  View,
} from 'react-native';
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

async function onShare(url: string) {
  const result = await Share.share({
    message: `Check out this podcast from Cultural Survival!\n${url}`,
  });
  if (result.action === Share.sharedAction) {
    if (result.activityType) {
      // shared with activity type of result.activityType
    } else {
      // shared
    }
  } else if (result.action === Share.dismissedAction) {
    // dismissed
  }
}

function PlayScreen() {
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
          <View style={styles.inset}>
            <Text style={styles.modalText}>
              {audioSaved ? 'Saved to Library!' : 'Removed from Library!'}
            </Text>
            <View style={styles.rule} />
            <Pressable onPress={() => setAudioModalVisible(!audioModalVisible)}>
              <Text style={styles.modalAction}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.headerContainer}>
        <Icon type="dropdown" />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText1}>
            Playing from Collection{audio.theme.length > 1 && 's'}
          </Text>
          <Text style={styles.headerText2} numberOfLines={1}>
            {headerText(audio.theme)}
          </Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: audio.thumbnail }} />
      </View>
      <View style={styles.titleContainer}>
        <TextTicker
          style={styles.titleText}
          scrollSpeed={20}
          easing={Easing.linear}
          marqueeDelay={1000}
          bounce={false}
          numberOfLines={1}
        >
          {audio.title}
        </TextTicker>
      </View>
      <View style={styles.artistContainer}>
        <TextTicker
          style={styles.artistText}
          scrollSpeed={20}
          easing={Easing.linear}
          marqueeDelay={1000}
          bounce={false}
          numberOfLines={1}
        >
          {audio.artist}
        </TextTicker>
      </View>
      <View style={styles.audioContainer}>
        <Pressable onPress={() => rewindAudio(audio)}>
          <Icon type="audio_back" />
        </Pressable>
        <Pressable onPress={() => toggleAudio(audio, setAudio)}>
          {audio.isPlaying ? <Icon type="pause" /> : <Icon type="play" />}
        </Pressable>
        <Pressable onPress={() => fastforwardAudio(audio, setAudio)}>
          <Icon type="audio_forward" />
        </Pressable>
      </View>
      <View style={styles.footerContainer}>
        <Pressable
          onPress={async () => {
            await onShare(audio.scLink);
          }}
        >
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
  );
}

export default PlayScreen;
