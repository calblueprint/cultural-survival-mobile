import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from '../../assets/icons';
import ViewContainer from './ViewContainer';
import { Grant } from '../types/schema';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#CC502F',
    width: 330,
    height: 140,
    borderRadius: 13,
    justifyContent: 'space-between',
    marginBottom: '8%',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 4 },
    display: 'flex',
  },
  whiteText: {
    color: 'white',
    margin: '2%',
    marginLeft: '4%',
    textAlign: 'left',
    justifyContent: 'space-between',
    fontSize: 15,
  },
  modalBodyText: {
    color: '#171717',
    margin: '2%',
    marginLeft: '4%',
    textAlign: 'left',
    justifyContent: 'space-between',
    fontSize: 15,
  },
  titleText: {
    color: 'white',
    margin: '3%',
    marginTop: '6%',
    textAlign: 'left',
    fontSize: 15,
  },
  closeButtonText: {
    color: 'white',
    margin: '2%',
    marginLeft: '4%',
    textAlign: 'center',
    justifyContent: 'space-between',
    fontSize: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 13,
    width: 340,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#CC502F',
    width: '96%',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'left',
    color: 'black',
    marginLeft: '3%',
    marginBottom: '8%',
  },
  innerModal: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 19,
    width: '96%',
  },
  images: {
    margin: 6,
    display: 'flex',
    justifyContent: 'center',
  },
});

type GrantCardProps = {
  grantObj: Grant;
  onPress?: () => void;
};

function GrantCard({ grantObj, onPress }: GrantCardProps) {
  return (
    <ViewContainer>
      <TouchableHighlight
        underlayColor="#942000"
        onPress={onPress}
        style={styles.cardContainer} // also need to update this to reflect new design changes (create new branch for new frontend!!)
      >
        <View>
          <Text style={styles.titleText}>{grantObj.title}</Text>
          <Text style={styles.whiteText}>
            {' '}
            {`$${grantObj.amount.toString()}`}
          </Text>
          <Text style={styles.whiteText}>
            {' '}
            Due Date: {new Date(grantObj.deadline).toLocaleDateString()}{' '}
          </Text>
        </View>
      </TouchableHighlight>
      <Icon type="expand" />
    </ViewContainer>
  );
}

export default GrantCard;
