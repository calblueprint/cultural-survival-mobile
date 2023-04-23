import { Text, View, ScrollView, SafeAreaView, Image } from 'react-native';
import globalStyles from '../../globalStyles';
import styles from './styles';
import CategoryCard from '../../components/CategoryCard';
import { RootStackScreenProps } from '../../types/navigation';

import climateImage from '../../../assets/climateChangeImage.png';
import languageImage from '../../../assets/language.png';
import womenImage from '../../../assets/women.png';
import educationImage from '../../../assets/education.png';
import communicationImage from '../../../assets/communication.png';
import RecentUpload from '../../components/RecentUpload';

const response1 = {
  url: 'https://storage.googleapis.com/download/storage/v1/b/cultural-survival-mobile.appspot.com/o/JenniferTauliCorpuzTalksAboutTheImportantFactorsForIndigenousPeoplesAtCOP15.mp3?generation=1678596991287901&alt=media',
  thumbnail:
    'https://i1.sndcdn.com/artworks-jeSDFXAMxLeFlfXx-a4zovA-t500x500.jpg',
  artist: 'Jennifer Tauli',
  title:
    'Corpuz Talks about the Important Factors for Indigenous Peoples at COP15',
  theme: ['Land Rights', 'Self-Determination'],
  scLink:
    'https://soundcloud.com/culturalsurvival/jennifer-tauli-corpuz-talks-about-the-important-factors-for-indigenous-peoples-at-cop15',
};

const response2 = {
  url: 'https://storage.googleapis.com/download/storage/v1/b/cultural-survival-mobile.appspot.com/o/IndigenousPeoplesOnTheGroundAreDoingMuchForBiodiversity.mp3?generation=1678596988929380&alt=media',
  artist: 'Joji Carino',
  title: 'Indigenous Peoples on the Ground Are Doing Much for Biodiversity',
  thumbnail:
    'https://i1.sndcdn.com/artworks-6SyLrByoF8ZmwKYG-Sr8oig-t500x500.jpg',
  theme: ['Climate Change & the Environment'],
  scLink:
    'https://soundcloud.com/culturalsurvival/indigenous-peoples-on-the-ground-are-doing-much-for-biodiversity',
};

function HomeScreen({ navigation }: RootStackScreenProps<'Home'>) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <Text style={[globalStyles.h2, styles.heading]}>
          Good morning!
        </Text>
        <Text style={[globalStyles.h4, styles.subheading]}>
          Recent Uploads
        </Text>
        <View style={{
          paddingHorizontal: 22,
        }}>
          <ScrollView
            style={styles.recentsContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            bounces={false}>
            <RecentUpload title={response1.title} artist={response1.artist}>
            </RecentUpload>
            <RecentUpload title={response2.title} artist={response2.artist}>
            </RecentUpload>
            <RecentUpload title={response1.title} artist={response1.artist}>
            </RecentUpload>
          </ScrollView>
        </View>
        <Text style={[globalStyles.h4, styles.subheading]}>
          All Categories
        </Text>
        {/* TODO: Change color from a string to importing color from global styles */}
        <View style={styles.cardsContainer}>
          {/* TODO: When changing text size, switch to 1 column when text is wrapping individual words */}
          <CategoryCard
            title="Climate Change & the Environment"
            pressFunction={() => navigation.navigate('Audio')}
            img={climateImage}
            backgroundColor="#8CB8CB"
          />
          <CategoryCard
            title="Communication"
            pressFunction={() => navigation.navigate('Audio')}
            img={communicationImage}
            backgroundColor="#5CAAB5"
          />
          <CategoryCard
            title="Language & Culture"
            pressFunction={() => navigation.navigate('Audio')}
            img={languageImage}
            backgroundColor="#FBBE47"
          />
          <CategoryCard
            title="Education"
            pressFunction={() => navigation.navigate('Audio')}
            img={educationImage}
            backgroundColor="#74944A"
          />
          <CategoryCard
            title="Land Rights"
            pressFunction={() => navigation.navigate('Audio')}
            img={educationImage}
            backgroundColor="#CC502F"
          />
          {/* TODO home screen: Fix the image here, make sure not to have it cut off.  */}
          <CategoryCard
            title="Indigenous Women"
            pressFunction={() => navigation.navigate('Audio')}
            img={womenImage}
            backgroundColor="#A352BF"
          />
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

export default HomeScreen;
