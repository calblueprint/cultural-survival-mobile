import React from 'react';
import ViewContainer from '../../components/ViewContainer';
import RectButton from '../../components/RectButton';

function WelcomeScreen({ navigation }) {
  return (
    <ViewContainer>
      <RectButton
        text="Sign Out"
        buttonStyle={{ marginTop: '5%', backgroundColor: '#253C85' }}
        textStyle={{ color: '#FFF' }}
        onPress={() => navigation.navigate('Home')}
      />
      <RectButton
        text="Audio"
        buttonStyle={{ marginTop: '5%', backgroundColor: '#253C85' }}
        textStyle={{ color: '#FFF' }}
        onPress={() => navigation.navigate('Audio')}
      />
      <RectButton
        text="Grants"
        buttonStyle={{ marginTop: '5%', backgroundColor: '#253C85' }}
        textStyle={{ color: '#FFF' }}
        onPress={() => navigation.navigate('Grants')}
      />
      <RectButton
        text="Sign In"
        buttonStyle={{ marginTop: '5%', backgroundColor: '#253C85' }}
        textStyle={{ color: '#FFF' }}
        onPress={() => navigation.navigate('SignIn1')}
      />
    </ViewContainer>
  );
}

export default WelcomeScreen;
