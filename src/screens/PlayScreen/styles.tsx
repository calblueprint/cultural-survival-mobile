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
  modal: {
    backgroundColor: 'rgba(217, 217, 217, 0.6)',
    height: '100%',
    width: '100%',
  },
  inset: {
    backgroundColor: '#FFF',
    height: 135,
    width: 260,
    borderRadius: 12,
  },
  header_text1: {
    fontSize: 13,
    width: 291,
    marginLeft: 20,
    textAlign: 'left',
    fontWeight: '500',
    color: '#000000',
  },
  header_text2: {
    fontSize: 17,
    width: 291,
    marginTop: -10,
    marginLeft: 20,
    textAlign: 'left',
    fontWeight: '400',
    color: '#000000',
  },
  title_text: {
    width: 336,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: '500',
    color: '#000000',
  },
  author_text: {
    width: 336,
    fontSize: 15,
    textAlign: 'left',
    fontWeight: '500',
    color: '#000000',
  },
  inset_text1: {
    marginTop: 35,
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
  },
  inset_text2: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
  },
  audio_container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    paddingTop: 10,
    width: '100%',
  },
});
