import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MajorButton from '../components/MajorButton';
import SubSignupScreenTI from '../components/SubSignupScreenTI';
import StatusBar from '../components/StatusBar';

const subSignupScreenMajor = ({ navigation }) => {
  const [major, setMajor] = useState('');

  return (
    <View style={styles.fullPage}>
      <Text style={styles.majorText}>What's your major?</Text>

      {/* TextInput for user to input major */}
      <SubSignupScreenTI
        placeholder="major/program"
        value={major}
        onChangeText={(major) => setMajor(major)}
        secureTextEntry={false}
      />

      {/* StatusBar which shows stage of user sign up completion */}
      <StatusBar
        step="2 of 3"
        source={require('../../assets/2of3.png')}
      />

      {/* Next button which navigates to the subSignupScreenCourses */}
      <MajorButton
        text="Next"
        nextScreen={() => navigation.navigate('subSignupScreenCourses')}
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

  //the text that the user inputs as major
  majorText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgb(61, 139, 227)'
  },
});

export default subSignupScreenMajor;
