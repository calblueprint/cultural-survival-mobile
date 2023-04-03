import { Text, View } from 'react-native';
import globalStyles from '../../globalStyles';
import { RootStackScreenProps } from '../../types/navigation';

export default function GrantInfo({
  route,
}: RootStackScreenProps<'GrantInfo'>) {
  const { grantObj } = route.params;
  return (
    <View>
      <Text style={globalStyles.h2}>{grantObj.title}</Text>
      <Text>{grantObj.title}</Text>
      <Text>{`$${grantObj.amount.toString()}`}</Text>
      <Text>{grantObj.countries.join(', ')}</Text>
      <Text>{grantObj.description}</Text>
      <Text>{grantObj.duration}</Text>
      <Text>{new Date(grantObj.deadline).toLocaleDateString()}</Text>
    </View>
  );
}
