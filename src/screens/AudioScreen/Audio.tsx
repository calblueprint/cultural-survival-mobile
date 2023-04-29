import { ScrollView, Text, TextInput, View } from 'react-native';
import AudioCard from '../../components/AudioCard';
import '../../i18n/i18n';
import Colors from '../../styles/Colors';
import { RootStackScreenProps } from '../../types/navigation';
import styles from './styles';

function AudioScreen({ navigation }: RootStackScreenProps<'Audio'>) {
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
        }}
      />
      <Text
        style={{
          fontSize: 24,
          marginBottom: 22,
          fontWeight: '500',
          textAlign: 'left',
          color: Colors.textPrimary,
        }}
      >
        Recent Search History
      </Text>
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        <AudioCard
          name="Green Colonization: An Interview With Maja Kristine Jama"
          author="Shaldon Ferris"
          onPress={() => navigation.navigate('Play')}
        />
        <AudioCard
          name="The Threatened Cultures of the Danube Delta"
          author="Tristan Taylor and Natalie Berthram"
        />
        <AudioCard
          name="An Interview with Preston Hardison on the Convention on Biodiversity"
          author="Preson Hardison"
          // onPress={() => navigation.navigate('SearchOff')}
        />
        <AudioCard
          name="Mrinalini Rai on the Convention on Biodiversity and Gender Rights "
          author="Mrinali Rai"
        />
        <AudioCard
          name="Threatened Cultures of the Danube Delta"
          author="Tristan Taylor and Natalie Berthram"
        />
        <AudioCard
          name="Threatened Cultures of the Danube Delta"
          author="Tristan Taylor and Natalie Berthram"
        />
        <AudioCard
          name="Threatened Cultures of the Danube Delta"
          author="Tristan Taylor and Natalie Berthram"
        />
        <AudioCard
          name="Threatened Cultures of the Danube Delta"
          author="Tristan Taylor and Natalie Berthram"
        />
      </ScrollView>
    </View>
  );
}

export default AudioScreen;
