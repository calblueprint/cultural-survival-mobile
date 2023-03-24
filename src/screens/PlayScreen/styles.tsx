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
  header_text: {
    fontSize: 13,
    width: 291,
    marginLeft: 20,
    textAlign: 'left',
    color: '#000000',
    fontFamily: 'DMSans',
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
  audio_container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
    width: '100%',
    alignItems: 'center',
  },
});
