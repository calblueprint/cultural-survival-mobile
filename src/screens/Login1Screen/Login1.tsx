import { StyleSheet, Text, View } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";

const Login1Screen = ({ navigation }: any) => {
  const handleLogin = () => {
    navigation.navigate("Login2");
  };
  const handleSignup = () => {
    navigation.navigate("Signup1");
  };
  return (
    <ViewContainer>
      <View>
        <Text style={globalStyles.h2}>Welcome to Cultural Survival.</Text>
        <Text style={globalStyles.body1}>
          Advancing Indigenous Peoples' Rights & Cultures Worldwide.
        </Text>
      </View>
      <RectButton
        text="Login"
        buttonStyle={{ marginTop: "5%", backgroundColor: "#A8A8A8" }}
        textStyle={{ color: "#FFF" }}
        onPress={() => handleLogin()}
      />
      <RectButton
        text="Sign Up"
        buttonStyle={{ marginTop: "5%", backgroundColor: "#A8A8A8" }}
        textStyle={{ color: "#FFF" }}
        onPress={() => handleSignup()}
      />
    </ViewContainer>
  );
};

export default Login1Screen;
