import {
  Text,
  Image,
  GestureResponderEvent,
  StyleSheet,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import Colors from '../styles/Colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    borderRadius: 8,
    height: 103,
    width: 157,
    padding: 14,
    marginBottom: 16,
  },
  title: {
    color: Colors.textWhite,
    fontWeight: 'bold',
    zIndex: 1,
  },
  image: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: -24,
    marginBottom: -24,
    height: 86,
    width: 86,
  },
});

type CategoryCardProps = {
  title: string;
  pressFunction: (event: GestureResponderEvent) => void;
  img: ImageSourcePropType;
  backgroundColor: string;
};

function CategoryCard({
  title,
  pressFunction,
  img,
  backgroundColor,
}: CategoryCardProps) {
  return (
    <Pressable
      style={[styles.container, { backgroundColor }]}
      onPress={pressFunction}
    >
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={img} />
    </Pressable>
  );
}

export default CategoryCard;
