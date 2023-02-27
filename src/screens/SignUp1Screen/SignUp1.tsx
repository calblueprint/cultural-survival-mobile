import { Text, View } from 'react-native';
import ViewContainer from '../../components/ViewContainer';
import RectButton from '../../components/RectButton';
import { RootStackScreenProps } from '../../types/navigation';
import globalStyles from '../../globalStyles';
import styles from './styles';
import LabeledTextInput from '../../components/LabeledTextInput';
import { useAuth } from '../../../providers/AuthProvider';

function SignUp1Screen({ navigation }: RootStackScreenProps<'SignUp1'>) {
  const handleSignup = () => {
    navigation.navigate('SignUp2');
  };

  const { signUp } = useAuth();

  return (
    <ViewContainer>
      <Text style={globalStyles.h2}>Sign up here.</Text>
      <Text style={globalStyles.h4}>Let&aposs create an account.</Text>
      <View style={styles.inputs}>
        <LabeledTextInput
          label="EMAIL:"
          placeholder="email@example.com"
          containerStyle={{ height: '15%' }}
        />
        <LabeledTextInput
          label="USERNAME:"
          placeholder="Username"
          containerStyle={{ height: '15%' }}
        />
        <LabeledTextInput
          label="PASSWORD:"
          placeholder="Password"
          containerStyle={{ height: '15%' }}
        />
        <Text style={globalStyles.body1}>Choose a strong password.</Text>
        <RectButton
          text="Sign Up"
          buttonStyle={{
            marginTop: '5%',
            backgroundColor: '#CC502F',
            width: '100%',
            height: '15%',
          }}
          textStyle={{ color: '#FFF' }}
          onPress={() => handleSignup()}
        />
        {/* Testing queries, signup for email password */}
        <RectButton
          text="Sign Up"
          buttonStyle={{
            marginTop: '5%',
            backgroundColor: '#CC502F',
            width: '100%',
            height: '15%',
          }}
          textStyle={{ color: '#FFF' }}
          onPress={async () => {
            try {
              await signUp('asdfg@asdf.asdf', 'asdfgh');
            } catch (e) {
              console.error(e);
            }
          }}
        />
      </View>
    </ViewContainer>
  );
};

export default SignUp1Screen;
