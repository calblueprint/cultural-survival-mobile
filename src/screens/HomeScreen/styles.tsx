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
  recentsCard: {
    paddingRight: 31,
  },
  heading: {
    fontSize: 30,
  },
  subheading: {
    paddingTop: 21,
    textAlign: 'left',
    fontSize: 20,
    paddingHorizontal: 22,
  },
  h3: {
    fontFamily: 'DMSans-Regular',
    textAlign: 'left',
    fontSize: 15,
    paddingRight: 18,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.surfaceWhite,
  },
});
