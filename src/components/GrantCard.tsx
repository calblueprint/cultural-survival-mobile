import { useState } from 'react';
import {
  Alert,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Icon from '../../assets/icons';
import Colors from '../styles/Colors';
import ViewContainer from './ViewContainer';

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
    backgroundColor: Colors.redPrimary,
    width: 330,
    height: 140,
    borderRadius: 13,
    justifyContent: 'space-between',
    marginBottom: '8%',
    shadowColor: Colors.shadowDark,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 4 },
    display: 'flex',
  },
  whiteText: {
    color: Colors.textWhite,
    margin: '2%',
    marginLeft: '4%',
    textAlign: 'left',
    justifyContent: 'space-between',
    fontSize: 15,
  },
  modalBodyText: {
    color: Colors.textPrimary,
    margin: '2%',
    marginLeft: '4%',
    textAlign: 'left',
    justifyContent: 'space-between',
    fontSize: 15,
  },
  titleText: {
    color: Colors.textWhite,
    margin: '3%',
    marginTop: '6%',
    textAlign: 'left',
    fontSize: 15,
  },
  closeButtonText: {
    color: Colors.textWhite,
    margin: '2%',
    marginLeft: '4%',
    textAlign: 'center',
    justifyContent: 'space-between',
    fontSize: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.surfaceWhite,
    borderRadius: 13,
    width: 340,
    padding: 30,
    shadowColor: Colors.shadowDark,
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
    backgroundColor: Colors.redPrimary,
    width: '96%',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'left',
    color: Colors.textPrimary,
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
  title: string;
  description: string;
  amount: string;
  deadline: string;
  countries: string;
};

function GrantCard({
  title,
  description,
  amount,
  deadline,
  countries,
}: GrantCardProps) {
  const [modalVisible, setModalVisible] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  const placeholderImage = require('../../assets/grantPlaceholderImg.png');

  return (
    <ViewContainer>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.innerModal}>
              <View>
                <Text style={styles.modalTitle}>{title}</Text>
              </View>
              <View>
                <Text style={styles.modalBodyText}>{amount}</Text>
              </View>
              <View>
                <Text style={styles.modalBodyText}>Due Date: {deadline}</Text>
              </View>
              <View>
                <Text style={styles.modalBodyText}>
                  Elligible Countries: {countries}
                </Text>
              </View>
              <View>
                <Text style={styles.modalBodyText}>{description}</Text>
              </View>
              <View style={styles.images}>
                <Image source={placeholderImage} />
              </View>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.closeButtonText}>View Application</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableHighlight
        underlayColor={Colors.redPrimary}
        onPress={() => setModalVisible(true)}
        style={styles.cardContainer}
      >
        <View>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.whiteText}> {amount}</Text>
          <Text style={styles.whiteText}> Due Date: {deadline} </Text>
        </View>
      </TouchableHighlight>
      <Icon type="expand" />
    </ViewContainer>
  );
}

export default GrantCard;
