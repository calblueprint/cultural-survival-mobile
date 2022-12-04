import * as React from "react";
import globalStyles from "../globalStyles";

import {
  Text,
  Image,
  View,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import { StyleSheet } from "react-native";
import ViewContainer from "./ViewContainer";

type CategoryProps = {
  name1: string;
  onPress1: (event: GestureResponderEvent) => void;
  img1: string;
};

const CategoryCard = ({ name1, onPress1, img1 }: CategoryProps) => {
  return (
    <View style={styles.categoryContainer}>
      <View style={styles.orangeBox}>
        <Image style={styles.imgStyle} source={img1} />
      </View>
      <Text style={styles.txtBox}>{name1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    display: "flex",
    flexDirection: "column",
    height: "30%",
    width: "35%",
    marginBottom: "10%",
  },

  categoryLeftContainer: {
    display: "flex",
  },
  imgStyle: {
    width: "80%",
    height: "80%",
  },

  orangeBox: {
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90%",
    width: "100%",
    backgroundColor: "#CC502F",
  },
  txtBox: {
    display: "flex",
    textAlign: "center",

    width: "100%",
  },
  buttonText: {
    fontFamily: "Avenir",
    fontWeight: "900",
    fontSize: 14,
    textTransform: "uppercase",
    alignSelf: "center",
    color: "#525454",
  },

  buttonContainer: {
    backgroundColor: "#C4C4C4",
    width: "40%",
    height: "5%",
    justifyContent: "center",
    marginTop: "3%",
    borderRadius: 5,
  },
});

export default CategoryCard;
