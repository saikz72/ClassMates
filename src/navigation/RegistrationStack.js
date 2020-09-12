import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import subSignupScreenFaculty from '../screens/subSignupScreenFaculty';
import subSignupScreenMajor from '../screens/subSignupScreenMajor';
import subSignupScreenCourses from '../screens/subSignupScreenCourses';

const RootStack = createStackNavigator();

//controls the authentication navigation flow
const RegistrationStack = ({ navigation }) => (
  <RootStack.Navigator headerMode="screen">
    <RootStack.Screen
      name="subSignupScreenFaculty"
      component={subSignupScreenFaculty}
    />
    <RootStack.Screen
      name="subSignupScreenMajor"
      component={subSignupScreenMajor}
    />
    <RootStack.Screen
      name="subSignupScreenCourses"
      component={subSignupScreenCourses}
    />
  </RootStack.Navigator>
);

export default RegistrationStack;
