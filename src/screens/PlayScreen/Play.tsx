import { Text, View, ScrollView, Image } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import RectButton from "../../components/RectButton";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import Card from "../../components/Card"
import PlayBar from "../../icons/play_bar.svg"

const PlayScreen = ({ navigation}: any) => {

  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>Green Colonization: An Interview with Maja Kristine Jama</Text>
      <Image
        // source={{ uri: previewImage }}
        style={{
          height: 336,
          width: 336,
          backgroundColor: '#D9D9D9',
          borderRadius: 9.5,
          marginBottom: "8%",
          
        }}
      />
    <Text style={styles.title_text}>Green Colonization: An Interview with Maja Kristine Jama</Text>
    <Text style={styles.author_text}>Sheldon Ferris</Text>
    </View>
    
  );
};

export default PlayScreen;
