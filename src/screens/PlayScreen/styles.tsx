import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surfaceWhite,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: Colors.surfaceWhite,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  audio_container1: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
  },
  audio_container2: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    width: '100%',
  },
  rewind_button: {
    paddingRight: 32,
  },
  forward_buttton: {
    paddingLeft: 32,
  },
  header_container1: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  header_container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 336,
  },
  image_container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: 26,
  },
  title_container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: 29,
  },
  artist_container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: 8,
  },
  footer_container1: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: 25,
  },
  footer_container2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 336,
    marginBottom: 30,
  },
  image: {
    height: 336,
    width: 336,
    backgroundColor: Colors.surfaceGrey,
  },
  modal: {
    backgroundColor: Colors.surfaceTransulcent,
    height: '100%',
    width: '100%',
  },
  inset_container: {
    alignItems: 'center',
    marginTop: 305,
  },
  inset: {
    backgroundColor: Colors.surfaceWhite,
    height: 135,
    width: 260,
    borderRadius: 12,
    alignItems: 'center',
  },
  header_text1: {
    fontSize: 13,
    width: 291,
    marginLeft: 20,
    textAlign: 'left',
    fontWeight: '500',
    color: Colors.textPrimary,
  },
  header_text2: {
    fontSize: 17,
    width: 291,
    marginTop: -10,
    marginLeft: 20,
    textAlign: 'left',
    fontWeight: '400',
    color: Colors.textPrimary,
  },
  title_text: {
    width: 336,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: '500',
    color: Colors.textPrimary,
  },
  author_text: {
    width: 336,
    fontSize: 15,
    textAlign: 'left',
    fontWeight: '500',
    color: Colors.textPrimary,
  },
  inset_text1: {
    fontFamily: 'DMSans-Regular',
    marginTop: 32,
    marginBottom: 32,
    fontSize: 20,
    color: Colors.textPrimary,
  },
  inset_text2: {
    fontFamily: 'DMSans-Regular',
    marginTop: 8,
    fontSize: 20,
    color: Colors.textPrimary,
  },
  inset_line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 224,
    alignItems: 'center',
  },
  saved_button: {
    paddingLeft: 16,
  },
});
