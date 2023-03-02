import { StyleSheet, Text, TextInput, TextStyle } from 'react-native';
import globalStyles from '../globalStyles';

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F3F2F2',
    borderWidth: 1,
    borderColor: '#A8A8A8',
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
