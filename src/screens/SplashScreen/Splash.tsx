import { Text} from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import ViewContainer from "../../components/ViewContainer";
import Icon from "../../../assets/icons";


type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

function SplashScreen({ navigation }: Props) {
	return (
		<ViewContainer>
			<Icon type="grants_icon" />
			<Text>This is a test screen!</Text>
		</ViewContainer>
	);
}


export default SplashScreen;
