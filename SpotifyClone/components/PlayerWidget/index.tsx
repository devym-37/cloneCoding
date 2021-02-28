import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Sound } from 'expo-av/build/Audio/Sound';
import { Audio } from 'expo-av';

const song = {
  id: '2',
  uri:
    'https://not-just-trash.s3-eu-west-1.amazonaws.com/WhatsApp+Audio+2020-09-21+at+15.14.25.mp4',
  imageUri:
    'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
  title: 'Lorem Ipsum',
  artist: 'Artist 2',
};

const PlayerWidget = () => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);

  const onPlaybackStatusUpdate = (status) => {
    console.log('status', status);
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Sound.createAsync(
      { uri: song.uri },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );

    setSound(newSound);
  };

  useEffect(() => {
    // play the song
    playCurrentSong();
  }, []);

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }

    return (position / duration) * 100;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${getProgress()}%` }]} />
      <View style={styles.row}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>
          <View style={styles.iconContainer}>
            <AntDesign name="hearto" size={30} color={'white'} />
            <TouchableOpacity onPress={onPlayPausePress}>
              <FontAwesome
                name={isPlaying ? 'pause' : 'play'}
                size={30}
                color={'white'}
              />
            </TouchableOpacity>
          </View>
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
    borderWidth: 2,
    borderColor: 'black',
  },
  row: {
    flexDirection: 'row',
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
  progress: {
    height: 10,
    backgroundColor: '#bcbcbc',
  },
});

export default PlayerWidget;
