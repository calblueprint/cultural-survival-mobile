import {
  documentDirectory,
  createDownloadResumable,
  deleteAsync,
} from 'expo-file-system';
import { getAudioID } from './audioQueries';

export const downLoadAudio = async (audioID: string): Promise<string> => {
  const name = audioID;
  const url = (await getAudioID(audioID)).gcsLink;
  const dir = `${documentDirectory}${name}.mp3`;
  const downLoadable = createDownloadResumable(url, dir, {});
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const uri = await downLoadable.downloadAsync();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
  return dir;
};

export const deleteAudio = async (audioPath: string): Promise<void> =>
  deleteAsync(audioPath);
