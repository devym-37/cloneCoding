import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const song = {
  id: '2',
  imageUri:
    'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
  title: 'Lorem Ipsum',
  artist: 'Artist 2',
};
const test = 'test';

const PlayerWidget = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
        <View style={styles.iconContainer}>
          <AntDesign name="hearto" size={30} color={'white'} />
          <FontAwesome name="play" size={30} color={'white'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 79,
    width: '100%',
    backgroundColor: '#131313',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    margin: 10,
  },
  artist: {
    fontSize: 18,
    color: 'lightgray',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-around',
  },
});

export default PlayerWidget;
