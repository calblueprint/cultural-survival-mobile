import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import Icon from "../../../assets/icons";

const Signup2Screen = ({ navigation }: any) => {
  const handleSignup = () => {
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
        onPress={() => handleSignup()}
      />
    </ViewContainer>
  );
};

export default Signup2Screen;
