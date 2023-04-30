import { Text, View, ScrollView, SafeAreaView, Pressable } from 'react-native';
import globalStyles from '../../globalStyles';
import Icon from '../../../assets/icons';
import { SearchStackScreensProps } from '../../types/navigation';
import styles from './styles';

function AudioInfoScreen({ navigation }: SearchStackScreensProps<'AudioInfo'>) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon type="back_arrow" />
        </Pressable>
        <Text style={[globalStyles.h2, styles.titleText]}>
          Green Colonization, An Interview With Maja Kristine Jama
        </Text>
        <Text style={styles.infoFields}>September 7, 2022, 45 minutes</Text>
        <View style={styles.iconsContainer}>
          <View style={styles.iconSubContainer}>
            <Icon type="share" />
            <Icon type="bookmark" />
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate('Play');
            }}
          >
            <Icon type="play_button_small" />
          </Pressable>
        </View>
        <Text style={styles.infoFields}>
          <Text style={{ fontWeight: 'bold' }}>Theme: </Text>
          Climate Change & Environment
        </Text>
        <Text style={styles.infoFields}>
          <Text style={{ fontWeight: 'bold' }}>Country: </Text>
          Sweden, Finland
        </Text>
        <Text style={styles.infoFields}>
          <Text style={{ fontWeight: 'bold' }}>Format: </Text>
          Interviews
        </Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
export default AudioInfoScreen;
