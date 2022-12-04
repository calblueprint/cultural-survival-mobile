import { Text, View, ScrollView, StyleSheet} from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import Card from "../../components/Card"

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
<<<<<<< HEAD
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
=======

  return (
    <View style={styles.view}>
      <Text style={{
        fontSize: 24,
        marginBottom: 22,
        textAlign: 'left',
        fontWeight: "500",
        textAlign: "left",
        color: "#525454"}}>Recent Search History</Text>
      <ScrollView
      horizontal = {false}
      showsHorizontalScrollIndicator = {false}
      bounces = {false}
      >
        <Card name = "The Threatened Cultures of the Danube Delta" author="Tristan Taylor and Natalie Berthram" onPress={() => navigation.navigate("Play")}> </Card>
        <Card name = "The Threatened Cultures of the Danube Delta" author="Tristan Taylor and Natalie Berthram"> </Card>
        <Card name = "Threatened Cultures of the Danube Delta" author="Tristan Taylor and Natalie Berthram"> </Card>
        <Card name = "Threatened Cultures of the Danube Delta" author="Tristan Taylor and Natalie Berthram"> </Card>
        <Card name = "Threatened Cultures of the Danube Delta" author="Tristan Taylor and Natalie Berthram"> </Card>
        <Card name = "Threatened Cultures of the Danube Delta" author="Tristan Taylor and Natalie Berthram"> </Card>
        <Card name = "Threatened Cultures of the Danube Delta" author="Tristan Taylor and Natalie Berthram"> </Card>
        <Card name = "Threatened Cultures of the Danube Delta" author="Tristan Taylor and Natalie Berthram"> </Card>
      </ScrollView>
      
  
>>>>>>> 699c1e5 (building out audio frontend)
      <RectButton
        text="Back"
        buttonStyle={{ marginTop: "5%", backgroundColor: "#253C85", marginBottom: "8%", justifyContent: "flex-end"}}
        textStyle={{ color: "#FFF" }}
        onPress={() => navigation.navigate("Home")}
      />
    
    </View>
  );
};

export default AudioScreen;
