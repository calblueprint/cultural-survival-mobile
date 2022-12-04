import { Pressable, StyleSheet, Text, View } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import BackButton from "../../components/BackButton";

const SignUp4Screen = ({ navigation }: any) => {
  const handleLogin = () => {
    navigation.navigate("SignIn2");
  };
  const handleBack = () => {
    navigation.navigate("Home");
  };
  return (
    <ViewContainer>
      <BackButton handleFunction={() => handleBack()} />
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={globalStyles.h3}>You're all done!</Text>
          <Text style={[globalStyles.body1, styles.description]}>
            Check your email for a confirmation code from Cultural Survival.
          </Text>
        </View>
        {/* TODO: Replace this by somehow importing text style of h4.*/}
        <RectButton
          text="Log in"
          buttonStyle={{
            marginTop: "5%",
            backgroundColor: "#CC502F",
            width: "100%",
            height: "30%",
          }}
          textStyle={{
            color: "#FFF",
            fontFamily: "DMSans-Regular",
            fontSize: 20,
            fontWeight: "500",
          }}
          onPress={() => handleLogin()}
        />
      </View>
    </ViewContainer>
  );
};

export default SignUp4Screen;
