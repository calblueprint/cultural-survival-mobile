import { Pressable, StyleSheet, Text, View } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import Icon from "../../../assets/icons";

const Login3Screen = ({ navigation }: any) => {
  const handleLogin = () => {
    navigation.navigate("Login1");
  };
  const handleBack = () => {
    navigation.navigate("Home");
  };
  return (
    <ViewContainer>
      <Pressable onPress={() => handleBack()}>
        <Icon type="chevron_left" />
      </Pressable>
      <Text style={globalStyles.h3}>You're all done!</Text>
      <Text style={globalStyles.body1}>
        Check your email for a confirmation code from Cultural Survival.
      </Text>
      <RectButton
        text="Log in"
        buttonStyle={{ marginTop: "5%", backgroundColor: "#A8A8A8" }}
        textStyle={{ color: "#FFF" }}
        onPress={() => handleLogin()}
      />
    </ViewContainer>
  );
};

export default Login3Screen;
