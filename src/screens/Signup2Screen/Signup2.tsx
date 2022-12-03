import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import Icon from "../../../assets/icons";

const SignUp2Screen = ({ navigation }: any) => {
  const handleSignUp = () => {
    navigation.navigate("Signup3");
  };
  const handleBack = () => {
    navigation.navigate("Signup1");
  };
  return (
    <ViewContainer>
      <Pressable onPress={() => handleBack()}>
        <Icon type="chevron_left" />
      </Pressable>
      <Text style={globalStyles.h2}>Your Name:</Text>
      <Text style={globalStyles.body1}>NAME:</Text>
      <TextInput placeholder="Enter your name:" />
      <RectButton
        text="Continue"
        buttonStyle={{ marginTop: "5%", backgroundColor: "#A8A8A8" }}
        textStyle={{ color: "#FFF" }}
        onPress={() => handleSignUp()}
      />
    </ViewContainer>
  );
};

export default SignUp2Screen;
