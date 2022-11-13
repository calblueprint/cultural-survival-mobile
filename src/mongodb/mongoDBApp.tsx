import Realm from 'realm';

const appId = 'cultural-survival-app-ugsqf';
const appConfig = {
  id: appId,
  timeout: 10000,
};

const app = new Realm.App(appConfig);

export { app };