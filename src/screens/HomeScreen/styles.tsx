import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  // mainContainer: {
  //   paddingTop: 16,
  // },
  cardsContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingHorizontal: 24,
  },
  heading: {
    fontSize: 30,
  },
  subheading: {
    paddingTop: 24,
    textAlign: 'left',
    fontSize: 20,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.surfaceWhite,
  },
});
