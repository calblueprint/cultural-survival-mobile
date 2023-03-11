import RectButton from '../../components/RectButton';
import ViewContainer from '../../components/ViewContainer';
import { RootStackScreenProps } from '../../types/navigation';

function WelcomeScreen({ navigation }: RootStackScreenProps<'Welcome'>) {
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
      <RectButton
        text="Queries Demo"
        buttonStyle={{ marginTop: '5%', backgroundColor: '#253C85' }}
        textStyle={{ color: '#FFF' }}
        onPress={() => navigation.navigate('QueriesDemo')}
      />
    </ViewContainer>
  );
}

export default WelcomeScreen;
