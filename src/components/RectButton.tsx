import {
  Text,
  Pressable,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';
import globalStyles from '../globalStyles';

const styles = StyleSheet.create({
  buttonText: {
    textTransform: 'uppercase',
    alignSelf: 'center',
    color: '#525454',
  },
  buttonContainer: {
    backgroundColor: '#C4C4C4',
    width: '40%',
    height: '5%',
    justifyContent: 'center',
    marginTop: '3%',
    borderRadius: 5,
  },
});

type RectButtonProps = {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  buttonStyle: ViewStyle;
  textStyle: TextStyle;
  disable?: boolean;
};

function RectButton({
  text,
  onPress,
  buttonStyle,
  textStyle,
  disable,
}: RectButtonProps) {
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
}

export default RectButton;
