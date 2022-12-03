import { StyleSheet, Text, View } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import Realm from "realm";
import SplashScreen from "../SplashScreen/Splash";

const SignIn1Screen = ({ navigation }: any) => {
  const handleLogin = () => {
    navigation.navigate("SignIn2");
  };
  const handleSignup = () => {
    navigation.navigate("Signup1");
  };

  return (
    <ViewContainer>
      <View>
        <Text style={[globalStyles.h3, styles.center]}>
          Welcome to Cultural Survival.
        </Text>
        <Text style={[globalStyles.body1, styles.red, styles.center]}>
          Advancing Indigenous Peoples' Rights & Cultures Worldwide.
        </Text>
      </View>
      {/* TODO: Potentially extract styles into the button component */}
      <RectButton
        text="Login"
        buttonStyle={{ marginTop: "5%", backgroundColor: "#CC502F" }}
        textStyle={{ color: "#FFF" }}
        onPress={() => handleLogin()}
      />
      <RectButton
        text="Sign Up"
        buttonStyle={{
          marginTop: "5%",
          borderColor: "#CC502F",
          borderWidth: 1,
          backgroundColor: "#FFF",
        }}
        textStyle={{ color: "#000", fontWeight: "400" }}
        onPress={() => handleSignup()}
      />
    </ViewContainer>
  );
};

export default SignIn1Screen;
