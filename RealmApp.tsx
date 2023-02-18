import Realm from "realm";
//import { REACT_APP_ID } from "@env";

let mongoId = process.env.REACT_APP_ID;
if (!mongoId) {
  console.error("No MongoDB App ID");
  mongoId = mongoId = "";
}
const app = new Realm.App({ id: mongoId });

export default app;
