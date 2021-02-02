import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import styles from "./styles";

const DetailedPost = ({ data }) => {
  const {
    title,
    image,
    bed,
    bedroom,
    oldPrice,
    newPrice,
    totalPrice,
    description,
  } = data;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Images */}
        <Image
          style={styles.image}
          source={{
            uri: `${image}`,
          }}
        />
        {/* Bad Bedroom */}
        <Text style={styles.bedrooms}>{`${bed} bed ${bedroom} bedroom`}</Text>
        {/* Type & Description */}
        <Text style={styles.description} numberOfLines={2}>
          {title}
        </Text>
        {/* Old price & new price */}
        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>{`$${oldPrice} `}</Text>
          <Text style={styles.newPrice}>{`$${newPrice} `}</Text>/ night
        </Text>
        {/* Total price */}
        <Text style={styles.totalPrice}>{`$${totalPrice} total`}</Text>

        <Text style={styles.longDescription}>{description}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailedPost;
