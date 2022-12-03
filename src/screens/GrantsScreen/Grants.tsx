import { Text, View } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import React, {useEffect, useState} from 'react';
import { useGrants } from "../../../providers/GrantsProvider";
import { GrantsProvider } from "../../../providers/GrantsProvider";

const GrantsScreen = ({ navigation }: any) => {
  // const [grants, setGrants] = useState([]);
  const { grants, createGrant, deleteGrant, closeRealm } = useGrants();

  useEffect(() => {
    createGrant(
      10, 
      ["country1"],
      new Date(),
      "descriptionTest",
      "durationTest",
      "urlTest",
      "titleTest", 
      );


  }, [])

  return (
    <GrantsProvider>
      <ViewContainer>
        <Text style={globalStyles.h2}>Grants Feed</Text>
        <RectButton
          text="Back"
          buttonStyle={{ marginTop: "5%", backgroundColor: "#253C85" }}
          textStyle={{ color: "#FFF" }}
          onPress={() => navigation.navigate("Home")}
        />
      </ViewContainer>

    </GrantsProvider>

  );
};

export default GrantsScreen;
