import {
  Text,
  Image,
  StyleSheet,
  View,
  GestureResponderEvent,
  Pressable,
} from 'react-native';
import globalStyles from '../globalStyles';

const styles = StyleSheet.create({
  recentsCard: {
    paddingRight: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 190,
  },
  image: {
    height: 150,
    width: 150,
    backgroundColor: 'black',
  },
  textContainer: {
    width: 150,
  },
});

type RecentUploadProps = {
  title: string;
  artist: string;
  image: string;
  pressFunction: (event: GestureResponderEvent) => void;
};

function RecentUpload({
  title,
  artist,
  image,
  pressFunction,
}: RecentUploadProps) {
  return (
    <Pressable onPress={pressFunction}>
      <View style={styles.recentsCard}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.textContainer}>
          <Text style={globalStyles.body1} numberOfLines={1}>
            {title}
          </Text>
          <Text style={globalStyles.body2} numberOfLines={1}>
            {artist}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default RecentUpload;
