import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Album } from '../../types';

export type AlbumHeaderProps = {
  album: Album;
};

const AlbumHeader = ({
  album: { id, imageUri, name, by, numberOfLikes },
}: AlbumHeaderProps) => (
  <View style={styles.container}>
    <Image source={{ uri: imageUri }} style={styles.image} />
    <Text style={styles.name}>{name}</Text>
    <View style={styles.creatorContainer}>
      <Text style={styles.creator}>By {by}</Text>
      <Text style={styles.likes}>{numberOfLikes} Likes</Text>
    </View>
    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>PLAY</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    margin: 10,
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  creatorContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  creator: {
    color: 'lightgray',
    margin: 5,
    fontSize: 20,
  },
  likes: {
    color: 'lightgray',
    margin: 5,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#1CD05D',
    height: 60,
    width: 175,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default AlbumHeader;
