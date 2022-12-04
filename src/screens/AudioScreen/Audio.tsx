import { ScrollView, Text, View } from 'react-native';
import AudioCard from '../../components/AudioCard';
import RectButton from '../../components/RectButton';
import '../../i18n/i18n';
import { RootStackScreenProps } from '../../types/navigation';
import styles from './styles';

function AudioScreen({ navigation }: RootStackScreenProps<'Audio'>) {
  return (
    <View style={styles.view}>
      <Text
        style={{
          fontSize: 24,
          marginBottom: 22,
          fontWeight: '500',
          textAlign: 'left',
          color: '#525454',
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
          name="The Threatened Cultures of the Danube Delta"
          author="Tristan Taylor and Natalie Berthram"
          onPress={() => navigation.navigate('Play')}
        />
        <AudioCard
          name="The Threatened Cultures of the Danube Delta"
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
      <RectButton
        text="Back"
        buttonStyle={{
          marginTop: '5%',
          backgroundColor: '#253C85',
          marginBottom: '8%',
          justifyContent: 'flex-end',
        }}
        textStyle={{ color: '#FFF' }}
        onPress={() => navigation.navigate('Home')}
      />

      <View style={styles.view}>
        <Text
          style={{
            fontSize: 24,
            marginBottom: 22,
            fontWeight: '500',
            textAlign: 'left',
            color: '#525454',
          }}
        >
          Recent Search History
        </Text>

        <RectButton
          text="Back"
          buttonStyle={{
            marginTop: '5%',
            backgroundColor: '#253C85',
            marginBottom: '8%',
            justifyContent: 'flex-end',
          }}
          textStyle={{ color: '#FFF' }}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}

export default AudioScreen;
