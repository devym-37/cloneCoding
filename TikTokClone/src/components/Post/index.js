import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Video from 'react-native-video';

const Post = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri:
            'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
        }}
        style={styles.video}
        resizeMode={'cover'}
        onError={(e) => console.log('error', e)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Post;
