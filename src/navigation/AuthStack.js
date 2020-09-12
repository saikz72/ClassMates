import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import GetStartedScreen from '../screens/GetStartedScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const RootStack = createStackNavigator();

//controls the authentication navigation flow
const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="screen">
    <RootStack.Screen name="GetStartedScreen" component={GetStartedScreen} />
    <RootStack.Screen name="SignupScreen" component={SignupScreen} />
    <RootStack.Screen name="LoginScreen" component={LoginScreen} />
    <RootStack.Screen
      name="ForgotPasswordScreen"
      component={ForgotPasswordScreen}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
