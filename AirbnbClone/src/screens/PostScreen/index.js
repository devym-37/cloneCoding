import React from "react";
import { View, Text } from "react-native";
import DetailedPost from "../../components/DetailedPost";
import { useRoute } from "@react-navigation/native";

import places from "../../../assets/data/feed";

const PostScreen = () => {
  const route = useRoute();

  const post = places.find((place) => place.id === route.params.postId);

  return (
    <View style={{ backgroundColor: "white" }}>
      <DetailedPost data={post} />
    </View>
  );
};

export default PostScreen;
