import Realm from "realm";
import { REACT_APP_ID } from "@env";

const mongoDbId = REACT_APP_ID;
const app = new Realm.App({ id: mongoDbId });

export default app;
