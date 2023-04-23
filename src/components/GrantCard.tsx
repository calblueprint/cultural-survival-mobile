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
    backgroundColor: Colors.redPrimary,
    width: 350,
    height: 140,
    borderRadius: 12,
    justifyContent: 'space-between',
    marginVertical: 4,
    shadowColor: Colors.shadowDark,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 4 },
    display: 'flex',
  },
  whiteText: {
    color: Colors.textWhite,
    margin: 16,
    marginVertical: 8,
    textAlign: 'left',
    justifyContent: 'space-between',
    fontSize: 15,
  },
  // modalBodyText: {
  //   color: Colors.textPrimary,
  //   margin: 8,
  //   marginLeft: 16,
  //   textAlign: 'left',
  //   justifyContent: 'space-between',
  //   fontSize: 15,
  // },
  titleText: {
    color: Colors.textWhite,
    margin: 16,
    marginBottom: 8,
    textAlign: 'left',
    fontSize: 20,
  },
  // closeButtonText: {
  //   color: Colors.textWhite,
  //   margin: 8,
  //   marginLeft: 16,
  //   textAlign: 'center',
  //   justifyContent: 'space-between',
  //   fontSize: 15,
  // },
  // modalView: {
  //   margin: 20,
  //   backgroundColor: Colors.surfaceWhite,
  //   borderRadius: 13,
  //   width: 340,
  //   padding: 30,
  //   shadowColor: Colors.shadowDark,
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
  // button: {
  //   borderRadius: 5,
  //   padding: 10,
  //   elevation: 2,
  // },
  // buttonClose: {
  //   backgroundColor: Colors.redPrimary,
  //   width: '96%',
  //   justifyContent: 'center',
  // },
  // modalTitle: {
  //   fontSize: 22,
  //   fontWeight: '400',
  //   textAlign: 'left',
  //   color: Colors.textPrimary,
  //   marginLeft: '3%',
  //   marginBottom: '8%',
  // },
  // innerModal: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   marginBottom: 19,
  //   width: '96%',
  // },
  // images: {
  //   margin: 6,
  //   display: 'flex',
  //   justifyContent: 'center',
  // },
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
        underlayColor="#942000"
        onPress={onPress}
        style={styles.cardContainer} // also need to update this to reflect new design changes (create new branch for new frontend!!)
      >
        <View>
          <Text style={[globalStyles.h2, styles.titleText]}>
            {grantObj.title}
          </Text>
          <Text style={styles.whiteText}>
            {`$${grantObj.amount.toString()}`}
          </Text>
          <Text style={styles.whiteText}>
            Due Date: {new Date(grantObj.deadline).toLocaleDateString()}{' '}
          </Text>
        </View>
      </TouchableHighlight>
      <Icon type="expand" />
    </ViewContainer>
  );
}

export default GrantCard;
