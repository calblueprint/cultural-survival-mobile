// import React from "react";
// //import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
// import Realm.Credentials from 'Realm'

// const auth = getAuth();

// export function useAuthentication() {
//   const [user, setUser] = React.useState<User>();

//   React.useEffect(() => {
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
