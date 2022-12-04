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

  padding: {
    padding: "2%",
    alignSelf: "center",
  },

  padding2: {
    marginTop: "2%",
    paddingLeft: "10%",
    textAlign: "left",
  },

  outerContainer: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
});
