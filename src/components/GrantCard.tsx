import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from '../../assets/icons';
import Colors from '../styles/Colors';
import ViewContainer from './ViewContainer';
import { Grant } from '../types/schema';
import globalStyles from '../globalStyles';

const styles = StyleSheet.create({

  cardContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: Colors.surfaceGrey,
    width: 350,
    height: 270,
    borderRadius: 12,
    justifyContent: 'space-between',
    marginVertical: 4,
    shadowColor: Colors.shadowDark,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 4 },
    display: 'flex',
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
    color: Colors.textPrimary,
    margin: 16,
    marginBottom: 8,
    textAlign: 'left',
    fontSize: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'center',

  }
});

type GrantCardProps = {
  grantObj: Grant;
  onPress?: () => void;
};

function GrantCard({ grantObj, onPress }: GrantCardProps) {
  return (
    <ViewContainer>
      <TouchableHighlight
        // TODO: Fix coloring, add to default colors
        underlayColor={Colors.surfaceGreyClicked}
        onPress={onPress}
        style={styles.cardContainer} // also need to update this to reflect new design changes (create new branch for new frontend!!)
      >
        <View>
          <Text style={[globalStyles.h2, styles.titleText]}>
            {grantObj.title}
          </Text>
          <View style={styles.infoContainer}>
            <Icon type='coins'/>
            <Text style={styles.blackText}>
              Amount: {`$${grantObj.amount.toString()}`}
            </Text>
            <Icon type='calendar'/>
            <Text style={styles.blackText}>
              Due Date: {new Date(grantObj.deadline).toLocaleDateString()}{' '}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      <Icon type="expand" />
    </ViewContainer>
  );
}

export default GrantCard;
