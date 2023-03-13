import RectButton from '../../components/RectButton';
import ViewContainer from '../../components/ViewContainer';
import Colors from '../../styles/Colors';
import { RootStackScreenProps } from '../../types/navigation';

function WelcomeScreen({ navigation }: RootStackScreenProps<'Welcome'>) {
  return (
    <ViewContainer>
      <RectButton
        text="Home"
        buttonStyle={{
          marginTop: '5%',
          backgroundColor: Colors.bluePrimary,
        }}
        textStyle={{ color: Colors.textWhite }}
        onPress={() => navigation.navigate('Home')}
      />
      <RectButton
        text="Audio"
        buttonStyle={{
          marginTop: '5%',
          backgroundColor: Colors.bluePrimary,
        }}
        textStyle={{ color: Colors.textWhite }}
        onPress={() => navigation.navigate('Audio')}
      />
      <RectButton
        text="Grants"
        buttonStyle={{
          marginTop: '5%',
          backgroundColor: Colors.bluePrimary,
        }}
        textStyle={{ color: Colors.textWhite }}
        onPress={() => navigation.navigate('Grants')}
      />
      <RectButton
        text="Queries Demo"
        buttonStyle={{
          marginTop: '5%',
          backgroundColor: Colors.bluePrimary,
        }}
        textStyle={{ color: Colors.textWhite }}
        onPress={() => navigation.navigate('QueriesDemo')}
      />
    </ViewContainer>
  );
}

export default WelcomeScreen;
