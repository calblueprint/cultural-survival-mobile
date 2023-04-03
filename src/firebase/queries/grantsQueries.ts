import {
  collection,
  doc,
  DocumentSnapshot,
  getDoc,
  getDocs,
  getFirestore,
  query,
} from 'firebase/firestore';
import { Grant } from '../../types/schema';
import firebaseApp from '../firebaseApp';

const db = getFirestore(firebaseApp);

const grantsCollection = collection(db, 'grants');

const parseGrant = async (docSnap: DocumentSnapshot) => {
  const grantId = docSnap.id.toString();
  const data = docSnap.data();

  const grant = {
    grant_id: grantId,
    amount: data?.amount,
    countries: data?.countries,
    deadline: data?.deadline,
    description: data?.description,
    duration: data?.duration,
    image_link: data?.image_link,
    share_link: data?.share_link,
    title: data?.title,
  };

  return grant as Grant;
};

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
      // TODO grants-flow: remove this suppression and console log when ids are processed properly.
      // eslint-disable-next-line no-console
      console.log(grant.grant_id);
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
    const docRef = doc(db, 'grants', id);
    const docSnap = await getDoc(docRef);
    return await parseGrant(docSnap);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('(getGrantById)', e);
    throw e;
  }
};
