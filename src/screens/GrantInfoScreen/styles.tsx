import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.surfaceWhite,
    alignContent: 'space-around',
    paddingHorizontal: 20,
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 190,
    marginBottom: 20,
    marginTop: 20,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 12,
    marginVertical: 12,
  },
  infoText: {
    color: Colors.textPrimary,
    margin: 8,
    rightMargin: 28,
    marginVertical: 8,
    textAlign: 'left',
    justifyContent: 'space-between',
    fontSize: 15,
  },
  infoFields: {
    marginVertical: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 4,
    flexWrap: 'wrap',
  },
  backgroundContainer: {
    borderRadius: 12,
    alignSelf: 'flex-start',
    width: '100%',
    marginTop: 36,
    marginBottom: 212,
    paddingBottom: 16,
    paddingHorizontal: 8,
    padding: 5,
  },
  iconInfoGroup: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  appButton: {
    width: '100%',
    marginVertical: 12,
  },
  titleText: {
    fontFamily: 'DMSans-Bold',
    fontSize: 36,
    fontWeight: '400',
    textAlign: 'left',
    color: Colors.textPrimary,
    marginVertical: 12,
  },
  backArrow: {
    width: '100%',
  },
  safeArea: {
    backgroundColor: Colors.surfaceWhite,
  },
});
