import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Home from './src/screens/Home';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
