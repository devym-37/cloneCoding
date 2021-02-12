import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Song } from '../../types';

export type SongListItemProps = {
  song: Song;
};

const SongListItem = ({
  song: { id, title, imageUri, artist },
}: SongListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 15,
  },
  rightContainer: {
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  image: {
    width: 75,
    height: 75,
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
  artist: {
    fontSize: 20,
    color: 'lightgray',
  },
});

export default SongListItem;
