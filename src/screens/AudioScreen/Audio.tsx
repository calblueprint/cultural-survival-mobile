import { Text, View } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";

import { useTranslation } from "react-i18next";
import { namespaces } from "../../i18n/i18n.constants";
import "../../i18n/i18n";
import React, { useState, useEffect } from "react";
{
  "compilerOptions"; {
    "allowJs"; true
  }
}
var lang = 'en'
const AudioScreen = ({ navigation }: any) => {
  const { i18n, t } = useTranslation(namespaces.pages.audio);

  function handleClick(lang: string) {
    i18n.changeLanguage(lang);
  }
  function toggle(lg: string) {
    lang = (lg == 'en' ? 'es' : 'en')
    return lang
  }
  return (
    <ViewContainer>
      <Text style={globalStyles.h2}>{t("audio_feed")}</Text>
      <RectButton 
      text="toggle"
      {...t("buttons.ok", { ns: namespaces.pages.audio })}
      onPress={() => handleClick(toggle(lang))}
      />
      <RectButton
        text="Back"
        buttonStyle={{ marginTop: "5%", backgroundColor: "#253C85" }}
        textStyle={{ color: "#FFF" }}
        onPress={() => navigation.navigate("Home")}
      />
    </ViewContainer>
  );
};

export default AudioScreen;
