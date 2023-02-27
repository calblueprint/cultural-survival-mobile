import Realm from 'realm';

let mongoId = 'cultural-survival-app-ugsqf';
if (!mongoId) {
  console.error('No MongoDB App ID');
  mongoId = mongoId = '';
}
const app = new Realm.App({ id: mongoId });

export default app;
