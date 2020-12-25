import React from 'react';
import {View, FlatList} from 'react-native';

import styles from './styles';
import Post from '../../components/Post';
import feed from '../../../assets/data/feed';

const SearchResultsScreen = () => {
  return (
    <View>
      <FlatList data={feed} renderItem={(item) => <Post data={item} />} />
    </View>
  );
};

export default SearchResultsScreen;
