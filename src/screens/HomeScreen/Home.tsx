import { Text, View, ScrollView, SafeAreaView, Button } from 'react-native';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import LanguageContext from '../../LanguageContext';
import globalStyles from '../../globalStyles';
import styles from './styles';
import CategoryCard from '../../components/CategoryCard';
import { HomeStackScreenProps } from '../../types/navigation';
import climateImage from '../../../assets/climateChangeImage.png';
import languageImage from '../../../assets/language.png';
import womenImage from '../../../assets/women.png';
import educationImage from '../../../assets/education.png';
import communicationImage from '../../../assets/communication.png';
import { namespaces } from '../../i18n/i18n.constants';

function HomeScreen({ navigation }: HomeStackScreenProps<'Home'>) {
  const { language, setLanguage } = useContext(LanguageContext);
  const { i18n, t } = useTranslation(namespaces.pages.hello);

  if (i18n.language !== language) {
    i18n.changeLanguage(language);
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <Button
          title="Settings"
          onPress={() => navigation.navigate('Settings')}
        />
        <Text style={[globalStyles.h2, styles.heading]}>{t('welcome')}</Text>
        <Text style={[globalStyles.h4, styles.subheading]}>{t('browse')}</Text>
        {/* TODO: Change color from a string to importing color from global styles */}
        <View style={styles.cardsContainer}>
          {/* TODO: When changing text size, switch to 1 column when text is wrapping individual words */}
          <CategoryCard
            title="Climate Change & the Environment"
            pressFunction={() => navigation.navigate('Home')}
            img={climateImage}
            backgroundColor="#8CB8CB"
          />
          <CategoryCard
            title="Communication"
            pressFunction={() => navigation.navigate('Home')}
            img={communicationImage}
            backgroundColor="#5CAAB5"
          />
          <CategoryCard
            title="Language & Culture"
            pressFunction={() => navigation.navigate('Home')}
            img={languageImage}
            backgroundColor="#FBBE47"
          />
          <CategoryCard
            title="Education"
            pressFunction={() => navigation.navigate('Home')}
            img={educationImage}
            backgroundColor="#74944A"
          />
          <CategoryCard
            title="Land Rights"
            pressFunction={() => navigation.navigate('Home')}
            img={educationImage}
            backgroundColor="#CC502F"
          />
          {/* TODO home screen: Fix the image here, make sure not to have it cut off.  */}
          <CategoryCard
            title="Indigenous Women"
            pressFunction={() => navigation.navigate('Home')}
            img={womenImage}
            backgroundColor="#A352BF"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
