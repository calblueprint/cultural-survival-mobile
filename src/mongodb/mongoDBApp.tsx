import Realm from "realm";
import { MongoClient } from "mongodb";

const appId = "cultural-survival-app-ugsqf";
const appConfig = {
  id: appId,
  timeout: 10000,
};

const realm = new Realm.App(appConfig);

const uri =
  "mongodb+srv://davidqing:Momo6432!@atlascluster.iqjceju.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const db = client.db("cultural-survival-mobile");

export { realm, db };
