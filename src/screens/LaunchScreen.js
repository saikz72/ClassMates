import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const LaunchScreeen = () => {
  return (
    // View for the whole screen that puts the logo right in the center of the screen
    <View style={styles.fullPage}>
      <View>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  //styling for:

  //the logo
  logo: {
    height: 150,
    width: 190,
    alignSelf: 'center'
  },

  //the page/background
  fullPage: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'rgb(232, 232, 232)',
  },
});

export default LaunchScreeen;
