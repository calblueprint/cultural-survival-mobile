import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardsContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 16,
  },
  heading: {
    paddingLeft: 16,
    paddingTop: 16,
  },
  subheading: {
    paddingLeft: 16,
    marginTop: '2%',
    textAlign: 'left',
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
});
