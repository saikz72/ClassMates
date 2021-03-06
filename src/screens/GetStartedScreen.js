import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MajorButton from '../components/MajorButton';

const GetStartedScreen = ({ navigation }) => {
  return (
    <View style={styles.fullPage}>
      {/* View that encapsulates ClassMates logo(main) */}
      <View style={styles.logoView}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>

      {/* View that encapsulates the image and text that describes the app */}
      <View style={styles.imageView}>
        <Image
          source={require('../../assets/collaboration.jpg')}
          style={styles.image}
        />
        <Text style={styles.about}>
          ClassMates is a way to remotely connect students with other students
          undertaking the same course. It allows students to collaborate and
          share knowledge with each other.
        </Text>
      </View>

      {/* Get started button which navigates to the SignupScreen */}
      <MajorButton
        text="Get started"
        nextScreen={() => navigation.navigate('SignupScreen')}
        buttonWidth={270}
        borderRadius={20}
      />

      {/* View that encapsulates text and button about signing if user has an account */}
      <View style={styles.signView}>
        <Text style={{ fontSize: 13, color: 'grey' }}>Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text
            style={{
              fontSize: 15,
              color: 'rgb(61, 139, 227)',
              fontWeight: 'bold',
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //styling for:

  //the ClassMates logo (main version)
  logo: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },

  //the view that holds the image
  imageView: {
    borderColor: 'black',
    width: 330,
    height: 280,
    marginBottom: 23,
    justifyContent: 'space-between',
  },

  //the view that holds the logo
  logoView: {
    borderColor: 'black',
  },

  //the image
  image: {
    height: 180,
    width: 290,
    alignSelf: 'center',
    borderRadius: 10,
  },

  //the text that describes the app
  about: {
    textAlign: 'center',
    fontSize: 15,
    color: 'rgb(61, 139, 227)',
  },

  //the full page/background
  fullPage: {
    flex: 1,
    padding: 100,
    backgroundColor: 'rgb(232, 232, 232)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //the view that encapsulates the "have account" text and "Sign in" text
  signView: {
    alignItems: 'center',
    marginTop: 20,
    height: 40,
    borderColor: 'black',
    justifyContent: 'space-between',
  },
});

export default GetStartedScreen;
