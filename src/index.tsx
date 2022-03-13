import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import Screens from './navigation';

const App = () => {
  return (
    <View style={styles.body}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <Screens />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
