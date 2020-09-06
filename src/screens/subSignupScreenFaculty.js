import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import MajorButton from '../components/MajorButton';
import SubSignupScreenTI from '../components/SubSignupScreenTI';

const subSignupScreenFaculty = ({ navigation }) => {
  const[faculty, setFaculty] = useState('');
  return (
    <View style={styles.fullPage}>
      <Text style={styles.facultyText}>What's your faculty?</Text>

      {/* TextInput for user to input faculty */}
      <SubSignupScreenTI 
          placeholder="school email"
          value={faculty}
          onChangeText={(faculty)=>setEmail(faculty)}
          secureTextEntry={false}
        />

      {/* View that encapsulates the status bar and text  */}
      <View style={styles.statusBarView}>
        <Text style={styles.statusText}>1 of 3</Text>
        <Image source = {require("../../assets/1of3.png")} style={styles.statusBar}></Image>
      </View>

      {/* Next button which navigates to the subSignupScreenMajor */}
      <MajorButton 
        text="Next"
        nextScreen={()=> navigation.navigate('subSignupScreenMajor')}
        buttonWidth={320}
        borderRadius={20}
      />
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

  //the text that the user inputs as faculty
  facultyText:{
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgb(61, 139, 227)'
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

});

export default subSignupScreenFaculty;
