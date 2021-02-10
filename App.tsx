/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button, BackHandler, Platform} from 'react-native';

export const andAPIlvl = (): string => Platform.OS === 'android' ? Platform.Version.toString() : '';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'cyan', alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'black', fontSize: 22}}>
        r02, L2A
      </Text>
      <Text style={{color: 'blue', fontSize: 18}}>
        Hi, Simplest React Native app.
      </Text>
      <Text style={{color: 'red', fontSize: 14}}>
        (TypeScript, API: {andAPIlvl()})
      </Text>
      <Text> </Text>
      <Button title="  Exit  " onPress={() => { BackHandler.exitApp();}} />
    </View>
  );
};
export default App;
