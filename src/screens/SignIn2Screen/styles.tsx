import { StyleSheet } from "react-native";

export default StyleSheet.create({
  inputs: {},
  back: {
    position: "absolute",
    top: "3%",
    left: "3%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    width: "70%",
  },
  underlined: {
    textDecorationLine: "underline",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "50%",
    width: "70%",
    backgroundColor: "blue",
  },
});
