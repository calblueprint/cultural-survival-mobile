import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import RectButton from '../../components/RectButton';
import globalStyles from '../../globalStyles';
import styles from './styles';
import CategoryCard from '../../components/CategoryCard';
import { RootStackScreenProps } from '../../types/navigation';

import climateImage from '../../../assets/climateChangeImage.png';
import languageImage from '../../../assets/language.png';
import womenImage from '../../../assets/women.png';
import educationImage from '../../../assets/education.png';
import communicationImage from '../../../assets/communication.png';

function HomeScreen({ navigation }: RootStackScreenProps<'Home'>) {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <ScrollView>
        <Text style={[globalStyles.h2, styles.heading]}>
          Welcome to Cultural Survival.
        </Text>
        <Text style={[globalStyles.h4, styles.subheading]}>
          Browse all categories
        </Text>
        {/* TODO: Change color from a string to importing color from global styles */}
        <View style={styles.container}>
          <CategoryCard
            name="Climate Change & the Environment"
            pressFunction={() => navigation.navigate('Audio')}
            img={climateImage}
            color="#8CB8CB"
          />
          <CategoryCard
            name="Communication"
            pressFunction={() => navigation.navigate('Grants')}
            img={communicationImage}
            color="#5CAAB5"
          />
          <CategoryCard
            name="Language & Culture"
            pressFunction={() => navigation.navigate('Home')}
            img={languageImage}
            color="#FBBE47"
          />
          <CategoryCard
            name="Education"
            pressFunction={() => navigation.navigate('Play')}
            img={educationImage}
            color="#74944A"
          />
          <CategoryCard
            name="Land Rights"
            pressFunction={() => navigation.navigate('Welcome')}
            img={educationImage}
            color="#CC502F"
          />
          {/* TODO home screen: Fix the image here, make sure not to have it cut off.  */}
          <CategoryCard
            name="Indigenous Women"
            pressFunction={() => navigation.navigate('Home')}
            img={womenImage}
            color="#A352BF"
          />
        </View>
      </ScrollView>
      <RectButton
        text="Navigate"
        buttonStyle={{
          margin: '5%',
          backgroundColor: '#253C85',
          alignSelf: 'center',
        }}
        textStyle={{ color: '#FFF' }}
        onPress={() => navigation.navigate('Welcome')}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
