//import { useAuthentication } from "../utils/hooks/useAuthentication";
import UserStack from "./userStack";
import AuthStack from "./authStack";
import { useAuth } from "../utils/providers/AuthProviders";

export default function RootNavigation() {
  const { user } = useAuth();

  // TODO: switch this order after authentication has been properly implemented
  return user ? <AuthStack /> : <UserStack />;
}
