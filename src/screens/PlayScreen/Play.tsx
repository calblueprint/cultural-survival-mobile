import {
  Image,
  Modal,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Audio } from 'expo-av';
import React, { useState } from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import Icon from '../../../assets/icons';
import Colors from '../../styles/Colors';
import styles from './styles';

function play() {
  return (
    <Svg width="68" height="68" viewBox="0 0 68 68" fill="none">
      <Circle cx="34" cy="34" r="34" fill="#CC502F" />
      <Path
        d="M48.1535 32.3566C49.4186 33.087 49.4186 34.913 48.1535 35.6434L28.3465 47.079C27.0814 47.8094 25.5 46.8964 25.5 45.4356V22.5644C25.5 21.1036 27.0814 20.1906 28.3465 20.921L48.1535 32.3566Z"
        fill="white"
      />
    </Svg>
  );
}

function pause() {
  return (
    <Svg width="68" height="68" viewBox="0 0 68 68" fill="none">
      <Circle cx="34" cy="34" r="34" fill="#CC502F" />
      <Path
        d="M39 21C39 20.4477 39.4477 20 40 20H45.5C46.0523 20 46.5 20.4477 46.5 21V47C46.5 47.5523 46.0523 48 45.5 48H40C39.4477 48 39 47.5523 39 47V21Z"
        fill="white"
      />
      <Path
        d="M22 21C22 20.4477 22.4477 20 23 20H28.5C29.0523 20 29.5 20.4477 29.5 21V47C29.5 47.5523 29.0523 48 28.5 48H23C22.4477 48 22 47.5523 22 47V21Z"
        fill="white"
      />
    </Svg>
  );
}

function saved() {
  return (
    <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.58465 2.23193H18.418C20.2507 2.27337 21.7043 3.78996 21.668 5.62277V21.5261C21.6725 22.4099 21.16 23.2148 20.3572 23.5844C20.0836 23.7034 19.7888 23.766 19.4905 23.7686C18.9635 23.7654 18.457 23.5643 18.0713 23.2053L13.0013 18.5903L7.93132 23.2053C7.30662 23.7627 6.41669 23.9103 5.64548 23.5844C4.84268 23.2148 4.33011 22.4099 4.33465 21.5261V5.62277C4.29835 3.78996 5.75195 2.27337 7.58465 2.23193ZM14.4426 16.9867L19.5017 21.6017V5.62257C19.5328 4.98809 19.052 4.4447 18.4184 4.39841H7.58507C6.9515 4.4447 6.47063 4.98809 6.50173 5.62257V21.5259L11.5176 16.9867C12.3455 16.2293 13.6147 16.2293 14.4426 16.9867Z"
        fill="#CC502F"
      />
      <Path
        d="M6 5C6 4.44772 6.44772 4 7 4H19C19.5523 4 20 4.44772 20 5V17C20 17.5523 19.5523 18 19 18H7C6.44772 18 6 17.5523 6 17V5Z"
        fill="#CC502F"
      />
      <Path
        d="M12.698 11.6889C13.0983 11.3084 13.7313 11.3245 14.1118 11.7248L15.4896 13.1745C15.8701 13.5748 15.8541 14.2077 15.4538 14.5882L7.48067 22.1665C7.08035 22.547 6.44739 22.5309 6.06691 22.1306L4.68904 20.6809C4.30856 20.2806 4.32463 19.6477 4.72494 19.2672L12.698 11.6889Z"
        fill="#CC502F"
      />
      <Path
        d="M21.1211 18.7081C21.4963 19.1004 21.49 19.7203 21.107 20.1049L20.0346 21.1818C19.9674 21.2493 19.9102 21.3261 19.8647 21.4097L19.6308 21.8399C19.3142 22.4222 18.529 22.5409 18.0544 22.0783L10.0342 14.2619C9.63871 13.8765 9.63057 13.2434 10.016 12.8478L12.0688 10.7416C12.4639 10.3362 13.1163 10.3393 13.5076 10.7483L21.1211 18.7081Z"
        fill="#CC502F"
      />
    </Svg>
  );
}

function notSaved() {
  return (
    <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.58465 2.23193H18.418C20.2507 2.27337 21.7043 3.78996 21.668 5.62277V21.5261C21.6725 22.4099 21.16 23.2148 20.3572 23.5844C20.0836 23.7034 19.7888 23.766 19.4905 23.7686C18.9635 23.7654 18.457 23.5643 18.0713 23.2053L13.0013 18.5903L7.93132 23.2053C7.30662 23.7627 6.41669 23.9103 5.64548 23.5844C4.84268 23.2148 4.33011 22.4099 4.33465 21.5261V5.62277C4.29835 3.78996 5.75195 2.27337 7.58465 2.23193ZM14.4426 16.9867L19.5017 21.6017V5.62257C19.5328 4.98809 19.052 4.4447 18.4184 4.39841H7.58507C6.9515 4.4447 6.47063 4.98809 6.50173 5.62257V21.5259L11.5176 16.9867C12.3455 16.2293 13.6147 16.2293 14.4426 16.9867Z"
        fill="#CC502F"
      />
    </Svg>
  );
}

const hardcodedResponse = {
  url: 'https://storage.googleapis.com/download/storage/v1/b/cultural-survival-mobile.appspot.com/o/JenniferTauliCorpuzTalksAboutTheImportantFactorsForIndigenousPeoplesAtCOP15.mp3?generation=1678596991287901&alt=media',
  thumbnail:
    'https://i1.sndcdn.com/artworks-jeSDFXAMxLeFlfXx-a4zovA-t500x500.jpg',
  artist: 'Jennifer Tauli',
  title:
    'Corpuz Talks about the Important Factors for Indigenous Peoples at COP15',
};

function PlayScreen() {
  const [playState, setPlayState] = useState({
    isPlaying: false,
    playbackObject: null,
    volume: 1.0,
    isBuffering: false,
    paused: true,
    currentIndex: 0,
    durationMillis: 1,
    positionMillis: 0,
    sliderValue: 0,
    isSeeking: false,
  });

  async function toggleAudio(
    sound: React.MutableRefObject<Audio.Sound>,
    url: string,
  ) {
    const result = await sound.current.getStatusAsync();
    if (result.isLoaded) {
      if (result.isPlaying === false) {
        setPlayState(currState => ({
          ...currState,
          isPlaying: true,
        }));
        await sound.current.playAsync();
      } else {
        setPlayState(currState => ({
          ...currState,
          isPlaying: false,
        }));
        await sound.current.pauseAsync();
      }
    } else {
      const loaded = await sound.current.loadAsync({
        uri: url,
      });
      if (loaded.isLoaded) {
        setPlayState(currState => ({
          ...currState,
          isPlaying: true,
        }));
        await sound.current.playAsync();
      }
    }
  }

  async function restartAudio(sound: React.MutableRefObject<Audio.Sound>) {
    await sound.current.setPositionAsync(0);
  }

  async function rewindAudio(sound: React.MutableRefObject<Audio.Sound>) {
    const result = await sound.current.getStatusAsync();
    if (result.isLoaded) {
      await sound.current.setPositionAsync(result.positionMillis - 30000);
    }
  }

  async function fastforwardAudio(sound: React.MutableRefObject<Audio.Sound>) {
    const result = await sound.current.getStatusAsync();
    if (result.isLoaded) {
      await sound.current.setPositionAsync(result.positionMillis + 30000);
      if (result.positionMillis >= result.durationMillis!) {
        setPlayState(currState => ({
          ...currState,
          isPlaying: false,
        }));
        // TODO: go to next audio if fastforwarding past the end
      }
    }
  }

  const sound = React.useRef(new Audio.Sound());
  const [modalVisible, setModalVisible] = useState(false);
  const [audioSaved, setAudioSaved] = useState(false);

  function toggleModal() {
    setAudioSaved(!audioSaved);
    setModalVisible(!modalVisible);
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
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
          <View style={{ alignItems: 'center', marginTop: 305 }}>
            <View style={styles.inset}>
              <Text style={styles.inset_text1}>
                {audioSaved ? 'Saved to Library!' : 'Removed from Library!'}
              </Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
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
          <Text style={styles.header_text}>{hardcodedResponse.title}</Text>
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
          source={{ uri: hardcodedResponse.thumbnail }}
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
        <Text style={styles.title_text}>{hardcodedResponse.title}</Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          marginTop: 8,
        }}
      >
        <Text style={styles.author_text}>{hardcodedResponse.artist}</Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          marginTop: 25,
        }}
      >
        <Icon type="play_bar" />
      </View>

      <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20 }}>
        <View style={styles.audio_container}>
          <TouchableWithoutFeedback onPress={() => restartAudio(sound)}>
            <View style={{ width: 34, height: 34 }}>
              <Svg width="36" height="34" viewBox="0 0 36 34" fill="none">
                <Path
                  d="M5 18.732C3.66666 17.9622 3.66667 16.0378 5 15.268L24.5 4.00962C25.8333 3.23982 27.5 4.20207 27.5 5.74167L27.5 28.2583C27.5 29.7979 25.8333 30.7602 24.5 29.9904L5 18.732Z"
                  fill="#CC502F"
                />
                <Rect y="3" width="5" height="28" rx="1" fill="#CC502F" />
              </Svg>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => rewindAudio(sound)}>
            <View style={{ width: 57, height: 34, alignItems: 'center' }}>
              <Svg width="57" height="34" viewBox="0 0 57 34" fill="none">
                <Path
                  d="M3 18.732C1.66666 17.9622 1.66667 16.0377 3 15.2679L22.5 4.00962C23.8333 3.23982 25.5 4.20207 25.5 5.74167L25.5 28.2583C25.5 29.7979 23.8333 30.7602 22.5 29.9904L3 18.732Z"
                  fill="#CC502F"
                />
                <Path
                  d="M26 18.732C24.6667 17.9622 24.6667 16.0377 26 15.2679L45.5 4.00962C46.8333 3.23982 48.5 4.20207 48.5 5.74167V28.2583C48.5 29.7979 46.8333 30.7602 45.5 29.9904L26 18.732Z"
                  fill="#CC502F"
                />
              </Svg>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => toggleAudio(sound, hardcodedResponse.url)}
          >
            <View style={{ width: 68, height: 68 }}>
              {playState.isPlaying ? pause() : play()}
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => fastforwardAudio(sound)}>
            <View style={{ width: 57, height: 34, alignItems: 'center' }}>
              <Svg width="57" height="34" viewBox="0 0 57 34" fill="none">
                <Path
                  d="M31 15.268C32.3333 16.0378 32.3333 17.9623 31 18.7321L11.5 29.9904C10.1667 30.7602 8.5 29.7979 8.5 28.2583V5.74167C8.5 4.20207 10.1667 3.23982 11.5 4.00962L31 15.268Z"
                  fill="#CC502F"
                />
                <Path
                  d="M54 15.268C55.3333 16.0378 55.3333 17.9623 54 18.7321L34.5 29.9904C33.1667 30.7602 31.5 29.7979 31.5 28.2583V5.74167C31.5 4.20207 33.1667 3.23982 34.5 4.00962L54 15.268Z"
                  fill="#CC502F"
                />
              </Svg>
            </View>
          </TouchableWithoutFeedback>

          <Icon type="audio_forward" />
        </View>
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
            marginTop: 10,
            marginBottom: 30,
          }}
        >
          <TouchableWithoutFeedback onPress={() => toggleModal()}>
            <View style={{ width: 26, height: 26 }}>
              {audioSaved ? saved() : notSaved()}
            </View>
          </TouchableWithoutFeedback>
          <Icon type="options" />
        </View>
      </View>
    </View>
  );
}

export default PlayScreen;
