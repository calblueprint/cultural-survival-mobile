import { Text, View } from 'react-native';
import globalStyles from '../../globalStyles';
import { SearchStackScreensProps } from '../../types/navigation';
import styles from './styles';

function AudioInfoScreen({ navigation }: SearchStackScreensProps<'AudioInfo'>) {
  return (
    <View style={styles.container}>
      <Text> AUDIO INFO SCREEENNNN </Text>
    </View>
  );
}
export default AudioInfoScreen;
