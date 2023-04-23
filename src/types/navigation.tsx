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
  // AudioInfo: undefined;
  QueriesDemo: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
};

export type GrantsStackParamList = {
  Grants: undefined;
  GrantInfo: { grantObj: Grant };
};

export type SearchStackParamList = {
  Audio: undefined;
  Play: undefined;
  AudioInfo: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  NativeStackScreenProps<HomeStackParamList, T>;

export type SearchStackScreensProps<T extends keyof SearchStackParamList> =
  NativeStackScreenProps<SearchStackParamList, T>;

export type GrantsStackScreensProps<T extends keyof GrantsStackParamList> =
  NativeStackScreenProps<GrantsStackParamList, T>;
