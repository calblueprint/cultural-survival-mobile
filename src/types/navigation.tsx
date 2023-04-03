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

export type HomeStackParamList = {
  Home: undefined;
};

export type GrantsStackParamList = {
  Grants: undefined;
};

export type SearchStackParamList = {
  Audio: undefined;
  Play: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  NativeStackScreenProps<HomeStackParamList, T>;

export type SearchStackScreensProps<T extends keyof SearchStackParamList> =
  NativeStackScreenProps<SearchStackParamList, T>;
