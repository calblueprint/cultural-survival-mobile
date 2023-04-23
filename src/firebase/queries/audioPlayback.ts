// eslint-disable-next-line import/no-extraneous-dependencies
import {
  documentDirectory,
  createDownloadResumable,
  deleteAsync,
  readDirectoryAsync,
  getInfoAsync,
  makeDirectoryAsync
} from 'expo-file-system';
import { getAudioID } from './audioQueries';

const audDir = `${documentDirectory}audio/`;

export const deleteAudio = async (audioPath: string): Promise<void> =>
  deleteAsync(audioPath);


export const dirList = async (dirPath: string): Promise<string[]> =>
  readDirectoryAsync(dirPath);

export const audioPath =  (audio: string): string =>
  `${audDir}${audio}`;

  

async function ensureDirExists() {
  const dirInfo = await getInfoAsync(audDir);
  if (!dirInfo.exists) {
    // eslint-disable-next-line no-console
    console.log("Gif directory doesn't exist, creating...");
    await makeDirectoryAsync(audDir, { intermediates: true });
  }
}

export const downLoadAudio = async (audioID: string): Promise<string> => {
  await ensureDirExists();
  const name = audioID;
  const url = (await getAudioID(audioID)).gcsLink;
  const dir = `${audDir}${name}.mp3`;
  const fileInfo = await getInfoAsync(dir);
  if (fileInfo.exists) {
    return dir;
  }

  const downLoadable = createDownloadResumable(url, dir, {});
  try {
    await downLoadable.downloadAsync();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
  return dir;
};
