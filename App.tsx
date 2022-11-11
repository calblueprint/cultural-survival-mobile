import React from "react";
import RootNavigation from "./src/navigation";
import { AppProvider, UserProvider, useUser } from "@realm/react";
import { View, ActivityIndicator } from "react-native";
import { AuthProvider } from "./src/utils/providers/AuthProviders";
import "expo-dev-client";

export default function App() {
  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  );
}
