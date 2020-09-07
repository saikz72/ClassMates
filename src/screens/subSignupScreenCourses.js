import React, { useContext, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import AuthContext from '../components/context/AuthContext';
import MajorButton from '../components/MajorButton';
import SubSignupScreenTI from '../components/SubSignupScreenTI';
import StatusBar from '../components/StatusBar';
import Feather from 'react-native-vector-icons/Feather';

const subSignupScreenCourses = ({ navigation }) => {
  const { signupUserInFirebase } = useContext(AuthContext);
  const [course, setCourse] = useState('');

  return (
    <View style={styles.fullPage}>
      <Text style={styles.courseText}>Add to your courses list.</Text>

      {/* TextInput for user to input course */}
      <SubSignupScreenTI
        placeholder="course/course code"
        value={course}
        onChangeText={(course) => setCourse(course)}
        secureTextEntry={false}
        icon={<Feather name="book" color='rgb(61, 139, 227)' size={25} style={{alignSelf:'center'}}/>}
      />

      {/* StatusBar which shows stage of user sign up completion */}
      <StatusBar
        step="3 of 3"
        source={require('../../assets/3of3.png')}
      />

      {/* Finish button which navigates to the app HomeScreen */}
      <MajorButton
        text="Finish"
        nextScreen={() => signupUserInFirebase()}
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

  //the text that the user inputs as course
  courseText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgb(61, 139, 227)',
  },
});

export default subSignupScreenCourses;
