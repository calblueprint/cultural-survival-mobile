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

const hardcodedResponse = {
  url: 'https://storage.googleapis.com/download/storage/v1/b/cultural-survival-mobile.appspot.com/o/JenniferTauliCorpuzTalksAboutTheImportantFactorsForIndigenousPeoplesAtCOP15.mp3?generation=1678596991287901&alt=media',
  thumbnail: 'https://i1.sndcdn.com/artworks-jeSDFXAMxLeFlfXx-a4zovA-t500x500.jpg',
  artist: 'Jennifer Tauli',
  title: 'Corpuz Talks about the Important Factors for Indigenous Peoples at COP15'
}

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
        }))
        await sound.current.playAsync();
          } else {
        setPlayState(currState => ({
          ...currState,
          isPlaying: false,
        }))
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
        }))
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

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row', alignItems: 'center',
            justifyContent: 'flex-start',
            width: 336,
          }}
        >
          <Icon type="dropdown" />
          <Text style={styles.header_text}>
            {hardcodedResponse.title}
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: 26}}>
        <Image
          style={{
            height: 336,
            width: 336,
            backgroundColor: '#D9D9D9',
          }}
          source={{uri: hardcodedResponse.thumbnail}}
        />
      </View>
      <View style={{flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: 29}}>
        <Text style={styles.title_text}>
          {hardcodedResponse.title}
        </Text>
      </View>
      <View style={{flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: 8}}>
        <Text style={styles.author_text}>{hardcodedResponse.artist}</Text>
      </View>

      <View style={{flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: 25}}>
        <Icon type="play_bar" />
      </View>
      
      <View style={{marginLeft: 30, marginRight: 30, marginTop: 20}}>
        <View style={styles.audio_container}>
          <TouchableWithoutFeedback onPress={() => restartAudio(sound)}>
            <View style={{ width: 34, height: 34 }}>
              <Svg width="36" height="34" viewBox="0 0 36 34" fill="none">
                <Path d="M5 18.732C3.66666 17.9622 3.66667 16.0378 5 15.268L24.5 4.00962C25.8333 3.23982 27.5 4.20207 27.5 5.74167L27.5 28.2583C27.5 29.7979 25.8333 30.7602 24.5 29.9904L5 18.732Z" fill="#CC502F"/>
                <Rect y="3" width="5" height="28" rx="1" fill="#CC502F"/>
              </Svg>      
            </View>
          </TouchableWithoutFeedback >
          
          <TouchableWithoutFeedback onPress={() => rewindAudio(sound)}>
            <View style={{ width: 57, height: 34, alignItems: 'center' }}>
            <Svg width="57" height="34" viewBox="0 0 57 34" fill="none">
              <Path d="M3 18.732C1.66666 17.9622 1.66667 16.0377 3 15.2679L22.5 4.00962C23.8333 3.23982 25.5 4.20207 25.5 5.74167L25.5 28.2583C25.5 29.7979 23.8333 30.7602 22.5 29.9904L3 18.732Z" fill="#CC502F"/>
              <Path d="M26 18.732C24.6667 17.9622 24.6667 16.0377 26 15.2679L45.5 4.00962C46.8333 3.23982 48.5 4.20207 48.5 5.74167V28.2583C48.5 29.7979 46.8333 30.7602 45.5 29.9904L26 18.732Z" fill="#CC502F"/>
            </Svg>
            </View>
          </TouchableWithoutFeedback >


          <TouchableWithoutFeedback onPress={() => toggleAudio(sound, hardcodedResponse.url)}>
            <View style={{ width: 68, height: 68 }}>
              {playState.isPlaying ? Pause() : Play()}
            </View>
          </TouchableWithoutFeedback >
          
          <TouchableWithoutFeedback onPress={() => fastforwardAudio(sound)}>
            <View style={{ width: 57, height: 34, alignItems: 'center'}}>
            <Svg width="57" height="34" viewBox="0 0 57 34" fill="none">
              <Path d="M31 15.268C32.3333 16.0378 32.3333 17.9623 31 18.7321L11.5 29.9904C10.1667 30.7602 8.5 29.7979 8.5 28.2583V5.74167C8.5 4.20207 10.1667 3.23982 11.5 4.00962L31 15.268Z" fill="#CC502F"/>
              <Path d="M54 15.268C55.3333 16.0378 55.3333 17.9623 54 18.7321L34.5 29.9904C33.1667 30.7602 31.5 29.7979 31.5 28.2583V5.74167C31.5 4.20207 33.1667 3.23982 34.5 4.00962L54 15.268Z" fill="#CC502F"/>
            </Svg>
            </View>
          </TouchableWithoutFeedback >

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
          <Icon type="bookmark" />
          <Icon type="options" />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default PlayScreen;
