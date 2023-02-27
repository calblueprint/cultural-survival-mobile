import { useEffect, useState } from "react";
import { View, Text, TextInput, Button} from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAuth } from "../../../providers/AuthProvider";
import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp, signIn } = useAuth();

  useEffect(() => {
    // If there is a user logged in, go to the Projects page.
    if (user != null) {
      navigation.navigate("Home");
    }
  }, [user, navigation]);

  // The onPressSignIn method calls AuthProvider.signIn with the
  // email/password in state.
  const onPressSignIn = async () => {
    try {
      await signIn(email, password);
    } catch (error) {
      //   const errorMessage = `Failed to sign in: ${error.message}`;
      //   console.error(errorMessage);
      //   Alert.alert(errorMessage);
    }
  };

  // The onPressSignUp method calls AuthProvider.signUp with the
  // email/password in state and then signs in.
  const onPressSignUp = async () => {
    try {
      await signUp(email, password);
      signIn(email, password);
    } catch (error) {
      //   const errorMessage = `Failed to sign up: ${error.message}`;
      //   console.error(errorMessage);
      //   Alert.alert(errorMessage);
    }
  };

  return (
    <View>
      <Text>Sign Up or Sign In:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="email"
          style={styles.inputStyle}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="password"
          style={styles.inputStyle}
          secureTextEntry
        />
      </View>
      <Button onPress={onPressSignIn} title="Sign In" />
      <Button onPress={onPressSignUp} title="Sign Up" />
    </View>
  );
}

export default LoginScreen;
