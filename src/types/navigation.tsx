/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
// eslint-disable-next-line import/no-extraneous-dependencies
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Audio: undefined;
  Grants: undefined;
  SignIn1: undefined;
  SignIn2: undefined;
  Splash: undefined;
  Login: undefined;
  SignUp1: undefined;
  SignUp2: undefined;
  SignUp3: undefined;
  SignUp4: undefined;
  Play: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;
