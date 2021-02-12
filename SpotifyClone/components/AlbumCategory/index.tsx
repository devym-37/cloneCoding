import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Album } from '../../types';
import AlbumComponent from '../Album';

export type AlbumCategoryProps = {
  title: string;
  albums: [Album];
};

const AlbumCategory = ({ title, albums }: AlbumCategoryProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      data={albums}
      renderItem={({ item }) => <AlbumComponent album={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default AlbumCategory;
