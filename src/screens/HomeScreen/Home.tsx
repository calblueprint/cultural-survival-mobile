import { Text, View, Image, ScrollView } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import CategoryCard from "../../components/CategoryCard";
import * as climateChangeImage from "../../../assets/climateChangeImage.png";

const HomeScreen = ({ navigation }: any) => {
  const climateImage = require("../../../assets/climateChangeImage.png");
  const languageImage = require("../../../assets/language.png");
  const womenImage = require("../../../assets/women.png");
  const educationImage = require("../../../assets/education.png");
  const communicationImage = require("../../../assets/communication.png");

  return (
    <ViewContainer>
      <ScrollView>
        <Text style={styles.paddingT}></Text>

        <Text style={styles.paddingL}>
          <Text style={globalStyles.h2}>Welcome to Cultural Survival.</Text>
        </Text>
        <Text style={styles.paddingL}>
          <Text style={globalStyles.h3}>Categories</Text>
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

        <Text style={globalStyles.h2}>{t("welcome")}</Text>
        <RectButton
          text="toggle"
          {...t("buttons.ok", { ns: namespaces.pages.hello })}
          onPress={() => handleClick(toggle(lang))}
        />
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
      </ScrollView>
    </ViewContainer>
  );
};

export default HomeScreen;
