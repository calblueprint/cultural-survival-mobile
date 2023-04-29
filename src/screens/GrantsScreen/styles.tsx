import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.surfaceWhite,
    paddingHorizontal: 16,
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
    alignSelf: 'flex-start',
    marginVertical: 20,
    marginLeft: 8,
  },
  safeArea: {
    backgroundColor: Colors.surfaceWhite,
  },
});
