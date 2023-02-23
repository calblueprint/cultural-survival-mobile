import Realm from 'realm';

let mongoId = process.env.REACT_APP_ID;
if (!mongoId) {
  // eslint-disable-next-line no-console
  console.error('No MongoDB App ID');
  mongoId = '';
}
const app = new Realm.App({ id: mongoId });

export default app;
