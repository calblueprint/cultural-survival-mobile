import { Text, View, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import globalStyles from '../../globalStyles';
import styles from './styles';
import CategoryCard from '../../components/CategoryCard';
import { RootStackScreenProps } from '../../types/navigation';

import climateImage from '../../../assets/categories/climate.png';
import languageImage from '../../../assets/categories/languageandculture.png';
import womenImage from '../../../assets/categories/indigenouswomen.png';
import educationImage from '../../../assets/categories/education.png';
import communicationImage from '../../../assets/categories/communication.png';
import humanRightsImage from '../../../assets/categories/humanrightsmechanism.png';
import selfDeterminationImage from '../../../assets/categories/selfdetermination.png';
import indigenousHealthImage from '../../../assets/categories/indigenoushealth.png';
import youthImage from '../../../assets/categories/youth.png';
import landRightsImage from '../../../assets/categories/landrights.png';

import RecentUpload from '../../components/RecentUpload';
import Icon from '../../../assets/icons';

// TODO: Change this from static to dynamic from Firebase.
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

// TODO: Change from static to dynamic from Firebase.
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
  const [currentDate, setCurrentDate] = useState(0);

  useEffect(() => {
    const hours = new Date().getHours();
    setCurrentDate(hours);
  }, []);

  function getGreeting() {
    if (currentDate < 12) {
      return 'Good morning!';
    }
    if (currentDate < 17) {
      return 'Good afternoon!';
    }
    return 'Good evening!';
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={[globalStyles.h2, styles.heading]}>{getGreeting()}</Text>
          {/* FIXME: onPress should navigate to settings screen. */}
          <Pressable
            style={{ padding: 8 }}
            onPress={() => navigation.navigate('Audio')}
          >
            <Icon type="settings" />
          </Pressable>
        </View>
        <Text style={[globalStyles.h4, styles.subheading]}>Recent Uploads</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          style={{ paddingTop: 8 }}
        >
          <RecentUpload
            title={response1.title}
            artist={response1.artist}
            image={response1.thumbnail}
            pressFunction={() => navigation.navigate('Audio')}
          />
          <RecentUpload
            title={response2.title}
            artist={response2.artist}
            image={response2.thumbnail}
            pressFunction={() => navigation.navigate('Audio')}
          />
          <RecentUpload
            title={response1.title}
            artist={response1.artist}
            image={response1.thumbnail}
            pressFunction={() => navigation.navigate('Audio')}
          />
          <View style={styles.seeAllContainer}>
            <Pressable onPress={() => navigation.navigate('Audio')}>
              <Text style={globalStyles.h4}>See all {'\n'}uploads</Text>
            </Pressable>
          </View>
        </ScrollView>
        <Text style={[globalStyles.h4, styles.subheading]}>All Categories</Text>
        {/* TODO: Change color from a string to importing color from global styles */}
        <View style={styles.cardsContainer}>
          {/* TODO: When changing text size, switch to 1 column when text is wrapping individual words */}
          <CategoryCard
            title="Climate Change & the Environment"
            pressFunction={() => navigation.navigate('Audio')}
            img={climateImage}
            backgroundColor="#5CAAB5"
          />
          <CategoryCard
            title="Communication"
            pressFunction={() => navigation.navigate('Audio')}
            img={communicationImage}
            backgroundColor="#8CB8CB"
          />
          <CategoryCard
            title="Language & Culture"
            pressFunction={() => navigation.navigate('Audio')}
            img={languageImage}
            backgroundColor="#FBBE47"
          />
          {/* TODO: Check for right color here. */}
          <CategoryCard
            title="Education"
            pressFunction={() => navigation.navigate('Audio')}
            img={educationImage}
            backgroundColor="#74944A"
          />
          <CategoryCard
            title="Land Rights"
            pressFunction={() => navigation.navigate('Audio')}
            img={landRightsImage}
            backgroundColor="#CC502F"
          />
          {/* TODO: Check for the right color for this card.  */}
          <CategoryCard
            title="Indigenous Women"
            pressFunction={() => navigation.navigate('Audio')}
            img={womenImage}
            backgroundColor="#A352BF"
          />
          <CategoryCard
            title="Indigenous Health"
            pressFunction={() => navigation.navigate('Audio')}
            img={indigenousHealthImage}
            backgroundColor="#74944A"
          />
          <CategoryCard
            title="Human Rights Mechanisms"
            pressFunction={() => navigation.navigate('Audio')}
            img={humanRightsImage}
            backgroundColor="#E09BCD"
          />
          <CategoryCard
            title="Self-Determination"
            pressFunction={() => navigation.navigate('Audio')}
            img={selfDeterminationImage}
            backgroundColor="#1E2778"
          />
          <CategoryCard
            title="Youth"
            pressFunction={() => navigation.navigate('Audio')}
            img={youthImage}
            backgroundColor="#A352BF"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
