import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  cardsContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingHorizontal: 22,
  },
  recentsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 16,
  },
  recentsCard: {
    paddingRight: 31,
  },
  heading: {
    paddingTop: 16,
    fontSize: 30,
    paddingHorizontal: 22,
  },
  subheading: {
    paddingTop: 21,
    textAlign: 'left',
    fontSize: 20,
    paddingHorizontal: 22,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.surfaceWhite,
  },
});
