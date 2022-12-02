import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import Icon from "../../../assets/icons";

const Signup3Screen = ({ navigation }: any) => {
  const handleSignup = () => {
    navigation.navigate("Login2");
  };
  const handleBack = () => {
    navigation.navigate("Signup2");
  };
  return (
    <ViewContainer>
      <Pressable onPress={() => handleBack()}>
        <Icon type="chevron_left" />
      </Pressable>
      <Text style={globalStyles.h2}>Your Language:</Text>
      <Text style={globalStyles.body1}>LANGUAGE:</Text>
      <TextInput placeholder="Choose your language:" />
      <RectButton
        text="Continue"
        buttonStyle={{ marginTop: "5%", backgroundColor: "#A8A8A8" }}
        textStyle={{ color: "#FFF" }}
        onPress={() => handleSignup()}
      />
    </ViewContainer>
  );
};

export default Signup3Screen;
