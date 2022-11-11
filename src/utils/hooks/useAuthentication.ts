<<<<<<< HEAD
// import React from "react";
// //import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
// import Realm.Credentials from 'Realm'
=======
import React from 'react';
>>>>>>> 6874891d30a2d26245381d71d799181ae63eaff3

// const auth = getAuth();

// export function useAuthentication() {
//   const [user, setUser] = React.useState<User>();

//   React.useEffect(() => {
<<<<<<< HEAD
//     // Create an anonymous credential
//     const credentials = Realm.Credentials.anonymous();
//     try {
//       const user = await app.logIn(credentials);
//       console.log("Successfully logged in!", user.id);
//       return user;
//     } catch (err) {
//       console.error("Failed to log in", err.message);
//     }

//     return;
//   }, []);

//   return {
//     user,
//   };
// }
=======
//     const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         setUser(user);
//       } else {
//         // User is signed out
//         setUser(undefined);
//       }
//     });

//     return unsubscribeFromAuthStatuChanged;
//   }, []);

//   return {
//     user
//   };
// }
>>>>>>> 6874891d30a2d26245381d71d799181ae63eaff3
