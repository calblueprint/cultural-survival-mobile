import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import { Grant } from '../../types/schema';
import firebaseApp from '../firebaseApp';

const db = getFirestore(firebaseApp);

const grantsCollection = collection(db, 'grants');

/**
 * Get all grants from the `grants` collection.
 */
export const getAllGrants = async (): Promise<Grant[]> => {
  try {
    const dbQuery = query(grantsCollection);
    const querySnapshot = await getDocs(dbQuery);
    return querySnapshot.docs.map(document => {
      const grant = document.data() as Grant;
      grant.grant_id = document.id;
      return grant;
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('(getAllGrants)', e);
    throw e;
  }
};

/**
 * Query the `grants` collection and return a Grant if the id is found.
 */
export const getGrantById = async (id: string): Promise<Grant> => {
  try {
    const dbQuery = query(grantsCollection, where('id', '==', id));
    const querySnapshot = await getDocs(dbQuery);
    if (querySnapshot.empty) {
      throw new Error(`No grant found with id: ${id}`);
    }
    return querySnapshot.docs[0].data() as Grant;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('(getGrantById)', e);
    throw e;
  }
};
