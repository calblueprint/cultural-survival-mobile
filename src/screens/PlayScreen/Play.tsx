import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Audio } from 'expo-av';
import React, { useState } from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import Icon from '../../../assets/icons';
import Colors from '../../styles/Colors';
import styles from './styles';

function Play() {
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

function Pause() {
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

// const hardcodedRequest = {
//   title: ,
//   thumbnail: ,
//   artist: ,
// }

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
        await sound.current.playAsync();
        setPlayState(currState => ({
          ...currState,
          isPlaying: true,
        }));
      } else {
        await sound.current.pauseAsync();
        setPlayState(currState => ({
          ...currState,
          isPlaying: false,
        }));
      }
    } else {
      const loaded = await sound.current.loadAsync({
        uri: url,
      });
      if (loaded.isLoaded) {
        await sound.current.playAsync();
        setPlayState(currState => ({
          ...currState,
          isPlaying: true,
        }));
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

  return (
    <SafeAreaView style={globalStyles.container}>
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
        {/* <Icon type="audio_back" /> */}
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

        <TouchableWithoutFeedback
          onPress={() =>
            toggleAudio(
              sound,
              'https://storage.googleapis.com/download/storage/v1/b/cultural-survival-mobile.appspot.com/o/FernandDeVarennesUNSpecialRapporteurOnMinorityIssuesonIndigenousLanguages.mp3?generation=1678596979606352&alt=media',
            )
          }
        >
          <View style={{ width: 68, height: 68 }}>
            {playState.isPlaying ? Pause() : Play()}
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => fastforwardAudio(sound)}>
          <View style={{ width: 34, height: 34 }}>
            <Svg width="36" height="34" viewBox="0 0 36 34" fill="none">
              <Path
                d="M31 15.268C32.3333 16.0378 32.3333 17.9622 31 18.732L11.5 29.9904C10.1667 30.7602 8.5 29.7979 8.5 28.2583V5.74167C8.5 4.20207 10.1667 3.23982 11.5 4.00962L31 15.268Z"
                fill="#CC502F"
              />
              <Rect x="31" y="3" width="5" height="28" rx="1" fill="#CC502F" />
            </Svg>
          </View>
        </TouchableWithoutFeedback>

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
    </SafeAreaView>
  );
}

export default PlayScreen;
