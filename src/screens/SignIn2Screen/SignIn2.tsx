import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import { useState } from "react";

const SignIn2Screen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [users, setUsers] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  const handleGetUsers = async () => {};

  return (
    <ViewContainer>
      <Text style={globalStyles.h2}>Welcome Back!</Text>
      <Text style={globalStyles.h3}>Let's log in.</Text>
      <Text style={globalStyles.body1}>EMAIL:</Text>
      <TextInput
        placeholder="email@example.com"
        onChangeText={(email) => setEmail(email)}
      />
      <Text style={globalStyles.body1}>PASSWORD:</Text>
      <TextInput
        placeholder="password"
        onChangeText={(pass) => setPass(pass)}
      />
      <Text style={globalStyles.body1}>Forgot password?</Text>
      <RectButton
        text="Log in"
        buttonStyle={{ marginTop: "5%", backgroundColor: "#A8A8A8" }}
        textStyle={{ color: "#FFF" }}
        onPress={() => handleLogin()}
      />
      <RectButton
        text="Get All Users"
        buttonStyle={{ marginTop: "5%", backgroundColor: "#A8A8A8" }}
        textStyle={{ color: "#FFF" }}
        onPress={() => handleGetUsers()}
      />
      <Text style={globalStyles.body1}>{users}</Text>
      <Text style={globalStyles.body1}>Haven't made your account yet?</Text>
      <Pressable onPress={() => navigation.navigate("Signup1")}>
        <Text style={globalStyles.body1}>Sign up here.</Text>
      </Pressable>
    </ViewContainer>
  );
};

export default SignIn2Screen;
