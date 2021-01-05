import React from "react";
import { View, FlatList } from "react-native";
import MapView from "react-native-maps";

const SearchResultsMap = () => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      />
    </View>
  );
};

export default SearchResultsMap;
