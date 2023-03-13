import { Image, Text, View } from 'react-native';
import Icon from '../../../assets/icons';
import Colors from '../../styles/Colors';
import styles from './styles';

function PlayScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '80%',
          paddingTop: '5%',
          paddingLeft: '5%',
          alignItems: 'center',
        }}
      >
        <Icon type="dropdown" />
        <Text style={styles.header_text}>
          Green Colonization: An Interview with Maja Kristine Jama
        </Text>
      </View>
      <View style={styles.container2}>
        <Image
          style={{
            height: 275,
            width: 275,
            backgroundColor: Colors.surfaceGrey,
            borderRadius: 9.5,
            marginTop: '3%',
            marginBottom: '3%',
          }}
        />
      </View>
      <Text style={styles.title_text}>
        Green Colonization: An Interview with Maja Kristine Jama
      </Text>
      <Text style={styles.author_text}>Shaldon Ferris</Text>

      <View style={{ paddingLeft: '5%' }}>
        <Icon type="play_bar" />
      </View>
      <View style={styles.audio_container}>
        <Icon type="audio_back" />
        <Icon type="play_button" />
        <Icon type="audio_forward" />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          width: '95%',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '20%',
            paddingBottom: '7%',
          }}
        >
          <Icon type="bookmark" />
          <Icon type="options" />
        </View>
      </View>
    </View>
  );
}

export default PlayScreen;
