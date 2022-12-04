import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    // height: "100%",
    // backgroundColor: "red",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: "5%",
  },
  paddingT: {
    paddingTop: "2%",
  },
  paddingL: {
    paddingLeft: "2%",
  },

  outerContainer: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
});
