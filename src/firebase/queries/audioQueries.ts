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
      theme: data?.theme,
      gcsLink: data?.gcsLink
      
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
  