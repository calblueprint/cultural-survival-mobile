import { Audio } from 'expo-av';
import { Dispatch, SetStateAction, createContext, useMemo, useState } from 'react';

export type AudioPlayerState = {
    soundRef: Audio.Sound;
    url: string;
    title: string;
    artist: string;
    isPlaying: boolean;
    thumbnail: string;
    scLink: string;
    theme: string[];
};

interface IAudioContext {
    audio: AudioPlayerState;
    setAudio: Dispatch<SetStateAction<AudioPlayerState>>;
}

const AudioContext = createContext<IAudioContext>({} as IAudioContext);

export function AudioProvider({ children }: { children: React.ReactNode }) {
    const [audioState, setAudioState] = useState<AudioPlayerState>(
        {} as AudioPlayerState,
    );
    //   const value = { audio: audioState, setAudio: setAudioState };
    const value = useMemo(() => ({
        audio: audioState, setAudio: setAudioState
    }), [audioState]);

    return (
        <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
    );
}

export default AudioContext;
