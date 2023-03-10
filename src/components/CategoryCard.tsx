import {
  Text,
  Image,
  GestureResponderEvent,
  StyleSheet,
  ImageSourcePropType,
  Pressable,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#8CB8CB',
    overflow: 'hidden',
    borderRadius: 8,
    height: 120,
    width: 166,
    padding: 14,
    margin: 8,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: -24,
    marginBottom: -24,
  },
});

type CategoryProps = {
  name: string;
  pressFunction: (event: GestureResponderEvent) => void;
  img: ImageSourcePropType;
  color: string;
};

function CategoryCard({ name, pressFunction, img, color }: CategoryProps) {
  return (
    <Pressable
      style={[styles.container, { backgroundColor: color }]}
      onPress={pressFunction}
    >
      <Text style={styles.text}>{name}</Text>
      <Image style={styles.image} source={img} />
    </Pressable>
  );
}

export default CategoryCard;
