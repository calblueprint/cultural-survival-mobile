import { StyleSheet, Text, View } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import Icon from "../../../assets/icons";

const SplashScreen = ({ navigation }: any) => {
	return (
		<ViewContainer>
			<Icon type="grants_icon" />
			<Text>This is a test screen!</Text>
		</ViewContainer>
	);
};

export default SplashScreen;
