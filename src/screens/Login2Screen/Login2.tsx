import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";

const Login2Screen = ({ navigation }: any) => {
  const handleLogin = () => {
    navigation.navigate("Home");
  };
  return (
    <ViewContainer>
      <Text style={globalStyles.h2}>Welcome Back!</Text>
      <Text style={globalStyles.h3}>Let's log in.</Text>
      <Text style={globalStyles.body1}>EMAIL:</Text>
      <TextInput placeholder="email@example.com" />
      <Text style={globalStyles.body1}>PASSWORD:</Text>
      <TextInput placeholder="password" />
      <Text style={globalStyles.body1}>Forgot password?</Text>
      <RectButton
        text="Log in"
        buttonStyle={{ marginTop: "5%", backgroundColor: "#A8A8A8" }}
        textStyle={{ color: "#FFF" }}
        onPress={() => handleLogin()}
      />
      <Text style={globalStyles.body1}>Haven't made your account yet?</Text>
      <Pressable onPress={() => navigation.navigate("Signup1")}>
        <Text style={globalStyles.body1}>Sign up here.</Text>
      </Pressable>
    </ViewContainer>
  );
};

export default Login2Screen;
