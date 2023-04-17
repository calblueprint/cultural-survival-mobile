import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surfaceWhite,
    alignContent: 'space-around',
    paddingTop: 10,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.surfaceWhite,
    alignContent: 'space-around',
    padding: 19,
    paddingTop: 7,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '100%',
    height: 210,
    marginBottom: 20,
    marginTop: 20,
  },
  image: {
    width: '100%',
    maxWidth: '100%',
    height: 204,
    borderRadius: 12,
  },
  infoText: {
    color: Colors.textPrimary,
    margin: 8,
    rightMargin: 29,
    marginVertical: 8,
    textAlign: 'left',
    justifyContent: 'space-between',
    fontSize: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 10,
  },
  infoContainer2: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 6,
  },
  backgroundContainer: {
    borderRadius: 12,
    backgroundColor: Colors.surfaceOffwhite,
    alignSelf: 'flex-start',
    marginTop: 15,
    marginBottom: 40,
    paddingBottom: 15,
    padding: 5,
  },
  iconInfoGroup: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  appButton: {
    width: '100%',
    maxWidth: '100%',
  },
  titleText: {
    fontFamily: 'DMSans-Bold',
    fontSize: 36,
    fontWeight: '400',
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  backArrow: {
    paddingLeft: 5,
  },
});
