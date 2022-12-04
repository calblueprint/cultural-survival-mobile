import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <ViewContainer>
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
        onPress={() => navigation.navigate("SignIn1")}
      />
    </ViewContainer>
  );
};

export default WelcomeScreen;
