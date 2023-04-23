import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';
import Icon from '../../assets/icons';
import Colors from '../styles/Colors';
import { Grant } from '../types/schema';
import globalStyles from '../globalStyles';
import grantPlaceholder from '../../assets/grantPlaceholder.png';

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    marginBottom: 28,
  },
  innerCardContainer: {
    backgroundColor: Colors.surfaceGrey,
    borderRadius: 10,
    shadowColor: Colors.shadowDark,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 4 },
    display: 'flex',
    padding: 20,
  },
  blackText: {
    color: Colors.textPrimary,
    margin: 16,
    marginVertical: 8,
    textAlign: 'left',
    justifyContent: 'space-between',
    fontSize: 15,
  },
  titleText: {
    alignItems: 'center',
    color: Colors.textPrimary,
    textAlign: 'left',
    fontSize: 22,
    flexWrap: 'wrap',
    // fontWeight: 'bold',
  },
  infoText: {
    color: Colors.textPrimary,
    margin: 8,
    rightMargin: 28,
    marginVertical: 8,
    textAlign: 'left',
    justifyContent: 'space-between',
    fontSize: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  iconInfoGroup: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  imageContainer: {
    width: '100%',
    height: 160,
    marginVertical: 12,
  },
});

type GrantCardProps = {
  grantObj: Grant;
  onPress?: () => void;
};

function GrantCard({ grantObj, onPress }: GrantCardProps) {
  return (
    <TouchableHighlight
      underlayColor={Colors.surfaceGreyClicked}
      onPress={onPress}
      style={styles.cardContainer}
    >
      <View style={styles.innerCardContainer}>
        <Text style={[styles.titleText]}>{grantObj.title}</Text>
        <View style={styles.imageContainer}>
          <Image
            source={grantPlaceholder}
            style={[styles.image]}
            resizeMode="contain"
          />
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.iconInfoGroup}>
            <Icon type="coins" />
            <Text style={styles.infoText}>
              {`$${grantObj.amount.toString()}`}
            </Text>
          </View>
          <View style={styles.iconInfoGroup}>
            <Icon type="calendar" />
            <Text style={styles.infoText}>
              Due Date: {new Date(grantObj.deadline).toLocaleDateString()}
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default GrantCard;
