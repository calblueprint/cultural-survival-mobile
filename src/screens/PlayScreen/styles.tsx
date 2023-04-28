import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surfaceWhite,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 16,
  },
  audioContainer: {
    width: '100%',
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  titleContainer: {
    marginTop: 32,
  },
  artistContainer: {
    width: '100%',
    marginTop: 8,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    marginTop: 24,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    backgroundColor: Colors.surfaceGrey,
  },
  imageContainer: {
    shadowColor: Colors.shadowDark,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  headerTextContainer: {
    marginLeft: 20,
  },
  headerText1: {
    fontSize: 13,
    width: 291,
    marginBottom: 4,
    textAlign: 'left',
    fontWeight: '500',
    color: Colors.textPrimary,
  },
  headerText2: {
    fontSize: 17,
    width: 291,
    textAlign: 'left',
    fontWeight: '400',
    color: Colors.textPrimary,
  },
  titleText: {
    width: 336,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: '500',
    color: Colors.textPrimary,
  },
  artistText: {
    width: 336,
    fontSize: 15,
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  modal: {
    backgroundColor: Colors.translucentBackground,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 48,
  },
  inset: {
    backgroundColor: Colors.surfaceWhite,
    width: '100%',
    borderRadius: 12,
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.textPrimary,
    padding: 32,
  },
  rule: {
    width: '100%',
    paddingHorizontal: 10,
    height: 1,
    backgroundColor: Colors.shadowDark,
  },
  modalAction: {
    padding: 12,
    fontSize: 18,
    textAlign: 'center',
    color: Colors.textPrimary,
  },
});
