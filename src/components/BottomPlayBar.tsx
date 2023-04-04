import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from '../../assets/icons';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D9D9D9',
    width: 400,
    height: 78,
    borderRadius: 5,
    margin: 0,
  },
  title: {
    fontSize: 12,
    marginLeft: 15,
    marginTop: 9,
  },
  meta: {
    marginTop: 10,
    marginLeft: 15,
    fontSize: 9,
    flexWrap: 'wrap',
  },
});

type BottomPlayBarProps = {
  onPress?: () => void;
  children: React.ReactNode;
  style?: object;
};

function BottomPlayBar({ onPress, children, style }: BottomPlayBarProps) {
  return (
    <Pressable style={[styles.card, style]} onPress={onPress}>
      {children}
    </Pressable>
  );
}

type SearchBottomPlayBarProps = {
  name: string;
  onPress?: () => void;
  author: string;
  previewImage?: string;
};

export default function SearchBottomPlayBarCard({
  name,
  onPress,
  author,
  previewImage,
}: SearchBottomPlayBarProps) {
  return (
    <BottomPlayBar
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}
      onPress={onPress}
    >
      <Image
        source={{ uri: previewImage }}
        style={{
          height: 63,
          width: 63,
          marginTop: 6.5,
          marginLeft: 5,
          backgroundColor: '#F3F2F2',
          borderRadius: 5,
        }}
      />
      <View style={{ width: 250 }}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.meta}>{author}</Text>
      </View>
      <View style={{ marginTop: 13, marginRight: 8 }}>
        <Icon type="play_button" />
      </View>
    </BottomPlayBar>
  );
}
