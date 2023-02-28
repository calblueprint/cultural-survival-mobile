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

  categoryLeftContainer: {
    display: 'flex',
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
  buttonText: {
    fontFamily: 'Avenir',
    fontWeight: '900',
    fontSize: 14,
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

type CategoryProps = {
  name: string;
  pressFunction: (event: GestureResponderEvent) => void;
  img: ImageSourcePropType;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
