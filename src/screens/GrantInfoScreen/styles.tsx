import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surfaceWhite,
    alignContent: 'space-around',
    padding: 19
  },
  innerContainer: {
    flex: 1,
    backgroundColor: Colors.surfaceWhite,
    alignContent: 'space-around',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 210,
    marginBottom: 20,
    marginTop: 20
  },
  image: {
    width: 350,
    height: 204,
    borderRadius: 12
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
    justifyContent: 'space-evenly'
  },
  iconInfoGroup: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  appButton: {
    width: 350
  },
  titleText: {
    fontFamily: 'DMSans-Bold',
    fontSize: 36,
    fontWeight: '400',
    textAlign: 'left',
    color: Colors.textPrimary,

  },

});
