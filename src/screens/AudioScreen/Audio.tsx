import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import Card from '../../components/Card';
import RectButton from '../../components/RectButton';
import ViewContainer from '../../components/ViewContainer';
import globalStyles from '../../globalStyles';
import '../../i18n/i18n';
import { namespaces } from '../../i18n/i18n.constants';
import { RootStackScreenProps } from '../../types/navigation';
import styles from './styles';

let lang = 'en';

function AudioScreen({ navigation }: RootStackScreenProps<'Audio'>) {
  const { i18n, t } = useTranslation(namespaces.pages.audio);

  function handleClick(newLang: string) {
    i18n.changeLanguage(newLang);
  }
  function toggle(lg: string) {
    lang = lg === 'en' ? 'es' : 'en';
    return lang;
  }
  return (
    <ViewContainer>
      <Text style={globalStyles.h2}>{t('audio_feed')}</Text>
      <RectButton
        text={t('buttons.ok', { ns: namespaces.pages.audio })}
        onPress={() => handleClick(toggle(lang))}
        textStyle={{}}
        buttonStyle={{}}
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
        <ScrollView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <Card
            name="The Threatened Cultures of the Danube Delta"
            author="Tristan Taylor and Natalie Berthram"
            onPress={() => navigation.navigate('Play')}
          />
          <Card
            name="The Threatened Cultures of the Danube Delta"
            author="Tristan Taylor and Natalie Berthram"
          />
          <Card
            name="Threatened Cultures of the Danube Delta"
            author="Tristan Taylor and Natalie Berthram"
          />
          <Card
            name="Threatened Cultures of the Danube Delta"
            author="Tristan Taylor and Natalie Berthram"
          />
          <Card
            name="Threatened Cultures of the Danube Delta"
            author="Tristan Taylor and Natalie Berthram"
          />
          <Card
            name="Threatened Cultures of the Danube Delta"
            author="Tristan Taylor and Natalie Berthram"
          />
          <Card
            name="Threatened Cultures of the Danube Delta"
            author="Tristan Taylor and Natalie Berthram"
          />
          <Card
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
      </View>
    </ViewContainer>
  );
}

export default AudioScreen;
