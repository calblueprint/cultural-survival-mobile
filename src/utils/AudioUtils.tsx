import { Dispatch, SetStateAction } from 'react';
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av';
import { AudioPlayerState } from '../AudioContext';

export async function toggleAudio(
  audio: AudioPlayerState,
  setAudio: Dispatch<SetStateAction<AudioPlayerState>>,
) {
  const result = await audio.soundRef.getStatusAsync();
  if (result.isLoaded) {
    if (result.isPlaying) {
      setAudio(currState => ({
        ...currState,
        isPlaying: false,
      }));
      await audio.soundRef.pauseAsync();
    } else {
      setAudio(currState => ({
        ...currState,
        isPlaying: true,
      }));
      await audio.soundRef.playAsync();
    }
  } else {
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      interruptionModeIOS: InterruptionModeIOS.DuckOthers,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
      playThroughEarpieceAndroid: false,
    });
    const loaded = await audio.soundRef.loadAsync({
      uri: audio.url,
    });
    if (loaded.isLoaded) {
      setAudio(currState => ({
        ...currState,
        isPlaying: true,
      }));
      await audio.soundRef.playAsync();
    }
  }
}

export async function rewindAudio(
  audio: AudioPlayerState,
  // setAudio: Dispatch<SetStateAction<AudioPlayerState>>,
) {
  const result = await audio.soundRef.getStatusAsync();
  if (result.isLoaded) {
    await audio.soundRef.setPositionAsync(result.positionMillis - 10000);
  }
}

export async function fastforwardAudio(
  audio: AudioPlayerState,
  setAudio: Dispatch<SetStateAction<AudioPlayerState>>,
) {
  const result = await audio.soundRef.getStatusAsync();
  if (result.isLoaded) {
    await audio.soundRef.setPositionAsync(result.positionMillis + 10000);
    if (
      result.durationMillis != null &&
      result.positionMillis >= result.durationMillis
    ) {
      setAudio(currState => ({
        ...currState,
        isPlaying: false,
      }));
      audio.soundRef.setPositionAsync(0);
      // TODO: go to next audio if fastforwarding past the end
    }
  }
}
