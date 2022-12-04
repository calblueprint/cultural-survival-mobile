import { Text, View, TextInput, Pressable } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import { useState } from "react";
import BackButton from "../../components/BackButton";
import LabeledTextInput from "../../components/LabeledTextInput";

const SignIn2Screen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [users, setUsers] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  const handleGetUsers = async () => {};

  const handleBack = () => {
    navigation.navigate("SignIn1");
  };

  return (
    <ViewContainer>
      <BackButton handleFunction={() => handleBack()} />
      <View style={styles.container}>
        <Text style={globalStyles.h3}>Welcome Back!</Text>
        <Text style={globalStyles.h4}>Let's log in.</Text>
        <View style={styles.inputs}>
          <LabeledTextInput
            label="EMAIL:"
            placeholder="email@example.com"
            containerStyle={{ height: "25%" }}
          />
          <LabeledTextInput
            label="PASSWORD:"
            placeholder="password"
            containerStyle={{ height: "25%" }}
          />
          <Text style={globalStyles.body1}>Forgot password?</Text>
        </View>
        <RectButton
          text="Log in"
          buttonStyle={{
            marginTop: "5%",
            backgroundColor: "#CC502F",
            width: "100%",
            height: "10%",
          }}
          textStyle={{ color: "#FFF" }}
          onPress={() => handleLogin()}
        />
        <Text style={globalStyles.body1}>{users}</Text>
        <Text style={globalStyles.body1}>Haven't made your account yet?</Text>
        <Pressable onPress={() => navigation.navigate("Signup1")}>
          <Text style={[globalStyles.body1, styles.underlined]}>
            Sign up here.
          </Text>
        </Pressable>
      </View>
      <View style={styles.spacer} />
    </ViewContainer>
  );
};

export default SignIn2Screen;
