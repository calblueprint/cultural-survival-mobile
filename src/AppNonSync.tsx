import React, { useMemo } from "react";
import { Text, View } from "react-native";

import { Task } from "./models/Task";
import { TaskRealmContext } from "./models";
import { TaskManager } from "./components/TaskManager";
import RootNavigation from "./navigation";
import HomeScreen from "./screens/HomeScreen/Home";
import UserStack from "./navigation/userStack";

import Realm from "realm";
import { startupApp } from "./mongodb/mongoDBApp";

const { useQuery } = TaskRealmContext;

export const AppNonSync = () => {
  const db = startupApp();
  return <UserStack />;
};
