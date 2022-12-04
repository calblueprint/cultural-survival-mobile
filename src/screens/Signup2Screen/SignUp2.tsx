import { Pressable, Text, TextInput, View } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import Icon from "../../../assets/icons";
import BackButton from "../../components/BackButton";
import LabeledTextInput from "../../components/LabeledTextInput";

const SignUp2Screen = ({ navigation }: any) => {
  const handleSignUp = () => {
    navigation.navigate("SignUp3");
  };
  const handleBack = () => {
    navigation.navigate("SignUp1");
  };
  return (
    <ViewContainer>
      <BackButton handleFunction={() => handleBack()} />
      <Text style={globalStyles.h2}>Your Name:</Text>
      <View style={styles.container}>
        <LabeledTextInput
          label="NAME:"
          placeholder="Enter your name:"
          containerStyle={{ height: "30%" }}
        />
        <RectButton
          text="Next"
          buttonStyle={{
            marginTop: "5%",
            backgroundColor: "#CC502F",
            width: "100%",
            height: "30%",
          }}
          textStyle={{ color: "#FFF" }}
          onPress={() => handleSignUp()}
        />
      </View>
    </ViewContainer>
  );
};

export default SignUp2Screen;
