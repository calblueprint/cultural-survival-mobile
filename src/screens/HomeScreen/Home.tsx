import { Text, View, Image, ScrollView, SafeAreaView } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import CategoryCard from "../../components/CategoryCard";

const HomeScreen = ({ navigation }: any) => {
  const climateImage = require("../../../assets/climateChangeImage.png");
  const languageImage = require("../../../assets/language.png");
  const womenImage = require("../../../assets/women.png");
  const educationImage = require("../../../assets/education.png");
  const communicationImage = require("../../../assets/communication.png");

  return (
    <SafeAreaView style={styles.outerContainer}>
      <ScrollView>
        <Text style={styles.padding}>
          <Text style={globalStyles.h2}>Welcome to Cultural Survival.</Text>
        </Text>
        <Text style={styles.padding2}>
          <Text style={globalStyles.h4}>Categories</Text>
        </Text>

        <View style={styles.container}>
          <CategoryCard
            name1="Climate Change & the Environment"
            onPress1={() => navigation.navigate("Home")}
            img1={climateImage}
          />
          <CategoryCard
            name1="Communication"
            onPress1={() => navigation.navigate("Home")}
            img1={communicationImage}
          />
          <CategoryCard
            name1="Language & Culture"
            onPress1={() => navigation.navigate("Home")}
            img1={languageImage}
          />
          <CategoryCard
            name1="Education"
            onPress1={() => navigation.navigate("Home")}
            img1={educationImage}
          />
          <CategoryCard
            name1="Land Rights"
            onPress1={() => navigation.navigate("Home")}
            img1={educationImage}
          />
          <CategoryCard
            name1="Indeginous Women"
            onPress1={() => navigation.navigate("Home")}
            img1={womenImage}
          />
        </View>
      </ScrollView>

      <RectButton
        text="Navigate"
        buttonStyle={{
          margin: "5%",
          backgroundColor: "#253C85",
          alignSelf: "center",
        }}
        textStyle={{ color: "#FFF" }}
        onPress={() => navigation.navigate("Welcome")}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
