import { ScrollView, Text, TextInput, View } from 'react-native';
import AudioCard from '../../components/AudioCard';
import '../../i18n/i18n';
import Colors from '../../styles/Colors';
import { RootStackScreenProps } from '../../types/navigation';
import styles from './styles';

function SearchOff({ navigation }: RootStackScreenProps<'Audio'>) {
  return (
    <View style={styles.view}>
      <TextInput
        placeholder="Search"
        style={{
          width: '95%',
          height: '7%',
          backgroundColor: Colors.surfaceGrey,
          borderRadius: 10,
          padding: '3%',
          marginBottom: '7%',
          marginTop: '3%',
        }}
      />
      <View style={styles.view1}>
        <Text
          style={{
            fontSize: 32,
            marginBottom: 20,
            fontWeight: '400',
            color: Colors.textPrimary,
          }}
        >
          You are offline.
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '400',
            color: Colors.redPrimary,
          }}
        >
          Go online to search again.
        </Text>
      </View>
      {/* <View style={styles.view2}>
        <Text style={{
            fontSize: 15,
            fontWeight: '400',
            color: Colors.textPrimary,
            alignItems: 'center',
            justifyContent: 'center',
            top: 15,
            left: 130,
          }}> 
          You are offline.
        </Text>
      </View> */}
    </View>
  );
}

export default SearchOff;
