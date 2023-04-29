import {
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  Pressable,
  Linking,
} from 'react-native';
import Icon from '../../../assets/icons';
import { GrantsStackScreensProps } from '../../types/navigation';
import styles from './styles';
import RectButton from '../../components/RectButton';
import grantPlaceholder from '../../../assets/grantPlaceholder.png';

function GrantInfoScreen({
  route,
  navigation,
}: GrantsStackScreensProps<'GrantInfo'>) {
  const { grantObj } = route.params;
  const handlePress = async () => {
    try {
      await Linking.openURL(grantObj.share_link);
    } catch (e) {
      await Linking.openURL('https://www.culturalsurvival.org');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backArrow}>
          <Icon type="back_arrow" />
        </Pressable>

        <Text style={styles.titleText}>{grantObj.title}</Text>
        <View style={styles.imageContainer}>
          <Image source={grantPlaceholder} style={styles.image} />
        </View>

        <RectButton
          text="View Application"
          buttonStyle={styles.appButton}
          textStyle={{}}
          onPress={() => {
            handlePress();
          }}
        />

        <Text style={styles.infoFields}>
          <Text style={{ fontWeight: 'bold' }}>Amount: </Text>
          {`$${grantObj.amount.toString()}`}
        </Text>

        <Text style={styles.infoFields}>
          <Text style={{ fontWeight: 'bold' }}>Due Date: </Text>
          {new Date(grantObj.deadline).toLocaleDateString()}
        </Text>

        <Text style={styles.infoFields}>
          <Text style={{ fontWeight: 'bold' }}>Eligible Countries: </Text>
          {grantObj.countries.join(', ')}
        </Text>

        <Text style={styles.infoFields}>
          <Text style={{ fontWeight: 'bold' }}>Duration: </Text>
          {grantObj.duration}
        </Text>

        <Text style={styles.infoFields}>
          <Text style={{ fontWeight: 'bold' }}>Brief: </Text>
          {grantObj.description}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
export default GrantInfoScreen;
