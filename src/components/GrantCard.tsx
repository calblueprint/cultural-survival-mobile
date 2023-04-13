import { StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';
import Icon from '../../assets/icons';
import Colors from '../styles/Colors';
import ViewContainer from './ViewContainer';
import { Grant } from '../types/schema';
import globalStyles from '../globalStyles';
import grantPlaceholder from '../../assets/grantPlaceholder.png'


const styles = StyleSheet.create({

  cardContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: Colors.surfaceGrey,
    width: 352,
    height: 300,
    borderRadius: 12,
    justifyContent: 'center',
    marginVertical: 4,
    shadowColor: Colors.shadowDark,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 4 },
    display: 'flex',
    padding: 5
  },
  innerCardContainer: {
    width: 342,
    height: 260,
    justifyContent: 'space-between',

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
    marginLeft: 16,
    marginRight: 16,
    textAlign: 'left',
    fontSize: 17,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 340,
    height: 180
  },
  image: {
    width: 302,
    height: 166,
    borderRadius: 12
  },
  imageInfoGroup: {

  },
});
// const placeholderImage = require('../../assets/grantPlaceholderImg.png');

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
        <View style={styles.innerCardContainer}>
          <Text style={[globalStyles.h2, styles.titleText]}>
            {grantObj.title}
          </Text>
          <View style={styles.imageContainer}>
            <Image source={grantPlaceholder} style={styles.image}/>
          </View>
          <View style={styles.infoContainer}>
            <Icon type='coins'/>
            <Text style={styles.blackText}>
              {`$${grantObj.amount.toString()}`}
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
