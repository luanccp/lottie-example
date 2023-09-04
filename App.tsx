/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {View} from 'react-native';

import LottieView from 'lottie-react-native';

function App(): JSX.Element {
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <LottieView
        style={{flex: 1}}
        source={require('./assets/TrigonAnimation.json')}
        autoPlay
        loop
      />
    </View>
  );
}

export default App;
