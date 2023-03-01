import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    paddingBottom: 30,
    width: 350,
  },
  title: {
    fontSize: 15,
    marginLeft: 15,
  },
  meta: {
    marginTop: 10,
    marginLeft: 15,
    fontSize: 11.33,
    color: '#333',
    flexWrap: 'wrap',
  },
});

type AudioCardProps = {
  onPress?: () => void;
  children: React.ReactNode;
  style?: object;
};

function AudioCard({ onPress, children, style }: AudioCardProps) {
  return (
    <Pressable style={[styles.card, style]} onPress={onPress}>
      {children}
    </Pressable>
  );
}

type SearchAudioCardProps = {
  name: string;
  onPress?: () => void;
  author: string;
  previewImage?: string;
};

export default function SearchAudioCard({
  name,
  onPress,
  author,
  previewImage,
}: SearchAudioCardProps) {
  return (
    <AudioCard
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
      onPress={onPress}
    >
      <Image
        source={{ uri: previewImage }}
        style={{
          height: 79,
          width: 79,
          backgroundColor: '#CC502F',
          borderRadius: 9.5,
        }}
      />
      <View style={{ width: 250 }}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.meta}>{author}</Text>
      </View>
    </AudioCard>
  );
}
