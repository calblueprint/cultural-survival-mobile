import { Text, TextInput, StyleSheet } from "react-native";
import globalStyles from "../globalStyles";

const LabeledTextInput = ({
  label,
  containerStyle,
  placeholder,
}: {
  label: string;
  containerStyle: any;
  placeholder: string;
}) => {
  return (
    <>
      <Text style={globalStyles.body1}>{label}</Text>
      <TextInput
        style={[styles.input, containerStyle]}
        placeholder={placeholder}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F3F2F2",
    borderWidth: 1,
    borderColor: "#A8A8A8",
    width: "100%",
    height: "10%",
    borderRadius: 5,
    padding: "2%",
  },
});

export default LabeledTextInput;
