import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Album } from '../../types';

export type AlbumProps = { album: Album };

const AlbumComponent = ({ album }: AlbumProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('AlbumScreen', { id: album.id });
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: album.imageUri }} style={styles.image} />
        <Text style={styles.text}>{album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 155,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 155,
    marginBottom: 10,
  },
  text: {
    color: 'grey',
  },
});

export default AlbumComponent;
