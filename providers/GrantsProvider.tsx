import React, { useContext, useState, useEffect, useRef } from "react";
import { enableLayoutAnimations } from "react-native-reanimated";
import Realm, { Configuration } from "realm";
// import { Grant } from "../src/types/schemaMongo";
import { Grant } from "../src/types/realmSchema";
import { useAuth } from "./AuthProvider";

const GrantsContext = React.createContext(null);

const GrantsProvider = ( {props} : any ) => {
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
        partition: `user=${user.id}`,
        newRealmFileBehavior: OpenRealmBehaviorConfiguration,
        existingRealmFileBehavior: OpenRealmBehaviorConfiguration,
      },
    } as any as Configuration;

    // const realm = await Realm.open(config);

    // open a realm for this particular project and get all Links
    Realm.open(config).then((realm) => {
      realmRef.current = realm;

      // const syncLinks = realm.objects("Link");
      // let sortedLinks = syncLinks.sorted("name");
      // setLinks([...sortedLinks]);
      const syncGrants = realm.objects("Grant");
      setGrants([...syncGrants]);

      // we observe changes on the Links, in case Sync informs us of changes
      // started in other devices (or the cloud)
      syncGrants.addListener(() => {
        console.log("Got new data!");
        // setGrants([...sortedLinks]);
      });
    });

    return () => {
      // cleanup function
      closeRealm();
    };
  }, [user]);

  // crud operations will be diff for grants vvv
  //
  // const createLink = (newLinkName, newLinkURL) => {
  //   const realm = realmRef.current;
  //   realm.write(() => {
  //     // Create a new link in the same partition -- that is, using the same user id.
  //     realm.create(
  //       "Link",
  //       new Link({
  //         name: newLinkName || "New Link",
  //         url: newLinkURL || "http://",
  //         partition: user.id,
  //       })
  //     );
  //   });
  // };

  // // Define the function for deleting a link.
  // const deleteLink = (link) => {
  //   const realm = realmRef.current;
  //   realm.write(() => {
  //     realm.delete(link);
  //     // after deleting, we get the Links again and update them
  //     setLinks([...realm.objects("Link").sorted("name")]);
  //   });
  // };

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
        // createLink,
        // deleteLink,
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
const useLinks = () => {
  const grants = useContext(GrantsContext);
  if (grants == null) {
    throw new Error("useGrants() called outside of a TasksProvider?"); // an alert is not placed because this is an error for the developer not the user
  }
  return grants;
};

export { GrantsProvider, useGrants };
// usegrants can be used as a hook
//providers will have funcs