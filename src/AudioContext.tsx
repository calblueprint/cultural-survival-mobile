import { Audio } from 'expo-av';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

type AudioPlayerState = {
    soundRef: Audio.Sound,
    url: string,
    title: string,
    artist: string,
    isPlaying: boolean,
}

// const [audio, setAudio] = useState<AudioPlayerState>({} as AudioPlayerState);


type AudioDispatch = Dispatch<SetStateAction<AudioPlayerState>>

interface IAudioContext {
    audio: AudioPlayerState,
    setAudio: Dispatch<SetStateAction<AudioPlayerState>>,
}

const AudioContext = createContext<IAudioContext>({} as IAudioContext);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
    const [audioState, setAudioState] = useState<AudioPlayerState>({} as AudioPlayerState)
    const value = { audio: audioState, setAudio: setAudioState }
    return (
        <AudioContext.Provider value={value}>
            {children}
        </AudioContext.Provider>
    )
}

export default AudioContext;
