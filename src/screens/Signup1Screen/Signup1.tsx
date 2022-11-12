import { StyleSheet, Text, TextInput, View } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";

const Signup1Screen = ({ navigation }: any) => {
  const handleSignup = () => {
    navigation.navigate("Signup2");
  };
  return (
    <ViewContainer>
      <Text style={globalStyles.h2}>Sign up here.</Text>
      <Text style={globalStyles.h4}>Let's create an account.</Text>

      <Text style={globalStyles.body1}>EMAIL:</Text>
      <TextInput placeholder="email@example.com" />
      <Text style={globalStyles.body1}>USERNAME:</Text>
      <TextInput placeholder="username" />
      <Text style={globalStyles.body1}>PASSWORD:</Text>
      <TextInput placeholder="password" />
      <Text style={globalStyles.body1}>Choose a strong password.</Text>
      <RectButton
        text="Sign Up"
        buttonStyle={{ marginTop: "5%", backgroundColor: "#A8A8A8" }}
        textStyle={{ color: "#FFF" }}
        onPress={() => handleSignup()}
      />
    </ViewContainer>
  );
};

export default Signup1Screen;
