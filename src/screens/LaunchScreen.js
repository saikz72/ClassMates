import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const LaunchScreeen = ({ styles }) => {
  return (
    // View for the whole screen that puts the logo right in the center of the screen
    <View>
      <View>
        <Image source={require('../../assets/logo.png')} style={styles} />
      </View>
    </View>
  );
};

export default LaunchScreeen;
