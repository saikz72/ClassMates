import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import GetStartedScreen from './GetStartedScreen';
import SignupScreen from './SignupScreen';
import subSignupScreenFaculty from './subSignupScreenFaculty';
import subSignupScreenMajor from './subSignupScreenMajor';
import subSignupScreenCourses from './subSignupScreenCourses';
import HomeScreen from './HomeScreen';

const RootStack = createStackNavigator();

//controls the authentication navigation flow
const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="screen">
    <RootStack.Screen name="GetStartedScreen" component={GetStartedScreen} />
    <RootStack.Screen name="SignupScreen" component={SignupScreen} />
    <RootStack.Screen name="LoginScreen" component={LoginScreen} />
    <RootStack.Screen name="HomeScreen" component={HomeScreen} />
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

export default RootStackScreen;
