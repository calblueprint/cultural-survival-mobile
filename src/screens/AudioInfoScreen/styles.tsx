import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.surfaceWhite,
    alignContent: 'space-around',
    paddingHorizontal: 20,
    height: '100%',
  },
  infoFields: {
    marginVertical: 4,
  },
  titleText: {
    fontSize: 36,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingRight: 8,
  },
  iconSubContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
