import { Text, View, ScrollView, Image } from 'react-native';
import Icon from '../../../assets/icons';
import globalStyles from '../../globalStyles';
import { GrantsStackScreensProps } from '../../types/navigation';
import styles from './styles';
import RectButton from '../../components/RectButton';
import grantPlaceholder from '../../../assets/grantPlaceholder.png';

function GrantInfoScreen({ route }: GrantsStackScreensProps<'GrantInfo'>) {
  const { grantObj } = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          {/* might have to handle font size for longer titles */}
          <Text style={styles.titleText}>{grantObj.title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={grantPlaceholder} style={styles.image} />
        </View>
        <RectButton
          text="View Application"
          buttonStyle={styles.appButton}
          textStyle={{}}
          onPress={() => 0}
        />
        <View style={styles.infoContainer}>
          <View style={styles.infoContainer}>
            <Icon type="coins" />
            <Text style={styles.infoText}>
              Amount: {`$${grantObj.amount.toString()}`}
            </Text>
          </View>
          <View style={styles.iconInfoGroup}>
            <Icon type="calendar" />
            <Text style={styles.infoText}>
              Due Date: {new Date(grantObj.deadline).toLocaleDateString()}
            </Text>
          </View>
        </View>

        <Text>Eligible Countries: {grantObj.countries.join(', ')}</Text>
        <Text>Brief: {grantObj.description}</Text>
        <Text>Duration: {grantObj.duration}</Text>
      </View>
    </ScrollView>
  );
}
export default GrantInfoScreen;
