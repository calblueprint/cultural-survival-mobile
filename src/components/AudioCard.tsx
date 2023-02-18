import React from 'react';
import { arrayOf, func, node, object, string } from 'prop-types';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewPropTypes,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    // paddingLeft: 5,
    paddingBottom: 30,
    width: 350
  },
  title: {
    fontSize: 15,
    marginLeft: 15,

    // fontWeight: 'bold',
  },
  meta: {
    marginTop: 10,
    marginLeft: 15,
    fontSize: 11.33,
    color: '#333',
    flexWrap: 'wrap'
  },
});

function AudioCard({ onPress, children, style }) {
  return (
    <Pressable style={[styles.card, style]} onPress={onPress}>
      {children}
    </Pressable>
  );
}
AudioCard.propTypes = {
  onPress: func,
  children: node,
  style: ViewPropTypes.style,
};

export default function SearchAudioCard({ name, onPress, author, previewImage }) {
  return (
    <AudioCard
      style={{
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'left',
      }}
      onPress={onPress}
    >
          <Image
        source={{ uri: previewImage }}
        style={{
          height: 79,
          width: 79,
          backgroundColor: '#CC502F',
          borderRadius: 9.5,
        }}
      />

      <View style={{width:250}}>
        <Text style={styles.title} >{name}</Text>
        <Text style={styles.meta}>
          {author}
        </Text>
      </View>
    </AudioCard>
  );
}
SearchAudioCard.propTypes = {
  name: string,
  // eslint-disable-next-line react/forbid-prop-types
  author: string,
  onPress: func,
  previewImage: string,
};