import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

const subSignupScreenCourses = ({ navigation }) => {
  return (
    <View style={styles.fullPage}>
      <Text style={styles.majorText}>Add to your courses list.</Text>
      
      {/* TextInput for user to input course */}
      <TextInput 
          style = {styles.majorTI}
          placeholder= "start typing course name"
          placeholderTextColor= 'rgb(207, 207, 207)'
          autoCorrect = {false}
      />

      {/* View that encapsulates the status bar and text  */}
      <View style={styles.statusBarView}>
        <Text style={styles.statusText}>3 of 3</Text>
        <Image source = {require("../../assets/3of3.png")} style={styles.statusBar}></Image>
      </View>

      {/* Next Button */}
      <TouchableOpacity onPress = {() => navigation.navigate('subSignupScreenCourses')}>
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>Next</Text>
        </View>
      </TouchableOpacity>  
    </View>
  );
};

const styles = StyleSheet.create({
  //styling for: 

  //the entire page/background
  fullPage: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(232, 232, 232)',
  },

  //the text that the user inputs
  majorText:{
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgb(61, 139, 227)'
  },

  //the text input for user's major
  majorTI:{
    borderColor: 'rgb(61, 139, 227)',
    backgroundColor: 'rgba(0,0,0,0)',
    height: 65,
    width: 320,
    marginVertical: 10,
    borderRadius: 4,
    fontSize: 18,
    color: 'black',
    borderBottomWidth: 2,
    fontSize: 30   
  },

  //the status bar
  statusBar:{
    height: 15,
    width: 320,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20
  },

  //the view that encapsulates the status bar status text
  statusBarView:{
    width: 320,
  },

  //the text for status bar "1of3"
  statusText:{
      fontSize: 15,
      fontWeight: '700',
      marginTop: 20,
      alignSelf: 'flex-end',
      color: 'grey'
  },

  //the background of the button
  buttonView:{
    height: 40,
    backgroundColor: 'rgb(61, 139, 227)',
    width: 325,
    borderRadius: 20,
    alignItems:'center',
    justifyContent: 'center'
  },

  //the text inside the button
  buttonText:{
    fontSize: 22,
    color: 'white',
    fontWeight: '500',
  },
});

export default subSignupScreenCourses;
