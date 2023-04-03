/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Grant } from './schema';

export type RootStackParamList = {
  Home: undefined;
  Welcome: undefined;
  Audio: undefined;
  Grants: undefined;
  Play: undefined;
  QueriesDemo: undefined;
  GrantInfo: { grantObj: Grant };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
