import RectButton from '../../components/RectButton';
import ViewContainer from '../../components/ViewContainer';

function WelcomeScreen({ navigation }) {
  return (
    <ViewContainer>
      <RectButton
        text="Home"
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
    </ViewContainer>
  );
}

export default WelcomeScreen;
