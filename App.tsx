import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import ReactNativeChatWrapper from './src/ReactNativeChatWrapper';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <ReactNativeChatWrapper />
    {/* <CoinbasePro /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  chart: {
    flex: 1,
  },
});

export default App;
