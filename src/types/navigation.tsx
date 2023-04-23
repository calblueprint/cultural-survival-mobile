/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeScreenProps } from '@react-navigation/native';
import { Grant } from './schema';

export type RootStackParamList = {
  NavigationBar: undefined;
  Play: undefined;
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
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamList, T>,
    RootStackScreenProps<'Play'>
  >;

export type SearchStackScreensProps<T extends keyof SearchStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<SearchStackParamList, T>,
    RootStackScreenProps<'Play'>
  >;

export type GrantsStackScreensProps<T extends keyof GrantsStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<GrantsStackParamList, T>,
    RootStackScreenProps<'Play'>
  >;
