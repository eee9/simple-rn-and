import React from 'react';
import {
  View,
  Text,
  Button,
  BackHandler,
  Platform,
  StyleSheet,
} from 'react-native';

// Note. Using here export breaks quick Hot Reload
const andAPIlvl = (): string =>
  Platform.OS === 'android' ? Platform.Version.toString() : '';

const appVer = 'r07, L2A';

const App = () => {
  return (
    <View style={styles.MainView}>
      <Text style={styles.Text1}>{appVer}</Text>
      <Text style={styles.Text2}>Simple React Native app.</Text>
      <Text style={styles.Text3}>(TypeScript, API: {andAPIlvl()})</Text>
      <Text> </Text>
      <Button
        title="  Exit  "
        onPress={() => {
          BackHandler.exitApp();
        }}
      />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text1: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  Text2: {
    color: 'blue',
    fontSize: 18,
  },
  Text3: {
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
