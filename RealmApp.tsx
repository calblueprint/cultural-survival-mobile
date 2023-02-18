import Realm from "realm";
import { REACT_APP_ID } from "@env";

console.log(REACT_APP_ID);
const app = new Realm.App({ id: REACT_APP_ID });

export default app;
