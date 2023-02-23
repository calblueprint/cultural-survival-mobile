// import { useAuthentication } from '../utils/hooks/useAuthentication';
import React from 'react';
import UserStack from './userStack';
// TODO: Uncomment this when UserStack vs. AuthStack is implemented.
// import AuthStack from './authStack';

export default function RootNavigation() {
  // TODO: The current implementation simply defaults to UserStack; when this is fully implemented,
  // it should return the AuthStack when the user still needs to authenticate, and UserStack
  // when the user is already authenticated. The code below does this.
  // return user ? <AuthStack /> : <UserStack />;
  return <UserStack />;
}
