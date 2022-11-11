import * as React from "react";
import { View } from "react-native";
import globalStyles from "../globalStyles";

type ViewProps = {
  children?: React.ReactNode;
};

export default function ViewContainer({ children }: ViewProps) {
  return <View style={globalStyles.container}>{children}</View>;
}

ViewContainer.defaultProps = {
  children: null,
};