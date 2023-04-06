import {
    collection,
    doc,
    DocumentSnapshot,
    getDoc,
    getDocs,
    getFirestore,
    query,
  } from 'firebase/firestore';
  import { getStorage, ref, getDownloadURL } from "firebase/storage";
  // eslint-disable-next-line import/no-extraneous-dependencies
  // eslint-disable-next-line import/no-extraneous-dependencies
  import * as FileSystem from 'expo-file-system';


  import {getAudioID } from './audioQueries';
  import firebaseApp from '../firebaseApp';

 
  
  const db = getFirestore(firebaseApp);
  
  const audioCollection = collection(db, 'audio');

const storage = getStorage();



// eslint-disable-next-line import/prefer-default-export
export const downLoadAudio = async (audioID: string): Promise<string> => {

    
    const name = audioID
    const url = (await getAudioID(audioID)).gcsLink;
    const dir = `${FileSystem.documentDirectory}${name}.mp3`
    console.log(dir)
  
    // console.log((await getAudioID(audio_id)).gcsLink);
    console.log(url);

    const downLoadAudio = FileSystem.createDownloadResumable(
      url,
      dir,
      {}
    );
    try {
      const { uri } = await downLoadAudio.downloadAsync();
      console.log('Finished downloading to ', uri);
    } catch (e) {
      console.error(e);
    }
    const tmp = await FileSystem.getInfoAsync(dir);
    console.log("Hello")
    console.log(downLoadAudio)
    console.log(tmp)

    return dir;
  };

  export const deleteAudio = async (audioPath: string): Promise<void> => FileSystem.deleteAsync(audioPath);











