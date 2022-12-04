import { Text, View, ScrollView, Modal } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import { GrantCard } from "../../components/GrantCard";

import { useTranslation } from "react-i18next";
import { namespaces } from "../../i18n/i18n.constants";
import "../../i18n/i18n";
import React, { useState, useEffect } from "react";
{
  ("compilerOptions");
  {
    ("allowJs");
    true;
  }
}
var lang = "en";
const GrantsScreen = ({ navigation }: any) => {
  const { i18n, t } = useTranslation(namespaces.pages.grants);
  function handleClick(lang: string) {
    i18n.changeLanguage(lang);
  }
  function toggle(lg: string) {
    lang = lg == "en" ? "es" : "en";
    return lang;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.grantsText}>
        <Text style={globalStyles.h1}>Grants Available</Text>
      </View>

      <ViewContainer>
        <GrantCard />
        <GrantCard />
        <GrantCard />
        <GrantCard />
        <GrantCard />
        <GrantCard />
        <GrantCard />
        <GrantCard />

        {/* <RectButton
          text="Back"
          buttonStyle={{ marginTop: "5%", backgroundColor: "#253C85" }}
          textStyle={{ color: "#FFF" }}
          onPress={() => navigation.navigate("Home")}
        /> */}
      </ViewContainer>
    </ScrollView>
  );
};

export default GrantsScreen;
