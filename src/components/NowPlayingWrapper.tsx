import { View } from 'react-native';
import globalStyles from '../globalStyles';
import BottomPlayBar from './BottomPlayBar';

type NowPlayingWrapperProps = {
  children?: React.ReactNode;
  // TODO FIX THIS NAV TYPE 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
};

export default function NowPlayingWrapperContainer({
  children,
  navigation,
}: NowPlayingWrapperProps) {
  return (
    <View style={globalStyles.container}>
      {children}
      <BottomPlayBar
        name="Green Colonization: An Interview With Maja Kristine Jama"
        author="Shaldon Ferris"
        onPress={() => navigation.navigate('Play')}
      />
    </View>
  );
}
