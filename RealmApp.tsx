import Realm from "realm";
import { APP_ID } from "@env";
const app = new Realm.App({ id: APP_ID });

export default app;
