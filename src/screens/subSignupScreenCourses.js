import React, { useContext, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import firebase from '../firebase';
import MajorButton from '../components/MajorButton';
import SubSignupScreenTI from '../components/SubSignupScreenTI';
import CourseTab from '../components/CourseTab';
import StatusBar from '../components/StatusBar';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../components/providers/AuthProvider';

//these handle signup user inh firebase, the course the user is typing in and course list
const subSignupScreenCourses = ({ navigation }) => {
  const [course, setCourse] = useState('');
  const [courseList, setCourseList] = useState([]);
  const [state, dispatch] = useContext(AuthContext);

  //this is code that is called when user tries to input a course that is already on the list
  const duplicateEntry = () => {
    Alert.alert(
      'Duplicate entry',
      'Hmm...seems like that course is already on your list.',
      [
        {
          text: 'Ok',
          onPress: () => setCourse(''),
        },
      ],
      { cancelable: false }
    );
  };

  //this is code that is called when user tries to input a course that is already on the list
  const invalidCourse = () => {
    Alert.alert(
      'Invalid course',
      'Oops...seems like that course does not exist, or your input is invalid.',
      [
        {
          text: 'Ok',
          onPress: () => setCourse(''),
        },
      ],
      { cancelable: false }
    );
  };

  // these characters are not allowed in course name string
  const specialChars = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '-',
    ' _',
    ' =',
    '+',
    '/',
    '*',
    ':',
    ';',
    ',',
    '`',
    "'",
    '.',
    '?',
    ']',
    '[',
    '{',
    '}',
    '"',
    '|',
  ];
  //this adds the course to the array if it's not there already and if the string is not empty
  const submitAndClear = () => {
    courseList.includes(course)
      ? duplicateEntry()
      : course.length > 0
      ? setCourseList((prevCourseList) => [...prevCourseList, course])
      : invalidCourse();
    setCourse('');
    console.log(courseList);
  };

  //this deletes course from the course lists
  const deleteCourse = (input) => {
    setCourseList((prevCourse) => {
      return prevCourse.filter((course) => input !== course);
    });
  };

  const currentUser = firebase.auth().currentUser;

  const finishRegistration = () => {
    dispatch({ type: 'SET_USER', user: currentUser, token: 'TOKEN' });
    console.log(state);
  };

  return (
    <View style={styles.fullPage}>
      <Text style={styles.courseText}>Add to your courses list.</Text>

      {/* View that wraps text input and add button */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* TextInput for user to input course */}
        <SubSignupScreenTI
          placeholder="course"
          value={course}
          onChangeText={(course) => setCourse(course)}
          secureTextEntry={false}
          icon={
            <Feather
              name="book"
              color="rgb(61, 139, 227)"
              size={25}
              style={{ alignSelf: 'center' }}
            />
          }
        />

        {/* Add button which adds course to list */}
        <TouchableOpacity
          style={styles.addButtonBackground}
          onPress={() => submitAndClear()}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* StatusBar which shows stage of user sign up completion */}
      <StatusBar step="3 of 3" source={require('../../assets/3of3.png')} />

      {/* Finish button which navigates to the app HomeScreen */}
      <MajorButton
        text="Finish"
        nextScreen={() => finishRegistration()}
        buttonWidth={300}
        borderRadius={20}
      />

      {/* the course list is only displayed if the course list is not empty */}
      {courseList.length > 0 ? (
        <View style={styles.courseListView}>
          {/* <Text style = {styles.courseListText}>Course List</Text> */}
          <FlatList
            data={courseList}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              return <CourseTab course={item} deleteCourse={deleteCourse} />;
            }}
          />
        </View>
      ) : null}
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

  //the add button background
  addButtonBackground: {
    height: 20,
    width: 35,
    backgroundColor: 'rgb(61, 139, 227)',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },

  //the view that holds all the course tabs
  courseListView: {
    marginVertical: 10,
    borderColor: 'grey',
    borderWidth: 1,
    width: 300,
    padding: 20,
    borderRadius: 10,
  },

  //courseList text
  courseListText: {
    //color: 'rgb(61, 139, 227)',
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});

export default subSignupScreenCourses;
