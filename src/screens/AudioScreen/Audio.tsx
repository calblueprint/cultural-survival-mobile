import { Text, View, ScrollView, StyleSheet} from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import AudioCard from "../../components/AudioCard"
import React, { useState, useEffect } from "react";
{
  "compilerOptions"; {
    "allowJs"; true
  }
}
var lang = 'en'
const AudioScreen = ({ navigation }: any) => {

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
        <AudioCard name = "The Threatened Cultures of the Danube Delta" author="Tristan Taylor and Natalie Berthram" onPress={() => navigation.navigate("Play")}> </AudioCard>
        <AudioCard name = "The Threatened Cultures of the Danube Delta" author="Tristan Taylor and Natalie Berthram"> </AudioCard>
        <AudioCard name = "Threatened Cultures of the Danube Delta" author="Tristan Taylor and Natalie Berthram"> </AudioCard>
        <AudioCard name = "Threatened Cultures of the Danube Delta" author="Tristan Taylor and Natalie Berthram"> </AudioCard>
        <AudioCard name = "Threatened Cultures of the Danube Delta" author="Tristan Taylor and Natalie Berthram"> </AudioCard>
        <AudioCard name = "Threatened Cultures of the Danube Delta" author="Tristan Taylor and Natalie Berthram"> </AudioCard>
        <AudioCard name = "Threatened Cultures of the Danube Delta" author="Tristan Taylor and Natalie Berthram"> </AudioCard>
        <AudioCard name = "Threatened Cultures of the Danube Delta" author="Tristan Taylor and Natalie Berthram"> </AudioCard>
      </ScrollView>
      
  
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
