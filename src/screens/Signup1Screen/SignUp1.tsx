import { Text, TextInput, View } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import LabeledTextInput from "../../components/LabeledTextInput";

const SignUp1Screen = ({ navigation }: any) => {
  const handleSignup = () => {
    navigation.navigate("SignUp2");
  };
  return (
    <ViewContainer>
      <Text style={globalStyles.h2}>Sign up here.</Text>
      <Text style={globalStyles.h4}>Let's create an account.</Text>
      <View style={styles.inputs}>
        <LabeledTextInput
          label="EMAIL:"
          placeholder="email@example.com"
          containerStyle={{ height: "15%" }}
        />
        <LabeledTextInput
          label="USERNAME:"
          placeholder="Username"
          containerStyle={{ height: "15%" }}
        />
        <LabeledTextInput
          label="PASSWORD:"
          placeholder="Password"
          containerStyle={{ height: "15%" }}
        />
        <Text style={globalStyles.body1}>Choose a strong password.</Text>
        <RectButton
          text="Sign Up"
          buttonStyle={{
            marginTop: "5%",
            backgroundColor: "#CC502F",
            width: "100%",
            height: "15%",
          }}
          textStyle={{ color: "#FFF" }}
          onPress={() => handleSignup()}
        />
      </View>
    </ViewContainer>
  );
};

export default SignUp1Screen;
