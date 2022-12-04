import React, { useState} from 'react';
import { StyleSheet, ViewComponent } from 'react-native';
import { View, Pressable, Text, Alert, Modal, TouchableHighlight, Image } from 'react-native';
import { FlipInEasyX } from 'react-native-reanimated';
import globalStyles from '../globalStyles';
import ViewContainer from './ViewContainer';



export const GrantCard = (props : any) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ViewContainer>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.innerModal}>
              <View>
                <Text style={styles.modalTitle}>{props.title}</Text>
              </View>
              <View>
                <Text style={styles.modalBodyText}>{props.amount}</Text>
              </View>
              <View>
                <Text style={styles.modalBodyText}>Due Date: {props.deadline}</Text>
              </View>
              <View>
                <Text style={styles.modalBodyText}>Elligible Countries: {props.countries}</Text>
              </View>
              <View>
                <Text style={styles.modalBodyText}>
                  {props.description}
                </Text>
              </View>
              <View style={styles.images}>
                <Image
                  source={require('../../assets/grantDummyImg.png')}
                />
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

      <TouchableHighlight underlayColor={'#942000'} onPress={() => setModalVisible(true)} style={styles.cardContainer}>
        <View>
          <Text style={styles.titleText}>{props.title}</Text>
          <Text style={styles.whiteText}> {props.amount}</Text>
          <Text style={styles.whiteText}> Due Date: {props.deadline} </Text>    
        </View>
    </TouchableHighlight>
    <Image
      source={require('../../assets/expand.svg')}/>

    </ViewContainer>


  );
};

const styles = StyleSheet.create({
  container: {
    height: 128,
    justifyContent: 'space-between'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#C94420',
    width: 330,
    height: 140,
    borderRadius: 13,
    justifyContent: 'space-between',
    marginBottom: '8%',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {width: 2, height: 4},
    display: 'flex'
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
    backgroundColor: "white",
    borderRadius: 13,
    width: 340,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#CC502F",
    justifyContent: 'center'
  },
  buttonClose: {
    backgroundColor: "#CC502F",
    width: '96%',
    justifyContent: 'center',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalTitle: {
    //fontFamily: "DMSans_700Bold",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    color: "black",
    marginLeft: '3%',
    marginBottom: '8%'
  },
  innerModal: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 19,
    width: '96%'
  },
  modalBackdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    height: '100%',
  },
  images: {
    margin: 6,
    display: 'flex',
    justifyContent: 'center'
  }
});
