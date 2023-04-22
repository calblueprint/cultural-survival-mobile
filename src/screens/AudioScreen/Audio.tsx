import { SafeAreaView, ScrollView, Text, TextInput } from 'react-native';
import { useContext } from 'react';
import { Audio } from 'expo-av';

import AudioCard from '../../components/AudioCard';
import '../../i18n/i18n';
import Colors from '../../styles/Colors';
import { RootStackScreenProps } from '../../types/navigation';
import globalStyles from '../../globalStyles';
import AudioContext from '../../AudioContext';

function AudioScreen({ navigation }: RootStackScreenProps<'Audio'>) {
  const hardcodedResponse = {
    url: 'https://storage.googleapis.com/download/storage/v1/b/cultural-survival-mobile.appspot.com/o/JenniferTauliCorpuzTalksAboutTheImportantFactorsForIndigenousPeoplesAtCOP15.mp3?generation=1678596991287901&alt=media',
    // thumbnail:
    //   'https://i1.sndcdn.com/artworks-jeSDFXAMxLeFlfXx-a4zovA-t500x500.jpg',
    artist: 'Jennifer Tauli',
    title:
      'Corpuz Talks about the Important Factors for Indigenous Peoples at COP15',
    // theme: ['Land Rights', 'Self-Determination'],
    // scLink:
    //   'https://soundcloud.com/culturalsurvival/jennifer-tauli-corpuz-talks-about-the-important-factors-for-indigenous-peoples-at-cop15',
  };

  const response2 = {
    url: 'https://storage.googleapis.com/download/storage/v1/b/cultural-survival-mobile.appspot.com/o/IndigenousPeoplesOnTheGroundAreDoingMuchForBiodiversity.mp3?generation=1678596988929380&alt=media',
    artist: 'Joji Carino',
    title: 'Indigenous Peoples on the Ground Are Doing Much for Biodiversity',
  };

  const { audio, setAudio } = useContext(AudioContext);
  const newSound = new Audio.Sound();

  async function setContext(response: {
    url: string;
    artist: string;
    title: string;
  }) {
    if (audio.title !== response.title) {
      if (audio.isPlaying) {
        await audio.soundRef.pauseAsync();
      }
      setAudio({
        soundRef: newSound,
        url: response.url,
        title: response.title,
        artist: response.artist,
        isPlaying: false,
      });
    }
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <TextInput
        placeholder="Search"
        style={{
          width: '95%',
          height: '7%',
          backgroundColor: Colors.surfaceGrey,
          borderRadius: 10,
          padding: '3%',
          marginBottom: '5%',
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
          name={hardcodedResponse.title}
          author={hardcodedResponse.artist}
          onPress={() => {
            setContext(hardcodedResponse);
            navigation.navigate('Play');
          }}
        />
        <AudioCard
          name={response2.title}
          author={response2.artist}
          onPress={() => {
            setContext(response2);
            navigation.navigate('Play');
          }}
        />
        <AudioCard
          name="An Interview with Preston Hardison on the Convention on Biodiversity"
          author="Preson Hardison"
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
    </SafeAreaView>
  );
}

export default AudioScreen;
