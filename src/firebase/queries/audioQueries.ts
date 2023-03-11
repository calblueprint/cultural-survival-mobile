import {
    collection,
    doc,
    DocumentSnapshot,
    getDoc,
    getDocs,
    getFirestore,
    query,
  } from 'firebase/firestore';
  import { Audio } from '../../types/schema';
  import firebaseApp from '../firebaseApp';
  
  const db = getFirestore(firebaseApp);
  
  const audioCollection = collection(db, 'audio');

  const parseAudio = async (docSnap: DocumentSnapshot) => {
    const audioId = docSnap.id.toString();
    const data = docSnap.data();
  
    const audio = {
      audio_id: data?.audio_id,
      title: data?.title,
      description: data?.description,
      authors: data?.authors,
      audio_file: data?.audio_file,
      soundCloud: data?.soundCloud,
      theme: data?.theme
      
    };
  
    return audio as Audio;
  };
  
  /**
   * Get all grants from the `grants` collection.
   */
  export const getAllAudio = async (): Promise<Audio[]> => {
    try {
      const itemsRef = collection(db, "audio");
      const promises: Promise<Audio>[] = [];
      const docSnap = await getDocs(itemsRef);
      docSnap.forEach((audio: any) => {
        promises.push(parseAudio(audio))
  
      })
      const audio = await Promise.all(promises);
      return audio;
    } catch (e) {
      console.warn(e);
      throw e;
    }
  };
  

  export const getAudioID = async (audio_id: string): Promise<Audio> => {
    try {
      const docRef = doc(db, "audio", audio_id);
      const docSnap = await getDoc(docRef);
      return await parseAudio(docSnap);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
  export const getAudioTitle = async (title: string): Promise<Audio> => {
    try {
      const docRef = doc(db, "audio", title);
      const docSnap = await getDoc(docRef);
      return await parseAudio(docSnap);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
  export const getAudioDescription = async (description: string): Promise<Audio> => {
    try {
      const docRef = doc(db, "audio", description);
      const docSnap = await getDoc(docRef);
      return await parseAudio(docSnap);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
  export const getAudioAuthor = async (authors: string[]): Promise<Audio> => {
    try {
      const docRef = doc(db, "audio", authors);
      const docSnap = await getDoc(docRef);
      return await parseAudio(docSnap);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
  export const getAudioFile = async (audio_file: string[]): Promise<Audio> => {
    try {
      const docRef = doc(db, "audio", audio_file);
      const docSnap = await getDoc(docRef);
      return await parseAudio(docSnap);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
  export const getSoundCloud = async (soundCloud: string): Promise<Audio> => {
    try {
      const docRef = doc(db, "audio", soundCloud);
      const docSnap = await getDoc(docRef);
      return await parseAudio(docSnap);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
  export const getAudioTheme = async (theme: string): Promise<Audio> => {
    try {
      const docRef = doc(db, "audio", theme);
      const docSnap = await getDoc(docRef);
      return await parseAudio(docSnap);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  
 