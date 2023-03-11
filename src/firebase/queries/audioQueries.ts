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

  export const getAudioTitle = (id: string): Promise<Audio> => {
    try {
        const dbQuery = query(audioCollection);
        const querySnapshot = await getDocs(dbQuery);
        return querySnapshot.docs.map(document => {
          const audio = document.data() as Audio;
          audio.title = document.title;
          // TODO grants-flow: remove this suppression and console log when ids are processed properly.
          // eslint-disable-next-line no-console
          console.log(audio.title);
          return audio.title;
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('(getAllGrants)', e);
        throw e;
      }
  };
  

  
 