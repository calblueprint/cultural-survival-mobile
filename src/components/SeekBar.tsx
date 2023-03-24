import { View, Text } from "react-native";
import Slider from '@react-native-community/slider';
  import globalStyles from '../globalStyles';

type SeekBarProps = {
    // text: string;
    // onPress: (event: GestureResponderEvent) => void;
    // buttonStyle: ViewStyle;
    // textStyle: TextStyle;
    // disable?: boolean;
    positionMillis: number;
    durationMillis: number;
    sliderValue: number;
};
  
function SeekBar({
    positionMillis,
    durationMillis,
    sliderValue,
    }: SeekBarProps) {
    // sliderValue = positionMillis/durationMillis;      
    return (
        <View>
        {/* <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }} />
            <Text style={[{ width: 80 }]}>
            {`${positionMillis  } / ${  durationMillis}`}
            </Text>
        </View> */}
        <Slider
            minimumValue={0}
            maximumValue={1}
            value={sliderValue}
            style={{width: 350}}
            minimumTrackTintColor='red'
            maximumTrackTintColor='black'
            />
        <Text>{positionMillis}</Text>
        <Text>{durationMillis}</Text>
        </View>
    );
}
  
export default SeekBar;

  