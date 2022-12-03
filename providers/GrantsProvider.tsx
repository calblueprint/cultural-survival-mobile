import React, { useContext, useState, useEffect, useRef } from "react";
import { enableLayoutAnimations } from "react-native-reanimated";
import Realm, { Configuration } from "realm";
// import { Grant } from "../src/types/schemaMongo";
import { Grant } from "../src/types/realmSchema";
import { useAuth } from "./AuthProvider";

interface GrantsContextInterface {
  grants: Object[];
  createGrant: (amount: number, 
    countries: string[],
    deadline: Timestamp | Date,
    description: string,
    duration: string,
    imageUrl: string,
    title: string,) => void;
  deleteGrant: (grant: Grant) => void;
  closeRealm: () => void;
  // user: Realm.User<
  //   Realm.DefaultFunctionsFactory,
  //   SimpleObject,
  //   Realm.DefaultUserProfileData
  // > | null;
}

const GrantsContext = React.createContext<GrantsContextInterface | null>(null);

const GrantsProvider = ( props : any ) => {
  const [grants, setGrants] = useState([] as Realm.Object[]);
  const { user } = useAuth();



  // Use a Ref to store the realm rather than the state because it is not
  // directly rendered, so updating it should not trigger a re-render as using
  // state would.
  const realmRef = useRef<Realm | any>(null);

  useEffect(() => {
    if (user == null) {
      console.error("Null user? Needs to log in!");
      return;
    }

    // Enables offline-first: opens a local realm immediately without waiting 
    // for the download of a synchronized realm to be completed.
    const OpenRealmBehaviorConfiguration = {
      type: 'openImmediately',
    };
    const config = {
      schema: [Grant.schema],
      sync: {
        user: user,
        // partition: `user=${user.id}`,
        newRealmFileBehavior: OpenRealmBehaviorConfiguration,
        existingRealmFileBehavior: OpenRealmBehaviorConfiguration,
      },
    } as any as Configuration;

    // const realm = await Realm.open(config);

    // open a realm for this particular project and get all Links
    Realm.open(config).then((realm) => {
      realmRef.current = realm;

  
      const syncGrants = realm.objects("Grant");
      setGrants([...syncGrants]);

      // we observe changes on the Links, in case Sync informs us of changes
      // started in other devices (or the cloud)
      syncGrants.addListener(() => {
        console.log("Got new data!");
        setGrants([...syncGrants]);
      });
    });

    return () => {
      // cleanup function to be called when the component is unmounted.
      closeRealm();
    };
  }, [user]);

 
  // CREATE ---------------
  const createGrant = (
    amount: number, 
    countries: string[],
    deadline: Timestamp | Date,
    description: string,
    duration: string,
    imageUrl: string,
    title: string, 
    ) => {
    const realm = realmRef.current;
    realm.write(() => {
      // Create a new link in the same partition -- that is, using the same user id.
      realm.create(
        "Grant",
        new Grant({
          // partition: user?.id,
          amount: amount,
          countries: countries,
          deadline: deadline,
          description: description,
          duration: duration,
          imageUrl: imageUrl,
          title: title,
        })
      );
    });
  };
  
  // Define the function for deleting a link. DELETE ------------
  const deleteGrant = (grant : Grant) => {
    const realm = realmRef.current;
    realm.write(() => {
      realm.delete(grant);
      // after deleting, we get the Links again and update them
      setGrants([...realm.objects("Grant")]);
    });
  };

  const closeRealm = () => {
    const realm = realmRef.current;
      if (realm) {
        realm.close();
        realmRef.current = null;
        setGrants([]);
      }
  };

  // Render the children within the LinksContext's provider. The value contains
  // everything that should be made available to descendants that use the
  // useTasks hook.
  return (
    <GrantsContext.Provider
      value={{ 
        createGrant,
        deleteGrant,
        closeRealm,
        grants,
      }}
    >
      {props.children}
    </GrantsContext.Provider>
  );
};

// The useTasks hook can be used by any descendant of the TasksProvider. It
// provides the tasks of the TasksProvider's project and various functions to
// create, update, and delete the tasks in that project.
const useGrants = () => {
  const grants = useContext(GrantsContext);
  if (grants == null) {
    throw new Error("useGrants() called outside of a GrantsProvider?"); // an alert is not placed because this is an error for the developer not the user
  }
  return grants;
};

export { GrantsProvider, useGrants };
// usegrants can be used as a hook
//providers will have funcs