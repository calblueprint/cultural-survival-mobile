import { Text, View, ScrollView, Modal } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import { GrantCard } from "../../components/GrantCard";

const GrantsScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.grantsText}>
        <Text style={globalStyles.h1}>Grants Available</Text>
      </View>


      <ViewContainer>
        <GrantCard/>
        <GrantCard/>
        <GrantCard/>
        <GrantCard/>
        <GrantCard/>
        <GrantCard/>
        <GrantCard/>
        <GrantCard/>
  
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
