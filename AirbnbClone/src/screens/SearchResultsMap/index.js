import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import CustomMarker from "../../components/CustomMarker";
import places from "../../../assets/data/feed";
import PostCarouselItem from "../../components/PostCarouselItem";

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapContainer}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {places.map((place, index) => {
          const { coordinate, totalPrice, newPrice, id } = place;
          return (
            <CustomMarker
              coordinate={coordinate}
              price={newPrice}
              isSelected={id === selectedPlaceId}
              onPress={() => setSelectedPlaceId(id)}
              key={index.toString()}
            />
          );
        })}
      </MapView>

      <View style={{ position: "absolute", bottom: 40 }}>
        <PostCarouselItem data={places[0]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  mapContainer: {
    width: "100%",
    height: "100%",
  },
});

export default SearchResultsMap;
