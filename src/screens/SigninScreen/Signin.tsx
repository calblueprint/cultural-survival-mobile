import { StyleSheet, Text, View } from "react-native";
//import { useAuthentication } from "../../utils/hooks/useAuthentication";
import { Button } from "react-native-elements";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import { useAuth } from "../../utils/providers/AuthProviders";

//const auth = getAuth();

const SigninScreen = ({ navigation }: any) => {
  const { user } = useAuth();

  return (
    <ViewContainer>
      <Text style={globalStyles.h2}>Sign in</Text>
      <RectButton
        text="Back"
        buttonStyle={{ marginTop: "5%", backgroundColor: "#253C85" }}
        textStyle={{ color: "#FFF" }}
        onPress={() => navigation.navigate("Home")}
      />
    </ViewContainer>
  );
};

export default SigninScreen;
