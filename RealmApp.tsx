import Realm from "realm";
import { REACT_APP_ID } from "@env";

const app = new Realm.App({ id: REACT_APP_ID });

export default app;
