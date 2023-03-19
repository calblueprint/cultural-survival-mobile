
import { Text, View } from 'react-native';
import globalStyles from '../../globalStyles';

export default function GrantInfo({ route, navigation}) {
    const { grantObj } = route.params;
    return (
        <View>
            <Text style={globalStyles.h2}>Grants Available</Text>
            <Text>{grantObj.title}</Text>
            <Text>{grantObj.amount.toString()}</Text>
            <Text>{grantObj.countries.join(", ")}</Text>
            <Text>{grantObj.description}</Text>
            <Text>{grantObj.duration}</Text>
            <Text>{grantObj.deadline.toString()}</Text>
        </View>


    )    
}
