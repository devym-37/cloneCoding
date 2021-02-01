import React from "react";
import { Text, View, Image, useWindowDimensions } from "react-native";
import styles from "./styles";

const Post = ({ data }) => {
  const { title, image, bed, bedroom, oldPrice, newPrice, totalPrice } = data;
  const width = useWindowDimensions().width;

  return (
    <View style={(styles.container, { width: width - 60 })}>
      <View style={styles.innerContainer}>
        {/* Images */}
        <Image
          style={styles.image}
          source={{
            uri: `${image}`,
          }}
        />
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          {/* Bad Bedroom */}
          <Text style={styles.bedrooms}>{`${bed} bed ${bedroom} bedroom`}</Text>
          {/* Type & Description */}
          <Text style={styles.description} numberOfLines={2}>
            {title}
          </Text>
          {/* Old price & new price */}
          <Text style={styles.prices}>
            <Text style={styles.newPrice}>{`$${newPrice} `}</Text>/ night
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
