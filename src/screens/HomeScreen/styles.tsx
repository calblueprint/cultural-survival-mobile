import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  cardsContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  heading: {
    fontSize: 30,
  },
  subheading: {
    paddingTop: 16,
    textAlign: 'left',
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.surfaceWhite,
  },
  seeAllContainer: {
    height: 150,
    width: 150,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.surfaceGrey,
  },
  scrollView: {
    width: '100%',
    paddingHorizontal: 24,
    paddintTop: 16,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
