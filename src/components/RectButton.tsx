import { GestureResponderEvent, Pressable, StyleSheet, Text } from "react-native";
import globalStyles from "../globalStyles";

const RectButton = ({
  text,
  onPress,
  buttonStyle,
  textStyle,
  disable,
}: {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  buttonStyle: any;
  textStyle: any;
  disable?: any;
}) => {
  return (
    <Pressable
      disabled={disable}
      onPress={onPress}
      style={[styles.buttonContainer, buttonStyle]}
    >
      <Text style={[globalStyles.body1, styles.buttonText, textStyle]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles =  StyleSheet.create({
    buttonText: {
      fontFamily: "Avenir",
      fontWeight: "900",
      fontSize: 14,
      textTransform: "uppercase",
      // alignSelf: "center",
      textAlign: "center",
      color: "#525454",
    },

    buttonContainer: {
      backgroundColor: "#C4C4C4",
      width: "40%",
      height: "5%",
      justifyContent: "center",
      // marginTop: "3%",
      borderRadius: 5,
    },
  });

export default RectButton;
