import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const LaunchScreeen = () => {
  return (
    <View style = {styles.fullPage}>
      <View>
        <Image source = {require("../../assets/logo.png")} style={styles.image}/>
      </View>
    </View>  
  )
};

const styles = StyleSheet.create ({
  image:{
    height:  150,
    width: 190,
    alignSelf: 'center'
  },
  fullPage:{
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  button:{
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default LaunchScreeen;
