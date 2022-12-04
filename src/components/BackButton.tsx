import { Pressable, StyleSheet, Text } from "react-native";
import Icon from "../../assets/icons";
import globalStyles from "../globalStyles";

const BackButton = ({ handleFunction }: { handleFunction: () => void }) => {
  return (
    <Pressable onPress={() => handleFunction()} style={styles.back}>
      <Icon type="chevron_left" />
      <Text style={globalStyles.body1}>Back</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  back: {
    position: "absolute",
    top: "3%",
    left: "3%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default BackButton;
