import React, { useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";

import styles from "./styles";
import searchResults from "../../../assets/data/search";

const DestinationSearch = () => {
  const [inputText, setInputText] = useState("");

  return (
    <View style={styles.container}>
      {/* Input Component */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChange={setInputText}
      />
      {/* List of destination */}
      <FlatList
        data={searchResults}
        renderItem={({ item }) => <Text>{item.description}</Text>}
      />
    </View>
  );
};

export default DestinationSearch;
