import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import LaunchScreen from '../screens/LaunchScreen';

export default function Loading() {
  return (
    <View style={styles.loadingContainer}>
      <LaunchScreen style={styles.logo} />
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 150,
    width: 190,
    alignSelf: 'center',
  },
});
