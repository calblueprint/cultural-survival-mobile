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
  titleText: {
    fontFamily: 'DMSans-Bold',
    fontSize: 36,
    fontWeight: '400',
    textAlign: 'left',
    color: Colors.textPrimary,
    alignSelf: 'center'
  },
  titleContainer: {
    flex: 1,
    backgroundColor: Colors.surfaceWhite,
    justifyContent: 'center',
    marginRight: 60,
    marginTop: 20,
    marginBottom: 20
  }
});
