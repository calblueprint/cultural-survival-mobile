import { StyleSheet, Text, TextInput, TextStyle } from 'react-native';
import globalStyles from '../globalStyles';
import Colors from '../styles/Colors';

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.surfaceGrey,
    width: '100%',
    height: '10%',
    borderRadius: 5,
    padding: '2%',
  },
});

type LabeledTextInputProps = {
  label: string;
  containerStyle: TextStyle;
  placeholder: string;
};

function LabeledTextInput({
  label,
  containerStyle,
  placeholder,
}: LabeledTextInputProps) {
  return (
    <>
      <Text style={globalStyles.body1}>{label}</Text>
      <TextInput
        style={[styles.input, containerStyle]}
        placeholder={placeholder}
      />
    </>
  );
}

export default LabeledTextInput;
