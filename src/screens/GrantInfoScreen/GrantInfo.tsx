import { Text, View, ScrollView, Image } from 'react-native';
import Icon from '../../../assets/icons';
import { GrantsStackScreensProps } from '../../types/navigation';
import styles from './styles';
import RectButton from '../../components/RectButton';
import grantPlaceholder from '../../../assets/grantPlaceholder.png';

function GrantInfoScreen({ route }: GrantsStackScreensProps<'GrantInfo'>) {
  const { grantObj } = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.backArrow}>
        <Icon type="back_arrow" />
      </View>
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
        <View style={styles.backgroundContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.infoContainer}>
              <Icon type="coins" />
              <Text style={styles.infoText}>
                <Text style={{ fontWeight: 'bold' }}>Amount: </Text>
                {`$${grantObj.amount.toString()}`}
              </Text>
            </View>
            <View style={styles.iconInfoGroup}>
              <Icon type="calendar" />
              <Text style={styles.infoText}>
                <Text style={{ fontWeight: 'bold' }}>Due Date: </Text>
                {new Date(grantObj.deadline).toLocaleDateString()}
              </Text>
            </View>
          </View>
          <View style={styles.infoContainer2}>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Eligible Countries: </Text>
              {grantObj.countries.join(', ')}
            </Text>
          </View>
          <View style={styles.infoContainer2}>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Duration: </Text>
              {grantObj.duration}
            </Text>
          </View>
          <View style={styles.infoContainer2}>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Brief: </Text>
              {grantObj.description}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default GrantInfoScreen;
