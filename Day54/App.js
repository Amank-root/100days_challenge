import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.hero}>
      <View style={styles.some}>
        <Text>Home</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.some}>
        <Text>About</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.some}>
        <Text>Services</Text>
        <StatusBar style="auto" />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  hero: {
    width: '100%',
    height: '100vh',
    // flex: 1,
    margin: 0,
    flexDirection: 'column',
    display: 'inline-flex',
    zIndex: '999',
    backgroundColor: '#1fd8dc',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    // justifyContent: 'flex-start',

  },
  some: {
    width: '50%',
    // display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    display: 'flex',
  },
});

