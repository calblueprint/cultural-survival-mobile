import { Text, View, Image, ScrollView } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import CategoryCard from "../../components/CategoryCard";
import * as climateChangeImage from '../../../assets/climateChangeImage.png';
 

const stylio = {
    width: "100%",
    // height: "100%",
    // backgroundColor: "red",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop:"5%",

    };
    const paddingT = {
      paddingTop: "2%",

      };
    const paddingL = {
      paddingLeft: "2%",

      };





const HomeScreen = ({ navigation }: any) => {
  const climateImage =require('../../../assets/climateChangeImage.png')
  const languageImage =require('../../../assets/language.png')
  const womenImage =require('../../../assets/women.png')
  const educationImage =require('../../../assets/education.png')
  const communicationImage =require('../../../assets/communication.png')

  return (
    <ViewContainer>
      <ScrollView>
      <Text style={paddingT}></Text>

      <Text style={paddingL}><Text style={globalStyles.h2}>Welcome to Cultural Survival.</Text></Text>
      <Text style={paddingL}><Text style={globalStyles.h3}>Categories</Text></Text>
 
      <View style={stylio}>
        <CategoryCard 
        name1="Climate Change & the Environment"
        onPress1={() => navigation.navigate("Home")}
        img1={climateImage}/>
        <CategoryCard 
        name1="Communication"
        onPress1={() => navigation.navigate("Home")}
        img1={communicationImage}/>
        <CategoryCard 
        name1="Language & Culture"
        onPress1={() => navigation.navigate("Home")}
        img1={languageImage}/>
        <CategoryCard 
        name1="Education"
        onPress1={() => navigation.navigate("Home")}
        img1={educationImage}/>
        <CategoryCard 
        name1="Land Rights"
        onPress1={() => navigation.navigate("Home")}
        img1={educationImage}/>
        <CategoryCard 
        name1="Indeginous Women"
        onPress1={() => navigation.navigate("Home")}
        img1={womenImage}/>
      </View>

    
        


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
        onPress={() => navigation.navigate("Login1")}
      /> 
      </ScrollView>
    </ViewContainer>

  );
};

export default HomeScreen;
