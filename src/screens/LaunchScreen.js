import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const LaunchScreeen = () => {
  return (
    // View for the whole screen that puts the logo right in the center of the screen
    <View style = {styles.fullPage}>
      <View>
        <Image source = {require("../../assets/logo.png")} style={styles.logo}/>
      </View>
    </View>  
  )
};

const styles = StyleSheet.create ({
  //styling for:
  
  //the logo
  logo:{
    height:  150,
    width: 190,
    alignSelf: 'center'
  },

  //the page/background
  fullPage:{
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
});

export default LaunchScreeen;
