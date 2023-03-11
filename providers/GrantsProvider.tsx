import React, { useContext, useState, useEffect, useRef } from "react";
import Realm from "realm";
import app from "../RealmApp";

interface GrantContextInterface { // this would be like our grnt schema
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  user: Realm.User<
    Realm.DefaultFunctionsFactory,
    SimpleObject,
    Realm.DefaultUserProfileData
  > | null;
}

// Create a new Context object that will be provided to descendants of
// the AuthProvider.
const GrantContext = React.createContext<AuthContextInterface | null>(null);

// The GrantProvider is responsible for user management and provides the
// GrantContext value to its descendants. Components under a GrantProvider can
// use the useGrant() hook to access the auth value.
const GrantProvider = ({ children }: any) => {
  const [user, setUser] = useState(app.currentUser);
  // TODO: Check typing for useRef
  const realmRef = useRef<Realm | any>(null);

  useEffect(() => {
    if (user == null) {
      console.warn("NO USER Logged In");
      return;
    }

    const config = {
      sync: {
        user,
        partitionValue: `user=${user.id}`,
      },
    };

    // Open a realm with the logged in user's partition value in order
    // to get the links that the logged in user added
    // (instead of all the links stored for all the users)
    Realm.open(config).then((userRealm) => {
      realmRef.current = userRealm;
    });

    return () => {
      // cleanup function
      const userRealm = realmRef.current;
      if (userRealm) {
        userRealm.close();
        realmRef.current = null;
      }
    };
  }, [user]);

  // The signIn function takes an email and password and uses the
  // emailPassword authentication provider to log in.
  // This authentication method should be set up correctly on the MongoDB Realm App
  // see: https://docs.mongodb.com/realm/authentication/providers/
  const signIn = async (email: string, password: string) => {
    const creds = Realm.Credentials.emailPassword(email, password);
    const newUser = await app.logIn(creds);
    setUser(newUser);
  };

  // The signUp function takes an email and password and uses the
  // emailPassword authentication provider to register the user.
  // This authentication should be set up correctly on the MongoDB Realm App
  // see: https://docs.mongodb.com/realm/authentication/providers/
  const signUp = async (email: string, password: string) => {
    await app.emailPasswordAuth.registerUser({ email, password });
  };

  // The signOut function calls the logOut function on the currently
  // logged in user
  const signOut = () => {
    if (user == null) {
      console.warn("Not logged in, can't log out!");
      return;
    }
    user.logOut();
    setUser(null);
  };

  return (
    <GrantContext.Provider
      value={{
        signUp,
        signIn,
        signOut,
        user,
      }}
    >
      {children}
    </GrantContext.Provider>
  );
};

// The useGrant hook can be used by components under a GrantProvider to
// access the auth context value.
const useGrant = () => {
  const auth = useContext(GrantContext);
  if (auth == null) {
    throw new Error("useGrant() called outside of a GrantProvider?");
  }
  return auth;
};

export { GrantProvider, useGrant };
