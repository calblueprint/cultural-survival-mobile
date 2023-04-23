import { SafeAreaView, Text } from 'react-native';
import globalStyles from '../../globalStyles';
import { GrantsStackScreensProps } from '../../types/navigation';

function GrantInfoScreen({ route }: GrantsStackScreensProps<'GrantInfo'>) {
  const { grantObj } = route.params;
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.h2}>{grantObj.title}</Text>
      <Text>Amount: {`$${grantObj.amount.toString()}`}</Text>
      <Text>Eligible Countries: {grantObj.countries.join(', ')}</Text>
      <Text>Brief: {grantObj.description}</Text>
      <Text>Duration: {grantObj.duration}</Text>
      <Text>Deadline: {new Date(grantObj.deadline).toLocaleDateString()}</Text>
    </SafeAreaView>
  );
}
export default GrantInfoScreen;
