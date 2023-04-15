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
    width: 358,
    height: 300,
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 4,
    // shadowColor: Colors.shadowDark,
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // shadowOffset: { width: 2, height: 4 },
    display: 'flex',
    padding: 5
  },
  innerCardContainer: {
    width: 348,
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
    flexWrap: 'wrap'
  },
  infoText: {
    color: Colors.textPrimary,
    margin: 8,
    rightMargin: 29,
    marginVertical: 8,
    textAlign: 'left',
    justifyContent: 'space-between',
    fontSize: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  iconInfoGroup: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 318,
    height: 170,
    borderRadius: 10
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 346,
    height: 180
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
        underlayColor={Colors.surfaceGreyClicked}
        onPress={onPress}
        style={styles.cardContainer} 
      >
        <View style={styles.innerCardContainer}>
          <Text style={[globalStyles.h3, styles.titleText]}>
            {grantObj.title}
          </Text>
          <View style={styles.imageContainer}>
            <Image source={grantPlaceholder} style={styles.image}/>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoContainer}>
              <Icon type='coins'/>
              <Text style={styles.infoText}>
                {`$${grantObj.amount.toString()}`}
              </Text>
            </View>
            <View style={styles.iconInfoGroup}>
              <Icon type='calendar'/>
              <Text style={styles.infoText}>
                Due Date: {new Date(grantObj.deadline).toLocaleDateString()}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
      <Icon type="expand" />
    </ViewContainer>
  );
}

export default GrantCard;
