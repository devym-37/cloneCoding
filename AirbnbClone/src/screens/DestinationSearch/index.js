import React, { useState } from "react";
import { View, TextInput } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import SuggestionRow from "./SuggestionRow";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import APIKEY from "../../../APIKEY";

Entypo.loadFont();

const DestinationSearch = () => {
  const [inputText, setInputText] = useState("");

  const navigation = useNavigation();
  console.log("APIKEY", typeof APIKEY);
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate("Guests");
        }}
        styles={{
          textInput: styles.textInput,
        }}
        fetchDetails
        query={{
          key: APIKEY,
          language: "en",
          types: "(cities)",
        }}
        predefinedPlacesAlwaysVisible={false}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearch;
