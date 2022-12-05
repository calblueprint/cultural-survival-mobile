import { StyleSheet, Text, View, Image } from "react-native";
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
    navigation.navigate("SignUp1");
  };

  return (
    <ViewContainer>
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.image}
          />
          <Text style={[globalStyles.h3, styles.center, styles.welcomeText]}>
            Welcome to Cultural Survival.
          </Text>
          <Text
            style={[
              globalStyles.body1,
              styles.red,
              styles.center,
              styles.description,
            ]}
          >
            Advancing Indigenous Peoples' Rights & Cultures Worldwide.
          </Text>
        </View>
        {/* TODO: Potentially extract styles into the button component */}
        <View style={styles.buttons}>
          <RectButton
            text="Log In"
            buttonStyle={{
              marginTop: "5%",
              backgroundColor: "#CC502F",
              width: "80%",
              height: "30%",
            }}
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
              width: "80%",
              height: "30%",
            }}
            textStyle={{ color: "#000" }}
            onPress={() => handleSignup()}
          />
        </View>
      </View>
    </ViewContainer>
  );
};

export default SignIn1Screen;
