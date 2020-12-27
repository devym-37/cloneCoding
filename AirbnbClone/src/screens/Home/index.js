import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

Fontisto.loadFont();

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      {/* Search Bar */}
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate("Destination Search")}
      >
        <Fontisto name="search" size={25} color={"#f15454"} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        source={require("../../../assets/images/Airbnb_Bali_Bamboo_House.jpg")}
        style={styles.image}
      >
        {/* Title */}
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn("Btn Click")}
        >
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
        {/* Button */}
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
