import {
  Text,
  Image,
  View,
  GestureResponderEvent,
  StyleSheet,
  ImageSourcePropType,
  Pressable,
} from 'react-native';

const styles = StyleSheet.create({
  categoryContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '30%',
    width: '35%',
    marginBottom: '10%',
  },
  imgStyle: {
    width: '80%',
    height: '80%',
  },
  orangeBox: {
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
    width: '100%',
    backgroundColor: '#CC502F',
  },
  txtBox: {
    display: 'flex',
    textAlign: 'center',
    width: '100%',
  },
});

type CategoryProps = {
  name: string;
  pressFunction: (event: GestureResponderEvent) => void;
  img: ImageSourcePropType;
};

function CategoryCard({ name, pressFunction, img }: CategoryProps) {
  return (
    <Pressable onPress={event => pressFunction(event)}>
      <View style={styles.categoryContainer}>
        <View style={styles.orangeBox}>
          <Image style={styles.imgStyle} source={img} />
        </View>
        <Text style={styles.txtBox}>{name}</Text>
      </View>
    </Pressable>
  );
}

export default CategoryCard;
