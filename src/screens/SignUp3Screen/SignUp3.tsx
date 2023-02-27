import React, { useState, useEffect } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import ViewContainer from '../../components/ViewContainer';
import RectButton from '../../components/RectButton';
import globalStyles from '../../globalStyles';
import styles from './styles';
import Icon from '../../../assets/icons';
import BackButton from '../../components/BackButton';
import LabeledTextInput from '../../components/LabeledTextInput';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SignUp3Screen({ navigation }: any) {
  function handleSignUp() {
    navigation.navigate('SignUp4');
  }
  function handleBack() {
    navigation.navigate('SignUp2');
  }
  return (
    <ViewContainer>
      <BackButton handleFunction={() => handleBack()} />
      <Text style={globalStyles.h2}>Your Language:</Text>
      <View style={styles.container}>
        <LabeledTextInput
          label="LANGUAGE:"
          placeholder="Choose your language:"
          containerStyle={{ height: '30%' }}
        />
        <RectButton
          text="Next"
          buttonStyle={{
            marginTop: '5%',
            backgroundColor: '#CC502F',
            width: '100%',
            height: '30%',
          }}
          textStyle={{ color: '#FFF' }}
          onPress={() => handleSignUp()}
        />
      </View>
    </ViewContainer>
  );
}

export default SignUp3Screen;
