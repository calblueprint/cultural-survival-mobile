import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import { useState } from "react";
import Icon from "../../../assets/icons";

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
      <Pressable onPress={() => handleBack()} style={styles.back}>
        <Icon type="chevron_left" />
        <Text style={globalStyles.body1}>Back</Text>
      </Pressable>
      <View style={styles.container}>
        <Text style={globalStyles.h3}>Welcome Back!</Text>
        <Text style={globalStyles.h4}>Let's log in.</Text>
        <View style={styles.inputs}>
          <Text style={globalStyles.body1}>EMAIL:</Text>
          <TextInput
            style={styles.input}
            placeholder="email@example.com"
            onChangeText={(email) => setEmail(email)}
          />
          <Text style={globalStyles.body1}>PASSWORD:</Text>
          <TextInput
            style={styles.input}
            placeholder="password"
            onChangeText={(pass) => setPass(pass)}
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
    </ViewContainer>
  );
};

export default SignIn2Screen;
