import { StyleSheet, Text, View } from "react-native";
// import {useAuthentication} from '../../utils/hooks/useAuthentication';
import { Button } from "react-native-elements";
// import { getAuth, signOut } from "firebase/auth";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import { useAuth } from "../../utils/providers/AuthProviders";

// const auth = getAuth();

const HomeScreen = ({ navigation }: any) => {
  const { user } = useAuth();

  return (
    <ViewContainer>
      <Text style={globalStyles.h2}>Welcome</Text>

      <RectButton
        text="Sign Out"
        buttonStyle={{ marginTop: "5%", backgroundColor: "#253C85" }}
        textStyle={{ color: "#FFF" }}
        onPress={() => navigation.navigate("Home")}
      />
      <RectButton
        text="Audio"
        buttonStyle={{ marginTop: "5%", backgroundColor: "#253C85" }}
        textStyle={{ color: "#FFF" }}
        onPress={() => navigation.navigate("Audio")}
      />
      <RectButton
        text="Grants"
        buttonStyle={{ marginTop: "5%", backgroundColor: "#253C85" }}
        textStyle={{ color: "#FFF" }}
        onPress={() => navigation.navigate("Grants")}
      />
      <RectButton
        text="Sign In"
        buttonStyle={{ marginTop: "5%", backgroundColor: "#253C85" }}
        textStyle={{ color: "#FFF" }}
        onPress={() => navigation.navigate("Signin")}
      />
    </ViewContainer>
  );
};

export default HomeScreen;
