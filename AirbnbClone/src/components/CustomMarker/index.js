import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";

const CustomMarker = (props) => {
  const { coordinate, price, onPress, isSelected } = props;

  const markerSelectedStyle = useMemo(() => {
    if (isSelected) return [styles.container, { backgroundColor: "black" }];
    return styles.container;
  }, [isSelected]);

  const textSelectedStyle = useMemo(() => {
    if (isSelected) return [styles.text, { color: "white" }];
    return styles.text;
  }, [isSelected]);

  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View style={markerSelectedStyle}>
        <Text style={textSelectedStyle}>${price}</Text>
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 20,
    borderColor: "grey",
    borderWidth: 1,
  },
  text: {
    fontWeight: "bold",
  },
});

export default CustomMarker;
