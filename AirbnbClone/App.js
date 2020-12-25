/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./src/screens/Home";
import SearchResultsScreen from "./src/screens/SearchResults";
import DestinationSearchScreend from "./src/screens/DestinationSearch";
import Post from "./src/components/Post";
import feed from "./assets/data/feed";

Icon.loadFont();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen />
        <ScrollView>
          {feed.map((data) => {
            return <Post data={data} />;
          })}
        </ScrollView> */}
        {/* <SearchResultsScreen /> */}
        <DestinationSearchScreend />
      </SafeAreaView>
    </>
  );
};

export default App;
