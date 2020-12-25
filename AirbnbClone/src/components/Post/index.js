import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

const Post = ({params}) => (
  <View style={styles.container}>
    {/* Images */}
    <Image
      style={styles.image}
      source={{
        uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
      }}
    />
    {/* Bad Bedroom */}
    <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
    {/* Type & Description */}
    <Text style={styles.description} numberOfLines={2}>
      Lorem Description
    </Text>
    {/* Old price & new price */}
    <Text style={styles.prices}>
      <Text style={styles.oldPrice}>$35 </Text>
      <Text style={styles.newPrice}> $30 </Text>/ night
    </Text>
    {/* Total price */}
    <Text style={styles.totalPrice}>$230 total</Text>
  </View>
);

export default Post;
