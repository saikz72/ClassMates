import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MajorButton from '../components/MajorButton';
import SubSignupScreenTI from '../components/SubSignupScreenTI';
import StatusBar from '../components/StatusBar';
import Feather from 'react-native-vector-icons/Feather';

const subSignupScreenFaculty = ({ navigation }) => {
  const [faculty, setFaculty] = useState('');
  return (
    <View style={styles.fullPage}>
      <Text style={styles.facultyText}>What's your faculty?</Text>

      {/* TextInput for user to input faculty */}
      <SubSignupScreenTI
        placeholder="school faculty"
        value={faculty}
        onChangeText={(faculty) => setFaculty(faculty)}
        secureTextEntry={false}
        icon={<Feather name="home" color='rgb(61, 139, 227)' size={25} style={{alignSelf:'center'}}/>}
      />

      {/* StatusBar which shows stage of user sign up completion */}
      <StatusBar
        step="1 of 3"
        source={require('../../assets/1of3.png')}
      />

      {/* Next button which navigates to the subSignupScreenMajor */}
      <MajorButton
        text="Next"
        nextScreen={() => navigation.navigate('subSignupScreenMajor')}
        buttonWidth={300}
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
  facultyText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgb(61, 139, 227)',
    paddingVertical: 10
  },
});

export default subSignupScreenFaculty;
