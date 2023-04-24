import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surfaceWhite,
    alignContent: 'space-around',
  },
  grantsText: {
    marginBottom: 30,
    marginLeft: 24,
    marginTop: 20,
  },
  heading: {
    paddingLeft: 16,
    paddingTop: 16,
  },
  subheading: {
    paddingLeft: 16,
    marginTop: '10%',
    textAlign: 'center',
  },
});
