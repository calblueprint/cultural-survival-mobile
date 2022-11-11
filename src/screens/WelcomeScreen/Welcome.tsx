import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <ViewContainer>
      <Text style={globalStyles.h2}>Welcome screen!</Text>

      <ViewContainer>
        <RectButton
          text="Sign in"
          buttonStyle={{ marginTop: "5%", backgroundColor: "#253C85" }}
          textStyle={{ color: "#FFF" }}
          onPress={() => navigation.navigate("Sign In")}
        />
        <RectButton
          text="Sign up"
          buttonStyle={{ marginTop: "5%", backgroundColor: "#253C85" }}
          textStyle={{ color: "#FFF" }}
          onPress={() => navigation.navigate("Sign Up")}
        />
      </ViewContainer>
    </ViewContainer>
  );
}

export default WelcomeScreen;